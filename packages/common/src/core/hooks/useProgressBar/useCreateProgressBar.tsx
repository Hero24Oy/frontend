import { FormState, UseFormGetValues } from 'react-hook-form';

import { JsxElement, ProgressBar } from '@hero24/ui';

import { calculatePercentageFraction, isFalsy } from '../../utils';

import { ScreenForm } from '$core/store';

type Params<Form extends ScreenForm> = {
  formState: FormState<Form> | null;
  getValues: UseFormGetValues<Form> | null;
  key: number;
};

export const useCreateProgressBar = <Form extends ScreenForm>(
  params: Params<Form>,
): JsxElement => {
  const { formState, getValues, key } = params;

  if (formState === null || getValues === null) {
    return <ProgressBar value={0} key={key} />;
  }

  const { errors, dirtyFields } = formState;

  const storeFields = getValues();

  const allFields = Object.entries(storeFields);

  const changedFields = allFields.filter(([fieldKey, fieldValue]) => {
    const isTouchedField = Boolean(dirtyFields[fieldKey]);
    const isInvalidField = Boolean(errors[fieldKey]);

    return !isInvalidField && (!isFalsy(fieldValue) || isTouchedField);
  });

  const progressBarValue = calculatePercentageFraction(
    changedFields.length,
    allFields.length,
  );

  return <ProgressBar key={key} value={progressBarValue} />;
};
