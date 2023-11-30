import { ReactElement } from 'react';
import { FieldValues } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { Actionsheet, Attachment, Color, InputTitle, VStack } from '@hero24/ui';

import { UploadButton } from './components';
import { UploadDocumentsProps } from './types';
import { useLogic } from './useLogic';

export const UploadDocument = <Type extends FieldValues>(
  props: UploadDocumentsProps<Type>,
): ReactElement => {
  const {
    file,
    title,
    actionsheetTitle,
    attachmentWidth,
    onDelete,
    type,
    ...restProps
  } = props;

  const { error, onOpen, items, ...restParams } = useLogic({
    file,
    ...restProps,
  });

  return (
    <VStack style={styles.container}>
      <InputTitle value={title} />

      {!file && <UploadButton onPress={onOpen} error={error} />}

      {file && (
        <Attachment
          file={file}
          width={attachmentWidth}
          onDelete={onDelete}
          type={type}
        />
      )}

      <Actionsheet
        showDragIndicator
        items={items}
        title={actionsheetTitle}
        {...restParams}
      />
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  label: {
    color: Color.GREY_01,
    fontWeight: '500',
  },
});

export * from './components';

export * from './types';
