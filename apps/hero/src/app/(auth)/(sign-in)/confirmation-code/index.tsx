import { FC } from 'react';

import { ConfirmationCodeScreen } from '@hero24/common';

const ConfirmationCode: FC = () => {
  const onSuccessConfirmCallback = (): void => {
    return undefined;
  };

  return (
    <ConfirmationCodeScreen
      onSuccessConfirmCallback={onSuccessConfirmCallback}
    />
  );
};

export default ConfirmationCode;
