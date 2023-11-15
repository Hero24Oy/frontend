import { useRouter } from 'expo-router';

import { ProfileType, useProfileCreationStore } from '$modules/Profile/stores';

export const useLogic = () => {
  const router = useRouter();
  const { setWelcome } = useProfileCreationStore();

  // TODO replace with proper path after screen will be ready
  const companyHeroHandler = () => {
    setWelcome({ profileType: ProfileType.COMPANY });
    router.push('/');
  };

  // TODO replace with proper path after screen will be ready
  const selfEmployedHandler = () => {
    setWelcome({ profileType: ProfileType.SELF_EMPLOYED });
    router.push('/');
  };

  return {
    companyHeroHandler,
    selfEmployedHandler,
  };
};
