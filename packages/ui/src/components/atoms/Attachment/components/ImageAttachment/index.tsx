import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentProps, FileType } from '../../types';

import { IconButton } from '$atoms/IconButton';
import { Image } from '$atoms/Image';
import { View } from '$atoms/View';
import { useDynamicWidth } from '$hooks';
import { DeleteIcon } from '$icons';

type Props = Omit<AttachmentProps, 'file' | 'type'> & FileType;

export const ImageAttachment: FC<Props> = (props) => {
  const { fileDetails, onDelete, width, ...restProps } = props;

  const { dynamicWidth } = useDynamicWidth({
    ...restProps,
  });

  const containerWidth = width || dynamicWidth;

  const styles = useStyles(containerWidth);

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

export const useStyles = (containerWidth: number) => {
  return StyleSheet.create({
    container: {
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
