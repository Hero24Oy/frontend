import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Card, HStack, Image, Text } from '@hero24/ui';

import { useLogic } from './hooks';

import { companySeller, selfEmployed } from '$modules/Auth/assets';

export const SellerTypeCards: FC = () => {
  const { onCompanySellerPress, onSelfEmployedPress } = useLogic();

  return (
    <HStack style={styles.hStack}>
      <Card onPress={onCompanySellerPress} style={styles.card}>
        <Image source={companySeller} style={styles.image} />

        <Text variant="regular" style={styles.text}>
          I run a company
        </Text>
      </Card>

      <Card onPress={onSelfEmployedPress} style={styles.card}>
        <Image source={selfEmployed} style={styles.image} />

        <Text variant="regular" style={styles.text}>
          I'm self employed
        </Text>
      </Card>
    </HStack>
  );
};

const styles = StyleSheet.create({
  hStack: {
    gap: 8,
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: -22.5,
  },
  card: {
    margin: 0,
    padding: 0,
    alignItems: 'center',
    overflow: 'visible',
    height: 120,
    gap: 6,
  },
  text: {
    width: 168,
    textAlign: 'center',
  },
});
