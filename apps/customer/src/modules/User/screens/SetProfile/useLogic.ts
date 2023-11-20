import { useRouter } from 'expo-router';

export const useLogic = () => {
  const router = useRouter();

  const onSetProfileSucceed = () => {
    router.push('/home');
  };

  return { onSetProfileSucceed };
};
