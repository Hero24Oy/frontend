import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Heading, View, VStack } from '@hero24/ui';

import { ProfessionalInfoForm } from '../../components';

import { useLogic } from './useLogic';

export const ProfessionalInfoScreen: FC = () => {
  const { multiScreenProgressBar, control, isValid, submitData } = useLogic();

  return (
    <>
      <StatusBar style="dark" />

      <VStack style={styles.container}>
        <View style={styles.heading}>
          {multiScreenProgressBar}

          <Heading style={styles.text} variant="H2">
            Add company info
          </Heading>
        </View>

        <ProfessionalInfoForm
          control={control}
          isValid={isValid}
          submitData={submitData}
        />
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
