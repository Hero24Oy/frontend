import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentImageProps } from '../../types';
import { RemoveButton } from '../RemoveButton';

import { Image } from '$atoms/Image';
import { View } from '$atoms/View';

export const AttachmentImage: FC<AttachmentImageProps> = (props) => {
  const { fileDetails, onDelete } = props;

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={fileDetails} />
      </View>
      <View style={styles.indicator} />
      <RemoveButton onPress={onDelete} {...styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  indicator: {
    paddingRight: '48%',
  },
  // container: {
  //   width: '100%',
  //   maxWidth: 100,
  //   height: '100%',
  //   maxHeight: 120,
  //   borderRadius: 8,
  //   overflow: 'hidden',
  // },
  button: {
    position: 'absolute',
    right: 6,
    top: 6,
  },
});
