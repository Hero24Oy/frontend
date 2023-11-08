import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Card, Image, Text } from '@hero24/ui';

type Props = {
  cardText: string;
  imageSource: number;
  selectionHandler: () => void;
};

export const HeroTypeCard: FC<Props> = (props) => {
  const { imageSource, selectionHandler, cardText } = props;

  return (
    <Card onPress={selectionHandler} style={styles.card}>
      <Image source={imageSource} style={styles.image} />

      <Text variant="regular" style={styles.text}>
        {cardText}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
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
