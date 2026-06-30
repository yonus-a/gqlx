/**
 * Runtime descriptors emitted by codegen and consumed by the builder.
 * Keep this shape stable — generated code targets it.
 */
export type FieldArgsMap = Record<string, Record<string, Record<string, string>>>;
export type FieldTypesMap = Record<string, Record<string, string>>;
export type WrappersMap = Record<string, { field: 'items' | 'data'; inner: string }>;

export interface Descriptors {
  FIELD_ARGS: FieldArgsMap;
  FIELD_TYPES: FieldTypesMap;
  WRAPPERS: WrappersMap;
  ROOT_QUERY_TYPE: string;
  ROOT_MUTATION_TYPE: string | null;
}
