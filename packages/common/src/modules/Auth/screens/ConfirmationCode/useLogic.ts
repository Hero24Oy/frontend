import { parsePhoneNumber } from 'libphonenumber-js';

export const useLogic = () => {
  // TODO replace with phone getter from store
  const phone = '+3581234567890';

  const parsedPhone = parsePhoneNumber(phone).formatInternational();

  return { phone: parsedPhone };
};
