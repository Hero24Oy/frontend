import { useRouter } from 'expo-router';

type ReturnType = {
  onCompanySellerPress: () => void;
  onSelfEmployedPress: () => void;
};

export const useLogic = (): ReturnType => {
  const router = useRouter();

  const onCompanySellerPress = () => {
    router.push('/');
  };

  const onSelfEmployedPress = () => {
    router.push('/');
  };

  return {
    onCompanySellerPress,
    onSelfEmployedPress,
  };
};
