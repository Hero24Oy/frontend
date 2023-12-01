import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Card, Color, Heading, HStack, Image, View, VStack } from '@hero24/ui';

import { DisclaimerProps } from '../../types';

import { useLogic } from './useLogic';

export const DisclaimerCard: FC<DisclaimerProps> = (props) => {
  const { imageSource, title, descriptionText, toolsText } = props;

  const descriptionParagraphs = useLogic({
    paragraphs: descriptionText,
  });

  const toolsParagraphs = useLogic({ paragraphs: toolsText });

  return (
    <Card style={styles.container}>
      <VStack style={styles.vStack}>
        <HStack style={styles.header}>
          <View style={styles.imageBackground}>
            <Image source={imageSource} style={styles.image} />
          </View>

          <Heading variant="H3">{title}</Heading>
        </HStack>
        {descriptionParagraphs}

        <Heading variant="H5" style={styles.heading}>
          Recommended tools to bring
        </Heading>

        {toolsParagraphs}
      </VStack>
    </Card>
  );
};

const styles = StyleSheet.create({
  heading: {
    paddingHorizontal: 8,
    marginBottom: 8,
    marginTop: 16,
  },
  container: {
    paddingTop: 8,
    marginHorizontal: 0,
  },
  vStack: {
    gap: 6,
    paddingRight: 16,
  },
  image: {
    width: 32,
    height: 32,
  },
  imageBackground: {
    width: 42,
    height: 42,
    padding: 5,
    backgroundColor: Color.WHITE_00,
    borderRadius: 10,
  },
  header: {
    gap: 8,
    alignItems: 'center',
  },
});
