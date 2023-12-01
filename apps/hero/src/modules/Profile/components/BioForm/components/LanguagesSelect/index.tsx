import { FC } from 'react';
import { StyleSheet } from 'react-native';

import {
  Button,
  CheckboxGroup,
  CloseIcon as goBackIcon,
  FullScreenModal,
  Select,
} from '@hero24/ui';

import { LanguagesSelectProps } from './types';
import { useLogic } from './useLogic';

export const LanguagesSelect: FC<LanguagesSelectProps> = (props) => {
  const { control, getValues, name, resetField } = props;

  const { isOpen, options, onOpenHandler, onApplyHandler, onCloseHandler } =
    useLogic({ getValues, resetField, name });

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
          <CheckboxGroup
            control={control}
            name={name}
            options={options}
            hasRootCheck={false}
          />
        }
        footer={
          <Button style={styles.button} onPress={onApplyHandler}>
            Apply
          </Button>
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
});
