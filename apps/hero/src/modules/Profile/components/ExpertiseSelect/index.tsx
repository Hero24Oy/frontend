import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { CloseIcon as goBackIcon, FullScreenModal, Select } from '@hero24/ui';

import { ExpertiseDisclaimer } from '../ExpertiseDisclaimer';
import { ModalFooter, TextButton } from '../WorkDataForm/components';
import {
  EXPERTISE_CATEGORIES_FIELD,
  EXPERTISE_CATEGORIES_NAMES,
} from '../WorkDataForm/constants';
import { useIsFieldValid } from '../WorkDataForm/hooks';
import { WorkDataSelectsProps } from '../WorkDataForm/types';

import { ModalBody } from './components';
import { useGetCategoryName } from './hooks';
import { useLogic } from './useLogic';

export const ExpertiseSelect: FC<WorkDataSelectsProps> = (props) => {
  const { control, getValues, name, resetField, setValue } = props;

  const { isFieldValid } = useIsFieldValid({ name, control });

  const { useUpdateCategory } = useGetCategoryName({ setValue });

  const {
    expertise,
    isOpen,
    onApplyHandler,
    onOpenHandler,
    onCloseHandler,
    onDisclaimerCloseHandler,
    onDisclaimerOpenHandler,
    isDisclaimerOpen,
    onResetHandler,
  } = useLogic({
    getValues,
    resetField,
  });

  return (
    <>
      <Select
        control={control}
        name={EXPERTISE_CATEGORIES_NAMES}
        size="md"
        label="Expertise"
        onPress={onOpenHandler}
        hasDivider
      />

      <FullScreenModal
        isOpen={isOpen}
        header={{
          goBackIcon,
          title: 'Select expertise',
          goBack: onCloseHandler,
          rightComponent: (
            <TextButton
              title="Reset"
              onPress={onResetHandler}
              styles={styles.button}
            />
          ),
        }}
        body={
          <ModalBody
            control={control}
            name={EXPERTISE_CATEGORIES_FIELD}
            expertise={expertise}
            useUpdateCategory={useUpdateCategory}
          />
        }
        footer={
          <ModalFooter
            onClose={onDisclaimerOpenHandler}
            title="Apply"
            isValid={isFieldValid}
          />
        }
      />
      <ExpertiseDisclaimer
        isDisclaimerOpen={isDisclaimerOpen}
        onApplyHandler={onApplyHandler}
        onDisclaimerCloseHandler={onDisclaimerCloseHandler}
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
  },
});

export * from './types';
