import { ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { Actionsheet, Attachment, Color, InputTitle, VStack } from '@hero24/ui';

import { UploadButton } from './components';
import { UploadDocumentsProps } from './types';

import { useActionsheet } from '$core/hooks';

export const UploadDocument = <Type extends FieldValues>(
  props: UploadDocumentsProps<Type>,
): ReactElement => {
  const {
    actionsheetItems,
    control,
    name,
    file,
    title,
    actionsheetTitle,
    attachmentWidth,
    ...restProps
  } = props;

  const {
    fieldState: { error },
  } = useController({ name, control });

  const { items, onOpen, ...restParams } = useActionsheet(actionsheetItems);

  return (
    <VStack style={styles.container}>
      <InputTitle value={title} />

      {!file && <UploadButton onPress={onOpen} error={error} />}

      {file && (
        <Attachment file={file} width={attachmentWidth} {...restProps} />
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
