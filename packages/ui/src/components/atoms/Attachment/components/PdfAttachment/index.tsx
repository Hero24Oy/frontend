import { Icon } from '@gluestack-ui/themed';
import { Paperclip } from 'lucide-react-native';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentProps, FileType } from '../../types';

import { HStack } from '$atoms/HStack';
import { IconButton } from '$atoms/IconButton';
import { Text } from '$atoms/Text';
import { VStack } from '$atoms/VStack';
import { DeleteIcon } from '$icons';
import { Color } from '$theme';

type Props = Pick<AttachmentProps, 'onDelete'> & FileType;

export const PdfAttachment: FC<Props> = (props) => {
  const { fileDetails, onDelete } = props;

  return (
    <VStack>
      <HStack style={styles.container}>
        <HStack style={styles.file}>
          <Icon as={Paperclip} />
          <Text variant="small" numberOfLines={1} ellipsizeMode="tail">
            {fileDetails as string}
          </Text>
        </HStack>
        <IconButton size="sm" icon={DeleteIcon} onPress={onDelete} />
      </HStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color.WHITE_00,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: Color.GREY_LIGHT_01,
  },
  file: {
    gap: 8,
    maxWidth: 250,
  },
});
