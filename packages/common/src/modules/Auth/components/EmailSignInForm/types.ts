export type EmailSignInFormData = {
  email: string;
  password: string;
};

export type EmailSignInFormProps = {
  onForgotPasswordCallback: () => void;
};
