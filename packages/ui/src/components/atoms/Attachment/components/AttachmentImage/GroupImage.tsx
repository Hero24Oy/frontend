import { HStack } from '@gluestack-ui/themed';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentImageProps } from '../../types';

import { ImageContainer } from './ImageContainer';

import { View } from '$atoms/View';

type Props = Pick<AttachmentImageProps, 'fileDetails' | 'onDelete'>;

export const GroupImage: FC<Props> = (props) => {
  const { fileDetails, onDelete } = props;

  return (
    <HStack style={styles.container}>
      <ImageContainer onDelete={onDelete} fileDetails={fileDetails} />
      <View style={styles.helper} />
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  helper: {
    flex: 1,
  },
});
