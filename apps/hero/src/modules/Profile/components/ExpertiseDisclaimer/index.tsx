import { FC } from 'react';

import { ChevronLeftIcon as goBackIcon, FullScreenModal } from '@hero24/ui';

import { ModalFooter } from '../WorkDataForm/components';

import { DisclaimerBody } from './components';
import { useLogic } from './useLogic';

type Props = {
  isDisclaimerOpen: boolean;
  onApplyHandler: () => void;
  onDisclaimerCloseHandler: () => void;
};

export const ExpertiseDisclaimer: FC<Props> = (props) => {
  const { onApplyHandler, isDisclaimerOpen, onDisclaimerCloseHandler } = props;

  const { disclaimerInfo } = useLogic();

  return (
    <FullScreenModal
      hasBodyPadding
      isOpen={isDisclaimerOpen}
      header={{
        goBackIcon,
        goBack: onDisclaimerCloseHandler,
      }}
      body={<DisclaimerBody {...disclaimerInfo} />}
      footer={
        <ModalFooter
          onClose={onApplyHandler}
          title="Agree & Continue"
          isValid
        />
      }
    />
  );
};
