import { Control, FieldValues, Path } from 'react-hook-form';

export type DateForm = {
  day?: string;
  month?: string;
  year?: string;
};

export type DateThreeFieldInputUseLogicParams<FormType extends FieldValues> = {
  control: Control<FormType>;
  name: Path<FormType>;
};

export type DateThreeFieldInputProps<FormType extends FieldValues> =
  DateThreeFieldInputUseLogicParams<FormType> & {
    title: string;
  };
