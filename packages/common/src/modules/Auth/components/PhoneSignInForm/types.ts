export type PhoneSignInFormData = {
  phone: string;
  code?: string;
};

export type PhoneSignInFormProps = {
  signInWithPhoneCallback: () => void;
};
