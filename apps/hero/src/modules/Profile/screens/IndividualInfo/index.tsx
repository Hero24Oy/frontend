import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { StackKeyboardAwareScrollView } from '@hero24/common';
import { Heading } from '@hero24/ui';

import { useLogic } from './hooks';

import { IndividualInfoForm } from '$modules/Profile/components';

export const IndividualInfoScreen: FC = () => {
  const { ...restProps } = useLogic();

  return (
    // TODO replace text in heading with i18n call
    <>
      <StatusBar style="dark" />
      <StackKeyboardAwareScrollView style={styles.container}>
        <Heading variant="H2">Add personal info</Heading>
        <IndividualInfoForm {...restProps} />
      </StackKeyboardAwareScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
});
