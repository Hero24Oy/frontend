import { FC } from 'react';

import { CloseIcon as goBackIcon, FullScreenModal, Select } from '@hero24/ui';

import { ModalFooter } from '../WorkDataForm/components';
import { useIsFieldValid } from '../WorkDataForm/hooks';
import { WorkDataSelectsProps } from '../WorkDataForm/types';

import { ModalBody } from './components';
import { useLogic } from './useLogic';

export const PlacesToWorkSelect: FC<WorkDataSelectsProps> = (props) => {
  const { control, getValues, name, resetField } = props;

  const { isFieldValid } = useIsFieldValid({ name, control });

  const { places, isOpen, onApplyHandler, onOpenHandler, onCloseHandler } =
    useLogic({
      getValues,
      resetField,
    });

  return (
    <>
      <Select
        control={control}
        name={name}
        size="md"
        label="Places are willing to work"
        onPress={onOpenHandler}
        hasDivider
      />

      <FullScreenModal
        isOpen={isOpen}
        header={{
          goBackIcon,
          title: 'Place to work',
          goBack: onCloseHandler,
        }}
        body={<ModalBody control={control} name={name} places={places ?? []} />}
        footer={
          <ModalFooter
            onClose={onApplyHandler}
            title="Apply"
            isValid={isFieldValid}
          />
        }
      />
    </>
  );
};
