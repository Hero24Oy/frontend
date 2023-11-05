import { FC } from 'react';

import { ConfirmationCodeScreen } from '@hero24/common';

const ConfirmationCode: FC = () => {
  const onSuccessConfirmHandler = (): void => {
    return undefined;
  };

  return (
    <ConfirmationCodeScreen onSuccessConfirmHandler={onSuccessConfirmHandler} />
  );
};

export default ConfirmationCode;
