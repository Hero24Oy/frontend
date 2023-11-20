import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Heading, VStack } from '@hero24/ui';

import { CompanyInfoForm } from '../../components';

import { useLogic } from './useLogic';

export const ProfessionalInfoScreen: FC = () => {
  const { control, isValid, submitData } = useLogic();

  return (
    // TODO replace text in heading with i18n call
    <>
      <StatusBar style="dark" />

      <VStack style={styles.container}>
        <Heading variant="H2">Add company info</Heading>

        <CompanyInfoForm
          control={control}
          isValid={isValid}
          submitData={submitData}
        />
      </VStack>
    </>
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
});
