import {
  Country,
  CountryCode,
  FlagType,
  getAllCountries,
} from 'react-native-country-picker-modal';

export const getInitialCountry = async (
  initialCountryCode: CountryCode,
): Promise<Country | undefined> => {
  const countries = await getAllCountries(FlagType.FLAT);

  return countries.find((country) => country.cca2 === initialCountryCode);
};
