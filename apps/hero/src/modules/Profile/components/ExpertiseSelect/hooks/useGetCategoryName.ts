import { useState } from 'react';
import { FieldValues } from 'react-hook-form';

import { EXPERTISE_CATEGORIES_NAMES } from '../../WorkDataForm/constants';

import { SLICE_PARAMS } from './constants';
import { UseGetCategory, UseUpdateCategory } from './types';

export const useGetCategoryName = (props: UseGetCategory) => {
  const { setValue } = props;

  const [categories, setCategories] = useState<string[]>([]);

  const useUpdateCategory = <Type extends FieldValues>(
    params: UseUpdateCategory<Type>,
  ): void => {
    const { value, name } = params;
    const formattedName = name.slice(SLICE_PARAMS);

    if (value.length && !categories.includes(formattedName)) {
      setCategories((prevState) => {
        prevState.push(formattedName);
        setValue(EXPERTISE_CATEGORIES_NAMES, prevState);

        return prevState;
      });
    }

    if (!value.length) {
      setCategories((prevState) => {
        const result = prevState.filter(
          (category) => category !== formattedName,
        );

        setValue(EXPERTISE_CATEGORIES_NAMES, result);

        return result;
      });
    }
  };

  return { useUpdateCategory };
};
