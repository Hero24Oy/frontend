import { useRouter } from 'expo-router';
import { HeroType } from 'hero24-types';

import { useProfileCreationStore } from '$modules/Profile/stores';

export const useLogic = () => {
  const router = useRouter();
  const { setWelcome } = useProfileCreationStore();

  const professionalHeroHandler = () => {
    setWelcome({ heroType: HeroType.PROFESSIONAL });
    router.push('/professional-info/');
  };

  // TODO replace with proper path after screen will be ready
  const individualHeroHandler = () => {
    setWelcome({ heroType: HeroType.INDIVIDUAL });
    router.push('/individual-info/');
  };

  return {
    professionalHeroHandler,
    individualHeroHandler,
  };
};
