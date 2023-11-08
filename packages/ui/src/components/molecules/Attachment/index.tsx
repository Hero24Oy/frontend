import { HStack } from '@gluestack-ui/themed';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentPreview, RemoveButton } from './components';
import { AttachmentFile } from './types';

export type Props = {
  file: AttachmentFile;
  onPress: () => void;
};

export const Attachment: FC<Props> = (props) => {
  const { file, onPress } = props;

  return (
    <HStack style={styles.attachment}>
      <AttachmentPreview {...file} />
      <RemoveButton onPress={onPress} />
    </HStack>
  );
};

const styles = StyleSheet.create({
  attachment: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
