import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentGroupProps } from '../../types';

import { IconButton, Image, View } from '$components';
import { DeleteIcon } from '$icons';

type Props = {
  source: string;
} & Pick<AttachmentGroupProps, 'onDelete'>;

export const Attachment: FC<Props> = (props) => {
  const { source, onDelete } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={source} />
      <IconButton
        size="sm"
        icon={DeleteIcon}
        style={styles.iconButton}
        onPress={onDelete}
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
