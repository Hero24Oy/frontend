import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Color, Heading, VStack } from '@hero24/ui';

import { AddCompanyInfoForm } from '../components';

export const AddCompanyInfoScreen: FC = () => {
  return (
    // TODO replace text in heading with i18n call
    <VStack style={styles.vStack}>
      <Heading variant="H2">Add company info</Heading>
      <AddCompanyInfoForm />
    </VStack>
  );
};

const styles = StyleSheet.create({
  vStack: {
    flex: 1,
    gap: 24,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    backgroundColor: Color.WHITE_00,
  },
});
