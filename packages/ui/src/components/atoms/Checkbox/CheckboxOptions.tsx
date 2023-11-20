import { Divider, VStack } from '@gluestack-ui/themed';
import { FC, Fragment, useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { CheckboxOption } from './CheckboxOption';
import { ROOT_CHECK_PADDING } from './constants';
import { CheckboxOptionsProps } from './types';

export const CheckboxOptions: FC<CheckboxOptionsProps> = (props) => {
  const { options, hasRootCheck, ...restProps } = props;

  const styles = useStyles(hasRootCheck);

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

const useStyles = (hasRootCheck: boolean) => {
  return StyleSheet.create({
    wrapper: {
      paddingLeft: hasRootCheck ? ROOT_CHECK_PADDING : 0,
      paddingRight: 24,
      paddingVertical: 16,
    },
  });
};
