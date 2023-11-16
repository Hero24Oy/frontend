import { FormState, UseFormGetValues } from 'react-hook-form';

import { JsxElement, ProgressBar } from '@hero24/ui';

import { computePercentageFraction, isFalsy } from '../../utils';

import { ScreenForm } from '$core/store';

type Params<Form extends ScreenForm> = {
  formState: FormState<Form>;
  getValues: UseFormGetValues<Form>;
};

export const useCreateProgressBar = <Form extends ScreenForm>(
  params: Params<Form>,
): JsxElement => {
  const { formState, getValues } = params;
  const { errors, dirtyFields } = formState;

  const storeFields = getValues();

  const allFields = Object.entries(storeFields);

  const changedFields = allFields.filter(([fieldKey, fieldValue]) => {
    const isTouchedField = dirtyFields[fieldKey] !== undefined;
    const isErrorFieldEmpty = errors[fieldKey] === undefined;

    const isFieldChanged =
      (isTouchedField && isErrorFieldEmpty) || !isFalsy(fieldValue);

    return isFieldChanged;
  });

  const progressBarValue = computePercentageFraction(
    changedFields.length,
    allFields.length,
  );

  return <ProgressBar value={progressBarValue} />;
};
