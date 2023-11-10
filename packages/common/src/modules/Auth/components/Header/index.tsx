import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { HStack, Image, View } from '@hero24/ui';

import { signInHeaderImage } from '$modules/Auth/assets';

export const Header: FC = () => {
  return (
    <HStack style={styles.wrapper}>
      <View style={styles.logoContainer}>
        <Image source={signInHeaderImage} />
      </View>
    </HStack>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    width: 162,
    height: 48,
  },
});
