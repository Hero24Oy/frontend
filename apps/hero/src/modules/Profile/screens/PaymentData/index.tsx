import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Heading, View, VStack } from '@hero24/ui';

import { useLogic } from './useLogic';

import { PaymentDataForm } from '$modules/Profile/components';

export const PaymentDataScreen: FC = () => {
  const { multiScreenProgressBar, ...restProps } = useLogic();

  return (
    // TODO replace text with i18n calls.
    <VStack style={styles.container}>
      <View style={styles.heading}>
        {multiScreenProgressBar}

        <Heading variant="H2" style={styles.text}>
          Add payment data
        </Heading>
      </View>

      <PaymentDataForm {...restProps} />
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
  heading: {
    gap: 24,
    paddingVertical: 10,
  },
  text: {
    marginVertical: 0,
  },
});
