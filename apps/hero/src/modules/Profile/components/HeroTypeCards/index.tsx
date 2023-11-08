import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { HStack } from '@hero24/ui';

import { HeroTypeCard } from '../HeroTypeCard';

import { useLogic } from './useLogic';

import { companyHeroImage, selfEmployedImage } from '$/modules/Profile/assets';

export const HeroTypeCards: FC = () => {
  const { companyHeroHandler, selfEmployedHandler } = useLogic();

  return (
    <HStack style={styles.hStack}>
      {/* TODO replace text in cards with i18n call */}
      <HeroTypeCard
        selectionHandler={companyHeroHandler}
        imageSource={companyHeroImage}
        cardText="I run a company"
      />

      <HeroTypeCard
        selectionHandler={selfEmployedHandler}
        imageSource={selfEmployedImage}
        cardText="I'm self employed"
      />
    </HStack>
  );
};

const styles = StyleSheet.create({
  hStack: {
    gap: 8,
    justifyContent: 'center',
  },
});
