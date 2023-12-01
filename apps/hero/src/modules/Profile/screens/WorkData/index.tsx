import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Heading, View, VStack } from '@hero24/ui';

import { useLogic } from './useLogic';

import { WorkDataForm } from '$modules/Profile/components/WorkDataForm';

export const WorkDataScreen: FC = () => {
  const { multiScreenProgressBar, ...restProps } = useLogic();

  return (
    <>
      <StatusBar style="dark" />

      <VStack style={styles.container}>
        <View style={styles.heading}>
          <View>{multiScreenProgressBar}</View>

          <Heading style={styles.text} variant="H2">
            Add work data
          </Heading>
        </View>

        <WorkDataForm {...restProps} />
      </VStack>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    gap: 24,
  },
  text: {
    marginVertical: 0,
  },
  container: {
    flex: 1,
    gap: 24,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
});
