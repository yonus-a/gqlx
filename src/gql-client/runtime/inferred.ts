/**
 * Compile-time helpers to narrow a model type `T` down to the shape selected by `S`.
 *
 * `S` is the Prisma-style Select object. The general rules:
 *   - `S extends true`               → return the whole `T`
 *   - `S extends { include: I }`     → recurse into `I` against `T`
 *   - object-of-keys `S`             → pick only matching keys, recursing into objects/arrays
 *   - `__on` / `__typename`          → handled as virtual passthrough
 *
 * Special rule for ItemsSerializer / DataSerializer wrappers: when `T` is shaped
 * `{ items: Array<U|null> }` or `{ data: U|null }` and is the *only* field, the
 * caller's `include` describes the inner type `U` directly (the builder re-wraps
 * `items { … }` / `data { … }` at runtime). The result keeps the wrapper shape.
 */

export type Selected<T, S> = S extends true
  ? T
  : S extends { include: infer I }
    ? T extends { items: Array<infer U | null> | null }
      ? keyof T extends 'items'
        ? { items: Array<SelectedFields<NonNullable<U>, I> | null> | null }
        : SelectedFields<T, I>
      : T extends { items: Array<infer U | null> }
        ? keyof T extends 'items'
          ? { items: Array<SelectedFields<NonNullable<U>, I> | null> }
          : SelectedFields<T, I>
        : T extends { data: infer U | null }
          ? keyof T extends 'data'
            ? { data: SelectedFields<NonNullable<U>, I> | null }
            : SelectedFields<T, I>
          : SelectedFields<T, I>
    : S extends object
      ? SelectedFields<T, S>
      : never;

type SelectedFields<T, S> = {
  [K in keyof S & keyof T]: T[K] extends Array<infer U> | null
    ? Array<Selected<NonNullable<U>, S[K]>> | Extract<T[K], null>
    : T[K] extends Array<infer U>
      ? Array<Selected<NonNullable<U>, S[K]>>
      : T[K] extends infer U | null
        ? Selected<NonNullable<U>, S[K]> | Extract<T[K], null>
        : Selected<T[K], S[K]>;
};

/**
 * Helper to merge an array-shaped root (`[{a:…},{b:…}]`) into the inferred return type.
 */
export type MergeRoot<S> = S extends readonly (infer P)[] ? UnionToIntersection<P> : S;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

/**
 * Mark specific keys of `T` as required.
 */
export type RequireKeys<T, K extends keyof T> = T & { [P in K]-?: T[P] };
