import { useMemo } from 'react';

type Params = {
  languages: string[];
};

export const useLogic = (params: Params) => {
  const { languages } = params;

  const options = useMemo(
    () =>
      languages.map((language) => ({
        label: language,
        value: language,
      })),
    [],
  );

  return {
    options,
  };
};
