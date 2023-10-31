import {
  FormControl as GluestackFormControl,
  FormControlHelper as GluestackFormControlHelper,
  FormControlHelperText as GluestackFormControlHelperText,
  Textarea as GluestackTextarea,
  TextareaInput as GluestackTextareaInput,
} from '@gluestack-ui/themed';
import { ComponentProps, PropsWithChildren } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import { TextareaSize } from './constants';

import { CommonStyles } from '$types';
import { JsxElement } from '$types/common';

type PickedPropsFromTextarea = Pick<
  ComponentProps<typeof GluestackTextarea>,
  'isDisabled' | 'isFocused' | 'isInvalid'
>;

type PickedPropsFromTextareaInput = Pick<
  ComponentProps<typeof GluestackTextareaInput>,
  'placeholder'
>;

type Props<Type extends FieldValues> = PropsWithChildren<
  {
    control: Control<Type>;
    name: Path<Type>;
    size?: `${TextareaSize}`;
    style?: CommonStyles;
  } & PickedPropsFromTextarea &
    PickedPropsFromTextareaInput
>;

export const Textarea = <Type extends FieldValues>(
  props: Props<Type>,
): JsxElement => {
  const {
    isDisabled = false,
    isFocused = false,
    placeholder = '',
    name,
    control,
    style,
  } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <GluestackFormControl>
      <GluestackTextarea
        style={style}
        isDisabled={isDisabled}
        isInvalid={Boolean(error)}
        isFocused={isFocused}
      >
        <GluestackTextareaInput {...field} placeholder={placeholder} />
      </GluestackTextarea>
      <GluestackFormControlHelper>
        <GluestackFormControlHelperText>
          {error?.message}
        </GluestackFormControlHelperText>
      </GluestackFormControlHelper>
    </GluestackFormControl>
  );
};

export * from './constants';
