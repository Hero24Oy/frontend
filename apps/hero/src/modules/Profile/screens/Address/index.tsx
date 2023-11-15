import { FC } from 'react';

import { StackKeyboardAwareScrollView } from '@hero24/common';

import { AddressForm, Header } from './components';

export const AddressScreen: FC = () => {
  return (
    <StackKeyboardAwareScrollView>
      <Header />
      <AddressForm />
    </StackKeyboardAwareScrollView>
  );
};
