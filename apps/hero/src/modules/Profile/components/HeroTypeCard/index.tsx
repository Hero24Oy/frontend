import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Card, Image, Text } from '@hero24/ui';

type Props = {
  children: string;
  imageSource: number;
  selectionHandler: () => void;
};

export const HeroTypeCard: FC<Props> = (props) => {
  const { imageSource, selectionHandler, children } = props;

  return (
    <Card onPress={selectionHandler} style={styles.card}>
      <Image source={imageSource} style={styles.image} />

      <Text variant="regular" style={styles.text}>
        {children}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    // We need negative margin here to show image outside of card on top.
    marginTop: -22.5,
  },
  card: {
    margin: 0,
    padding: 0,
    alignItems: 'center',
    overflow: 'visible',
    height: 120,
    gap: 6,
  },
  text: {
    width: 168,
    textAlign: 'center',
  },
});
