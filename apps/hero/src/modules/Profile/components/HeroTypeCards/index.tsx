import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { HStack } from '@hero24/ui';

import { HeroTypeCard } from '../HeroTypeCard';

import { useLogic } from './useLogic';

import { companyHeroImage, selfEmployedImage } from '$modules/Profile/assets';

export const HeroTypeCards: FC = () => {
  const { companyHeroHandler, selfEmployedHandler } = useLogic();

  return (
    <HStack style={styles.hStack}>
      {/* TODO replace text in cards with i18n call */}
      <HeroTypeCard
        selectionHandler={companyHeroHandler}
        imageSource={companyHeroImage}
      >
        I run a company
      </HeroTypeCard>

      <HeroTypeCard
        selectionHandler={selfEmployedHandler}
        imageSource={selfEmployedImage}
      >
        I'm self employed
      </HeroTypeCard>
    </HStack>
  );
};

const styles = StyleSheet.create({
  hStack: {
    gap: 8,
    justifyContent: 'center',
  },
});
