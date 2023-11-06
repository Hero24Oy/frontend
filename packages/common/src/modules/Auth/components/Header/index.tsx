import { logo } from 'modules/Auth/assets';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { HStack, Image, View } from '@hero24/ui';

export const Header: FC = () => {
  return (
    <HStack style={styles.wrapper}>
      <View style={styles.logoContainer}>
        <Image source={logo} />
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
