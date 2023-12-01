import { useMemo } from 'react';
import { FieldValues, Path } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { CheckboxGroup, JsxElement } from '@hero24/ui';

import { ModalBodyType } from './types';

type ReturnValue = {
  checkboxGroup: JsxElement[];
};

export const useLogic = <Type extends FieldValues>(
  params: ModalBodyType<Type>,
): ReturnValue => {
  const { expertise, name, control, useUpdateCategory } = params;

  const checkboxGroup = useMemo(() => {
    const expertiseEntity = Object.values(expertise);

    return expertiseEntity.map(({ title, items }, index) => {
      const checkboxOptions = items.map((item) => ({
        label: item,
        value: item,
      }));

      const dynamicPath = `${name}.${title}` as Path<Type>;

      return (
        <CheckboxGroup
          onChangeAction={useUpdateCategory}
          key={index}
          label={title}
          control={control}
          name={dynamicPath}
          options={checkboxOptions}
          hasRootCheck
          style={styles.checkbox}
        />
      );
    });
  }, [name, expertise, control, useUpdateCategory]);

  return {
    checkboxGroup,
  };
};

const styles = StyleSheet.create({
  checkbox: {
    marginTop: 24,
  },
});
