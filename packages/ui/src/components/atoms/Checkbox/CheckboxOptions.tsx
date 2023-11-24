import { Divider, VStack } from '@gluestack-ui/themed';
import { FC, Fragment, useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { CheckboxOption } from './CheckboxOption';
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
  const rootCheckPadding = 32;
  const defaultPadding = 16;

  return StyleSheet.create({
    wrapper: {
      paddingLeft: hasRootCheck ? rootCheckPadding : defaultPadding,
      paddingRight: 24,
      paddingVertical: 16,
    },
  });
};
