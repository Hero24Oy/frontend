import { FC } from 'react';

import { Heading } from '@hero24/ui';

import { headingTextMapper } from './constants';

import { ProfileType } from '$modules/Profile/stores';

type Props = {
  profileType: ProfileType;
};

export const BioHeading: FC<Props> = (props) => {
  const { profileType } = props;
  const text = headingTextMapper[profileType];

  return <Heading variant="H2">{text}</Heading>;
};
