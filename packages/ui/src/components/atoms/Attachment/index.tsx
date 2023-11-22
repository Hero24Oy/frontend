import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { FileType } from './types';

import { IconButton } from '$atoms/IconButton';
import { Image } from '$atoms/Image';
import { View } from '$atoms/View';
import { DeleteIcon } from '$icons';

type Props = {
  file: FileType;
  onDelete: (id: number) => void;
};

export const Attachment: FC<Props> = (props) => {
  const { file, onDelete } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={file.imageSource} />
      <IconButton
        size="sm"
        icon={DeleteIcon}
        style={styles.iconButton}
        onPress={() => onDelete(file.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 167,
  },
  iconButton: {
    position: 'absolute',
    right: 6,
    top: 6,
  },
  image: {
    height: 120,
    borderRadius: 8,
  },
});

export * from './types';
