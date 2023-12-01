import { Control, FieldValues, Path } from 'react-hook-form';

import { CheckboxGroup, JsxElement } from '@hero24/ui';

import { useLogic } from './useLogic';

type Props<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  places: string[];
};

export const ModalBody = <Type extends FieldValues>(
  props: Props<Type>,
): JsxElement => {
  const { control, name, places } = props;

  const { options } = useLogic({ places });

  return (
    <CheckboxGroup
      control={control}
      name={name}
      options={options}
      hasRootCheck={false}
    />
  );
};
