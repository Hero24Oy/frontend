import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentProps, FileType } from '../../types';

import { IconButton } from '$atoms/IconButton';
import { Image } from '$atoms/Image';
import { View } from '$atoms/View';
import { getWidthInPercent } from '$components/molecules';
import { DeleteIcon } from '$icons';

type Props = Pick<AttachmentProps, 'onDelete' | 'widthInPercent'> & FileType;

export const AttachmentImage: FC<Props> = (props) => {
  const { fileDetails, widthInPercent, onDelete } = props;

  const paddings = 32;

  const gap = 8;

  const dynamicWidth = getWidthInPercent(paddings, gap);

  const containerWidth = widthInPercent || `${dynamicWidth}%`;

  return (
    <View style={[styles.container, { width: containerWidth }]}>
      <Image source={fileDetails} style={styles.image} />
      <View style={styles.helper} />
      <IconButton
        size="sm"
        icon={DeleteIcon}
        onPress={onDelete}
        {...styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 8,
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
