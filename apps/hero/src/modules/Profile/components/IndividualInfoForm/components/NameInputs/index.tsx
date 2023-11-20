import { FC } from 'react';

import { Input } from '@hero24/ui';

import { NameInputsProps } from './types';
import { useLogic } from './useLogic';

export const NameInputs: FC<NameInputsProps> = (props) => {
  const { control, ...restProps } = props;

  useLogic(restProps);

  return (
    <>
      <Input control={control} name="name" placeholder="Enter" title="Name" />
      <Input
        control={control}
        name="lastName"
        placeholder="Enter"
        title="Last name"
      />
      <Input
        isDisabled
        control={control}
        name="displayedName"
        placeholder="Hero payments OY / Name"
        title="Displayed name"
      />
    </>
  );
};
