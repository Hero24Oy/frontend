import { Divider, VStack } from '@gluestack-ui/themed';
import { FC, Fragment, useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { CheckboxOption } from './CheckboxOption';
import { CheckboxOptionsProps } from './types';

export const CheckboxOptions: FC<CheckboxOptionsProps> = (props) => {
  const { options, ...restProps } = props;

  const optionsToRender = useMemo(
    () =>
      options.map((optionProps, index) => (
        <Fragment key={optionProps.label}>
          <CheckboxOption
            wrapperStyle={styles.wrapper}
            {...optionProps}
            {...restProps}
          />
          {index !== options.length - 1 && <Divider />}
        </Fragment>
      )),
    [options],
  );

  return <VStack>{optionsToRender}</VStack>;
};

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 32,
    paddingRight: 24,
    paddingVertical: 16,
  },
});
