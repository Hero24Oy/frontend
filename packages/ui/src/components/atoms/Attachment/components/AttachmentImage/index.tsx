import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentProps, FileType } from '../../types';
import { RemoveButton } from '../RemoveButton';

import { Image } from '$atoms/Image';
import { View } from '$atoms/View';

type Props = Pick<AttachmentProps, 'onDelete'> &
  Pick<FileType, 'id' | 'fileSource'>;

export const AttachmentImage: FC<Props> = (props) => {
  const { id, fileSource, onDelete } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={fileSource} />
      <RemoveButton onPress={() => onDelete(id)} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 167,
    height: '100%',
    maxHeight: 120,
  },
  image: {
    borderRadius: 8,
  },
  button: {
    position: 'absolute',
    right: 6,
    top: 6,
  },
});
