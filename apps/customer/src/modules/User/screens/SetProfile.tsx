import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Color, View } from '@hero24/ui';

import { SetProfileForm } from '../components';

export const SetProfile: FC = () => {
  return (
    <View style={styles.screen}>
      <SetProfileForm />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Color.WHITE_00,
    flex: 1,
  },
});
