import { FC } from 'react';
import { Control, Path } from 'react-hook-form';

import { Select } from '@hero24/ui';

import { ProfileCreation } from '$modules/Profile/stores';

type Props = {
  control: Control<ProfileCreation['address']>;
  name: Path<ProfileCreation['address']>;
};

export const CountrySelect: FC<Props> = (props) => {
  return <Select label="Country" size="md" hasDivider disabled {...props} />;
};
