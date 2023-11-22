import { useRouter } from 'expo-router';
import { HeroType } from 'hero24-types';

import { useProfileCreationStore } from '$modules/Profile/stores';

export const useLogic = () => {
  const router = useRouter();
  const { setWelcome } = useProfileCreationStore();

  const companyHeroHandler = () => {
    setWelcome({ heroType: HeroType.PROFESSIONAL });
    router.push('/company-info');
  };

  // TODO replace with proper path after screen will be ready
  const selfEmployedHandler = () => {
    setWelcome({ heroType: HeroType.INDIVIDUAL });
    router.push('/');
  };

  return {
    companyHeroHandler,
    selfEmployedHandler,
  };
};
