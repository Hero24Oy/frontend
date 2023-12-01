import { FieldValues } from 'react-hook-form';

import { JsxElement, VStack } from '@hero24/ui';

import { ModalBodyType } from './types';
import { useLogic } from './useLogic';

export const ModalBody = <Type extends FieldValues>(
  props: ModalBodyType<Type>,
): JsxElement => {
  const { checkboxGroup } = useLogic(props);

  return <VStack>{checkboxGroup}</VStack>;
};
