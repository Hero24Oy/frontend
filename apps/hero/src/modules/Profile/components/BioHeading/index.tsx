import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Heading } from '@hero24/ui';

import { headingTextMapper } from './constants';

import { HeroType } from '$modules/Profile/stores';

type Props = {
  heroType: HeroType | null;
};

export const BioHeading: FC<Props> = (props) => {
  const { heroType } = props;

  const text = headingTextMapper[heroType ?? HeroType.INDIVIDUAL];

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
