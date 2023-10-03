// eslint-disable-next-line eslint-comments/disable-enable-pair -- ESLint rule
/* eslint-disable @typescript-eslint/no-explicit-any -- Will be dealt with in next pr */
// TODO better types

export type SignInReturn<Type = void> = {
  signIn: (...args: any) => Promise<Type>;
};

export type SignUpReturn<Type = void> = {
  signUp: (...args: any) => Promise<Type>;
};
