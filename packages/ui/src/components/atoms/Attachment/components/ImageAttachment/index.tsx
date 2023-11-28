import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentProps, FileType } from '../../types';

import { IconButton } from '$atoms/IconButton';
import { Image } from '$atoms/Image';
import { View } from '$atoms/View';
import { DeleteIcon } from '$icons';

type Props = Pick<AttachmentProps, 'onDelete' | 'width'> & FileType;

export const ImageAttachment: FC<Props> = (props) => {
  const { fileDetails, onDelete, width } = props;

  const styles = useStyles(width);

  return (
    <View style={styles.container}>
      <Image source={fileDetails} style={styles.image} />
      <View style={styles.helper} />
      <IconButton
        size="sm"
        icon={DeleteIcon}
        onPress={onDelete}
        style={styles.button}
      />
    </View>
  );
};

export const useStyles = (containerWidth?: number) => {
  const containerFlex = containerWidth ? 0 : 1;

  return StyleSheet.create({
    container: {
      flex: containerFlex,
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 8,
      width: containerWidth,
    },
    image: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    helper: {
      paddingBottom: '75%',
    },
    button: {
      position: 'absolute',
      right: 6,
      top: 6,
    },
  });
};
