import { useRouter } from 'expo-router';

export const useLogic = () => {
  const router = useRouter();

  // TODO replace with proper path after screen will be ready
  const companyHeroHandler = () => {
    router.push('/');
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
