import { ReactElement } from 'react';
import { FieldValues } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import {
  Actionsheet,
  AttachmentGroup,
  FileType,
  Heading,
  Text,
  VStack,
} from '@hero24/ui';

import { UploadButton } from '../UploadDocument';

import { UploadMultipleDocumentsProps } from './types';
import { useLogic } from './useLogic';

export const UploadMultipleDocuments = <Type extends FieldValues>(
  props: UploadMultipleDocumentsProps<Type>,
): ReactElement => {
  const {
    title,
    label,
    files,
    maxAttachments,
    name,
    control,
    actionsheetItems,
    actionsheetTitle,
    ...restProps
  } = props;

  const { hasAttachments, showUploadButton, error, onOpen, ...restParams } =
    useLogic({
      files,
      maxAttachments,
      name,
      control,
      actionsheetItems,
    });

  return (
    <VStack style={styles.container}>
      <Heading variant="H3" style={styles.heading}>
        {title}
      </Heading>

      {label && <Text variant="small">{label}</Text>}

      {hasAttachments && (
        <AttachmentGroup files={files as FileType[]} {...restProps} />
      )}

      {showUploadButton && <UploadButton onPress={onOpen} error={error} />}

      <Actionsheet showDragIndicator title={actionsheetTitle} {...restParams} />
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  heading: {
    marginVertical: 0,
  },
});
