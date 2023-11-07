import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Color, VStack } from '@hero24/ui';

import { SellerTypeCards, WelcomeHeading } from '../components';

export const SellerTypeScreen: FC = () => {
  return (
    <>
      <StatusBar style="dark" />
      <VStack style={styles.container}>
        <WelcomeHeading />
        <SellerTypeCards />
      </VStack>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 56,
    backgroundColor: Color.WHITE_00,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
