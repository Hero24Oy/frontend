import { Control, FieldValues, Path } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { CheckboxGroup, JsxElement } from '@hero24/ui';

import { useLogic } from './useLogic';

type Props<Type extends FieldValues> = {
  control: Control<Type>;
  languages: string[];
  name: Path<Type>;
};

export const ModalBody = <Type extends FieldValues>(
  props: Props<Type>,
): JsxElement => {
  const { languages, control, name } = props;

  const { options } = useLogic({ languages });

  return (
    <CheckboxGroup
      control={control}
      name={name}
      options={options}
      optionStyle={styles.option}
    />
  );
};

const styles = StyleSheet.create({
  option: {
    paddingLeft: 0,
  },
});
