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

export type MergeRoot<S> = S extends readonly (infer P)[] ? UnionToIntersection<P> : S;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export type RequireKeys<T, K extends keyof T> = T & { [P in K]-?: T[P] };
