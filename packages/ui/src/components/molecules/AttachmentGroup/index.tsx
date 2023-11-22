import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Attachment, FileType } from '$atoms/Attachment';
import { HStack } from '$components/atoms/HStack';

type Props = {
  files: FileType[];
  onDelete: (id: number) => void;
};

export const AttachmentGroup: FC<Props> = (props) => {
  const { files, onDelete } = props;

  return (
    <HStack style={styles.container}>
      {files.map((file) => (
        <Attachment key={file.id} file={file} onDelete={onDelete} />
      ))}
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    gap: 8,
  },
});
