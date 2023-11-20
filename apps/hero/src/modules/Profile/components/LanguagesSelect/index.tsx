import { FC } from 'react';

import { CloseIcon as goBackIcon, FullScreenModal, Select } from '@hero24/ui';

import { ModalBody, ModalFooter } from './components';
import { LanguagesSelectProps } from './types';
import { useLogic } from './useLogic';

export const LanguagesSelect: FC<LanguagesSelectProps> = (props) => {
  const { control, getValues, name, resetField } = props;

  const { isOpen, languages, onOpenHandler, onApplyHandler, onCloseHandler } =
    useLogic({ getValues, resetField });

  return (
    // TODO Replace text with i18n call.
    <>
      <Select
        control={control}
        name={name}
        size="md"
        label="Language to communicate"
        onPress={onOpenHandler}
        hasDivider
      />

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
