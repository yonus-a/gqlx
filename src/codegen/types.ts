export type Kind = 'SCALAR' | 'OBJECT' | 'INTERFACE' | 'UNION' | 'ENUM' | 'INPUT_OBJECT' | 'LIST' | 'NON_NULL';
export type TypeRef = { kind: Kind; name: string | null; ofType: TypeRef | null };
export type InputValue = { name: string; type: TypeRef; defaultValue: string | null };
export type Field = { name: string; args: InputValue[]; type: TypeRef };
export type GqlType = {
  kind: Kind;
  name: string;
  fields: Field[] | null;
  inputFields: InputValue[] | null;
  interfaces: { name: string }[] | null;
  enumValues: { name: string }[] | null;
  possibleTypes: { name: string }[] | null;
};
export type Introspection = {
  __schema: {
    queryType: { name: string } | null;
    mutationType: { name: string } | null;
    subscriptionType: { name: string } | null;
    types: GqlType[];
  };
};
