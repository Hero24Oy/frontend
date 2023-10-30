export type Keys<Type> = keyof Type;

export type Values<Type> = Type[Keys<Type>];
