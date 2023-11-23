import { Icon } from '@gluestack-ui/themed';
import { Paperclip } from 'lucide-react-native';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentPdfProps } from '../../types';
import { RemoveButton } from '../RemoveButton';

import { HStack } from '$atoms/HStack';
import { Text } from '$atoms/Text';
import { VStack } from '$atoms/VStack';
import { StyledSelectDivider } from '$components/styled';
import { Color } from '$theme';

export const AttachmentPdf: FC<AttachmentPdfProps> = (props) => {
  const { fileName, onDelete } = props;

  return (
    <VStack>
      <HStack style={styles.container}>
        <HStack style={styles.file}>
          <Icon as={Paperclip} />
          <Text variant="small" numberOfLines={1} ellipsizeMode="tail">
            {fileName}
          </Text>
        </HStack>
        <RemoveButton onPress={onDelete} />
      </HStack>
      <StyledSelectDivider />
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color.WHITE_00,
    padding: 8,
  },
  file: {
    justifyContent: 'flex-start',
    gap: 8,
    maxWidth: 250,
  },
});
