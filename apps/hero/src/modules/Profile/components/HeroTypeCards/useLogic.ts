import { useRouter } from 'expo-router';

import { HeroType, useProfileCreationStore } from '$modules/Profile/stores';

export const useLogic = () => {
  const router = useRouter();
  const { setWelcome } = useProfileCreationStore();

  const companyHeroHandler = () => {
    setWelcome({ profileType: HeroType.PROFESSIONAL });
    router.push('/company-info');
  };

  // TODO replace with proper path after screen will be ready
  const selfEmployedHandler = () => {
    setWelcome({ profileType: HeroType.INDIVIDUAL });
    router.push('/');
  };

  return {
    companyHeroHandler,
    selfEmployedHandler,
  };
};
