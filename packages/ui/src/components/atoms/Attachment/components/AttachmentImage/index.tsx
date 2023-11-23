import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentImageProps } from '../../types';
import { RemoveButton } from '../RemoveButton';

import { Image } from '$atoms/Image';
import { View } from '$atoms/View';

export const AttachmentImage: FC<AttachmentImageProps> = (props) => {
  const { id, fileSource, onDelete } = props;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <View style={styles.container}>
      <Image source={fileSource} />
      <RemoveButton onPress={handleDelete} {...styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 167,
    height: '100%',
    maxHeight: 120,
    borderRadius: 8,
    overflow: 'hidden',
  },
  button: {
    position: 'absolute',
    right: 6,
    top: 6,
  },
});
