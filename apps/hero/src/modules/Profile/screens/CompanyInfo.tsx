import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Heading, VStack } from '@hero24/ui';

import { CompanyInfoForm } from '../components';

export const CompanyInfoScreen: FC = () => {
  return (
    // TODO replace text in heading with i18n call
    <VStack style={styles.container}>
      <Heading variant="H2">Add company info</Heading>
      <CompanyInfoForm />
    </VStack>
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
