import { useRouter } from 'expo-router';

type ReturnType = {
  companySellerHandler: () => void;
  selfEmployedHandler: () => void;
};

export const useLogic = (): ReturnType => {
  const router = useRouter();

  // TODO replace with proper path after screen will be ready
  const companySellerHandler = () => {
    router.push('/');
  };

  // TODO replace with proper path after screen will be ready
  const selfEmployedHandler = () => {
    router.push('/');
  };

  return {
    companySellerHandler,
    selfEmployedHandler,
  };
};
