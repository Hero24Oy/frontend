import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { StackKeyboardAwareScrollView } from '@hero24/common';
import { Heading, View } from '@hero24/ui';

import { headingTextMapper } from './constants';
import { useLogic } from './useLogic';

import { AddressForm } from '$modules/Profile/components';

export const AddressScreen: FC = () => {
  const { multiScreenProgressBar, heroType, ...restProps } = useLogic();

  const text = headingTextMapper[heroType];

  return (
    <StackKeyboardAwareScrollView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.heading}>
        {multiScreenProgressBar}

        <Heading variant="H2" style={styles.text}>
          {text}
        </Heading>
      </View>

      <AddressForm {...restProps} />
    </StackKeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  heading: {
    gap: 24,
    paddingVertical: 10,
  },
  text: {
    marginVertical: 0,
  },
});
