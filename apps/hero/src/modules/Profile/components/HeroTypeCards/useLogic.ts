import { useRouter } from 'expo-router';

export const useLogic = () => {
  const router = useRouter();

  const companyHeroHandler = () => {
    router.push('/company-info');
  };

  // TODO replace with proper path after screen will be ready
  const selfEmployedHandler = () => {
    router.push('/');
  };

  return {
    companyHeroHandler,
    selfEmployedHandler,
  };
};
