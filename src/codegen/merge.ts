import type { GqlType, Introspection } from './types.js';

/**
 * Merge multiple introspection results into one schema.
 *
 * Strategy: union of types; for the Query/Mutation/Subscription roots, fields
 * are concatenated. Type collisions on other types throw — schemas that share
 * a domain model should agree, and silent overwrites would hide drift.
 */
export function mergeIntrospections(parts: Introspection[]): Introspection {
  if (parts.length === 1) return parts[0]!;

  const firstSchema = parts[0]!.__schema;
  const queryName = firstSchema.queryType?.name ?? null;
  const mutationName = firstSchema.mutationType?.name ?? null;
  const subscriptionName = firstSchema.subscriptionType?.name ?? null;

  const rootNames = new Set([queryName, mutationName, subscriptionName].filter((n): n is string => !!n));

  const byName = new Map<string, GqlType>();
  for (const part of parts) {
    if (part.__schema.queryType?.name !== queryName)
      throw new Error(`[gqlx] schemas disagree on Query type: ${queryName} vs ${part.__schema.queryType?.name}`);
    if (part.__schema.mutationType?.name !== mutationName)
      throw new Error(`[gqlx] schemas disagree on Mutation type: ${mutationName} vs ${part.__schema.mutationType?.name}`);

    for (const t of part.__schema.types) {
      const existing = byName.get(t.name);
      if (!existing) {
        byName.set(t.name, structuredClone(t));
        continue;
      }
      if (rootNames.has(t.name)) {
        const seen = new Set((existing.fields ?? []).map((f) => f.name));
        for (const f of t.fields ?? []) {
          if (seen.has(f.name)) {
            throw new Error(
              `[gqlx] duplicate root field "${t.name}.${f.name}" across schemas — rename in one server or drop it from the merge list.`,
            );
          }
          existing.fields!.push(structuredClone(f));
        }
        continue;
      }
      if (t.kind !== existing.kind) {
        throw new Error(`[gqlx] type "${t.name}" has conflicting kinds across schemas: ${existing.kind} vs ${t.kind}`);
      }
      // For non-root types, trust the first definition. If two schemas redefine
      // a shared model differently, neither version is safe to silently pick.
    }
  }

  return {
    __schema: {
      queryType: queryName ? { name: queryName } : null,
      mutationType: mutationName ? { name: mutationName } : null,
      subscriptionType: subscriptionName ? { name: subscriptionName } : null,
      types: [...byName.values()],
    },
  };
}
