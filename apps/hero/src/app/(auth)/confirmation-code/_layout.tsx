import { FC } from 'react';

import { ExpoStack } from '@hero24/common';
import { KeyboardAvoidingView } from '@hero24/ui';

const ConfirmationCodeLayout: FC = () => {
  return (
    <KeyboardAvoidingView>
      <ExpoStack title="Confirmation" />
    </KeyboardAvoidingView>
  );
};

export default ConfirmationCodeLayout;
