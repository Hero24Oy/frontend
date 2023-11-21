import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Color, View } from '@hero24/ui';

import { SetProfileForm } from '../../components';

import { useLogic } from './useLogic';

export const SetProfile: FC = () => {
  const props = useLogic();

  return (
    <View style={styles.screen}>
      <SetProfileForm {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Color.WHITE_00,
    flex: 1,
  },
});
