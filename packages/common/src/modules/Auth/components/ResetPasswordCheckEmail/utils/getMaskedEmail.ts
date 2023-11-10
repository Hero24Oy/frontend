const MASK = '***';
const emailNameRegex = /.*(?=[@])/;

export const getMaskedEmail = (email: string): string => {
  return email.replace(emailNameRegex, email[0].concat(MASK));
};
