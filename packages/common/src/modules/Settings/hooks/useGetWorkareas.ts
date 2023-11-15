import { useEffect, useState } from 'react';

import { SettingsDictionaryKeys, useGetWorkareasQuery } from '../graphql';

type UseGetWorkareas = (lang: `${SettingsDictionaryKeys}`) => {
  isLoading: boolean;
  workareas: string[];
};

export const useGetWorkareas: UseGetWorkareas = (lang) => {
  const { getWorkareas } = useGetWorkareasQuery();
  const [isLoading, setIsLoading] = useState(false);
  const [workareas, setWorkareas] = useState<string[]>([]);

  const fetchCities = async () => {
    setIsLoading(true);

    const response = await getWorkareas.refetch();
    const fetchedWorkareas = response.data.response.workareas;

    setWorkareas(fetchedWorkareas[lang]);

    setIsLoading(false);
  };

  useEffect(() => {
    void fetchCities();
  }, []);

  return { isLoading, workareas };
};
