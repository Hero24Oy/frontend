import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentImageProps } from '../../types';
import { RemoveButton } from '../RemoveButton';

import { Image } from '$atoms/Image';
import { View } from '$components/atoms/View';

type Props = Pick<AttachmentImageProps, 'fileDetails' | 'onDelete'>;

export const ImageContainer: FC<Props> = (props) => {
  const { onDelete, fileDetails } = props;

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={fileDetails} />
      </View>
      <View style={styles.helper} />
      <RemoveButton onPress={onDelete} {...styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  helper: {
    paddingTop: '75%',
  },
  button: {
    position: 'absolute',
    right: 6,
    top: 6,
  },
});
