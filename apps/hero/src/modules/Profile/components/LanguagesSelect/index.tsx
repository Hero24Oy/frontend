import { FC } from 'react';

import { Button, CloseIcon as goBackIcon, FullScreenModal } from '@hero24/ui';

import { ModalBody, ModalFooter } from './components';
import { LanguagesSelectProps } from './types';
import { useLogic } from './useLogic';

export const LanguagesSelect: FC<LanguagesSelectProps> = (props) => {
  const { control, getValues, name, resetField } = props;

  const {
    isOpen,
    languages,
    openModalHandler,
    onApplyHandler,
    onCloseHandler,
  } = useLogic({ getValues, resetField });

  return (
    // TODO Replace button with select after its implementation. Add i18n.
    <>
      <Button onPress={openModalHandler}>Set Modal Visible</Button>

      <FullScreenModal
        isOpen={isOpen}
        header={{
          goBackIcon,
          title: 'Select language',
          goBack: onCloseHandler,
        }}
        body={
          <ModalBody
            control={control}
            name={name}
            languages={languages ?? []}
          />
        }
        footer={<ModalFooter onClose={onApplyHandler} />}
      />
    </>
  );
};
