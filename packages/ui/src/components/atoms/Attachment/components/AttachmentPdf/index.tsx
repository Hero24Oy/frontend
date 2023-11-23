import { Icon } from '@gluestack-ui/themed';
import { Paperclip } from 'lucide-react-native';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentProps, FileType } from '../../types';
import { RemoveButton } from '../RemoveButton';

import { HStack } from '$atoms/HStack';
import { Text } from '$atoms/Text';
import { Color } from '$theme';

type Props = Pick<AttachmentProps, 'onDelete'> &
  Pick<FileType, 'id' | 'fileName'>;

export const AttachmentPdf: FC<Props> = (props) => {
  const { id, fileName, onDelete } = props;

  return (
    <HStack style={styles.container}>
      <Icon as={Paperclip} />
      <Text
        style={styles.name}
        variant="small"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {fileName}
      </Text>
      <RemoveButton onPress={() => onDelete(id)} style={styles.button} />
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Color.WHITE_00,
    padding: 8,
  },
  name: {
    marginRight: 182,
    marginLeft: 8,
  },
  button: {
    marginLeft: 'auto',
  },
});
