import { useRouter } from 'expo-router';

type ReturnType = {
  onCompanySellerPress: () => void;
  onSelfEmployedPress: () => void;
};

export const useLogic = (): ReturnType => {
  const router = useRouter();

  // TODO replace with proper path after screen will be ready
  const onCompanySellerPress = () => {
    router.push('/');
  };

  // TODO replace with proper path after screen will be ready
  const onSelfEmployedPress = () => {
    router.push('/');
  };

  return {
    onCompanySellerPress,
    onSelfEmployedPress,
  };
};
