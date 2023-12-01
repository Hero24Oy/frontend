import { useMemo } from 'react';

type Params = {
  places: string[];
};

export const useLogic = (params: Params) => {
  const { places } = params;

  const options = useMemo(
    () =>
      places.map((place) => ({
        label: place,
        value: place,
      })),
    [],
  );

  return {
    options,
  };
};
