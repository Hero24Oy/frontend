import { CheckboxOption } from '@hero24/ui';

type Params = {
  languages: string[];
};

export const useLogic = (params: Params) => {
  const { languages } = params;

  const prepareOptions = (languageSet: string[]): CheckboxOption[] => {
    return languageSet.map((language) => ({
      label: language,
      value: language,
    }));
  };

  const options = prepareOptions(languages);

  return {
    options,
  };
};
