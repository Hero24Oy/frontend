import { HeroType } from 'hero24-types';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Heading } from '@hero24/ui';

import { headingTextMapper } from './constants';

type Props = {
  heroType: HeroType;
};

export const BioHeading: FC<Props> = (props) => {
  const { heroType } = props;

  const text = headingTextMapper[heroType];

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
