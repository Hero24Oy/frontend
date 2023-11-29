import { ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';
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

import { useActionsheet } from '$core/hooks';

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

  const {
    fieldState: { error },
  } = useController({ name, control });

  const { onOpen, ...params } = useActionsheet(actionsheetItems);

  const { isAttachments, isUploadButton } = useLogic({ files, maxAttachments });

  return (
    <VStack style={styles.container}>
      <Heading variant="H3" style={styles.heading}>
        {title}
      </Heading>

      {label && <Text variant="small">{label}</Text>}

      {isAttachments && (
        <AttachmentGroup files={files as FileType[]} {...restProps} />
      )}

      {isUploadButton && <UploadButton onPress={onOpen} error={error} />}

      <Actionsheet
        showDragIndicator
        title={actionsheetTitle}
        onOpen={onOpen}
        {...params}
      />
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
