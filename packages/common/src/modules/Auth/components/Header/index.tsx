import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { HStack, Text, View } from '@hero24/ui';

export const Header: FC = () => {
  return (
    <HStack style={styles.wrapper}>
      <View style={styles.logoContainer}>
        {/* TODO replace with i18n call */}
        <Text>LOGO HERE</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
