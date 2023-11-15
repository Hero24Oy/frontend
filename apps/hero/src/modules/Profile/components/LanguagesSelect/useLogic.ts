import { useGetLanguages } from '$modules/Profile/graphql';

export const useLogic = () => {
  const {
    getLanguages: { data, loading: isLanguagesLoading },
  } = useGetLanguages();

  // TODO with i18n we will be able to choose right languages set. For now - english set will be used.
  return {
    languages: data?.langs.en,
    isLanguagesLoading,
  };
};
