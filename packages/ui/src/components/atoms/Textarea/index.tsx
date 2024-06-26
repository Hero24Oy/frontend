import {
  FormControl as GluestackFormControl,
  FormControlHelper as GluestackFormControlHelper,
  FormControlHelperText as GluestackFormControlHelperText,
  Textarea as GluestackTextarea,
  TextareaInput as GluestackTextareaInput,
} from '@gluestack-ui/themed';
import { ComponentProps, PropsWithChildren } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import { Size } from '$theme';
import { CommonStyles, JsxElement } from '$types';

type PickedPropsFromTextarea = Pick<
  ComponentProps<typeof GluestackTextarea>,
  'isDisabled' | 'isFocused' | 'isInvalid'
>;

type PickedPropsFromTextareaInput = Pick<
  ComponentProps<typeof GluestackTextareaInput>,
  'placeholder'
>;

export type TextAreaSize = Extract<Size, 'sm' | 'md' | 'lg'>;

type Props<Type extends FieldValues> = PropsWithChildren<
  {
    control: Control<Type>;
    name: Path<Type>;
    isHelperTextEnabled?: boolean;
    size?: TextAreaSize;
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
    isHelperTextEnabled = true,
    placeholder = '',
    name,
    control,
    style,
  } = props;

  const {
    field: { onChange, ...field },
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
        <GluestackTextareaInput
          role="none"
          onChangeText={onChange}
          placeholder={placeholder}
          {...field}
        />
      </GluestackTextarea>

      {isHelperTextEnabled ? (
        <GluestackFormControlHelper>
          <GluestackFormControlHelperText>
            {error?.message}
          </GluestackFormControlHelperText>
        </GluestackFormControlHelper>
      ) : null}
    </GluestackFormControl>
  );
};
