import { FC } from 'react';
import { StyleSheet } from 'react-native';

import {
  Button,
  CloseIcon as goBackIcon,
  FullScreenModal,
  RadioGroup,
  Select,
} from '@hero24/ui';

import { CitySelectProps } from './types';
import { useLogic } from './useLogic';

export const CitySelect: FC<CitySelectProps> = (props) => {
  const { control, name, getValues, resetField } = props;

  const { isOpen, onApplyHandler, onCloseHandler, onOpenHandler, options } =
    useLogic({ getValues, resetField, name });

  return (
    <>
      <Select
        label="City"
        size="md"
        hasDivider
        onPress={onOpenHandler}
        {...props}
      />

      <FullScreenModal
        isOpen={isOpen}
        header={{
          goBackIcon,
          title: 'City',
          goBack: onCloseHandler,
        }}
        body={
          <RadioGroup
            control={control}
            name={name}
            options={options}
            variant="radio_indicator"
            style={styles.group}
            hasDivider
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
  group: {
    gap: 0,
  },
});
