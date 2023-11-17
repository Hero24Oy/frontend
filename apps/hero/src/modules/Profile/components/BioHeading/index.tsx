import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Heading } from '@hero24/ui';

import { headingTextMapper } from './constants';

import { ProfileType } from '$modules/Profile/stores';

type Props = {
  profileType: ProfileType;
};

export const BioHeading: FC<Props> = (props) => {
  const { profileType } = props;
  const text = headingTextMapper[profileType];

  return (
    <Heading variant="H2" style={styles.text}>
      {text}
    </Heading>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 0,
  },
});
