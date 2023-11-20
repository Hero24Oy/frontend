import { FieldValues, Path, UseFormSetValue } from 'react-hook-form';

export type DateForm = {
  day?: string;
  month?: string;
  year?: string;
};

export type DateThreeFieldInputUseLogicParams<FormType extends FieldValues> = {
  name: Path<FormType>;
  setValue: UseFormSetValue<FormType>;
};

export type DateThreeFieldInputProps<FormType extends FieldValues> =
  DateThreeFieldInputUseLogicParams<FormType> & {
    title: string;
  };
