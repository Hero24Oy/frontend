import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Actionsheet, Color, Text, VStack } from '@hero24/ui';

import { UploadButton, UploadFile } from './components';
import { useLogic } from './hooks';
import { UploadDocumentsProps } from './types';

export const UploadDocuments: FC<UploadDocumentsProps> = (props) => {
  const {
    label,
    isRequired,
    source = '',
    onDeleteFile,
    actionSheetItems,
    actionsheetTitle,
  } = props;

  const { items, isActionsheetOpen, onCloseActionsheet, onOpenActionsheet } =
    useLogic(actionSheetItems);

  return (
    <VStack style={styles.container}>
      <Text style={styles.label} variant="small">
        {label}
      </Text>

      {!source && (
        <UploadButton isRequired={isRequired} onPress={onOpenActionsheet} />
      )}

      {source && <UploadFile source={source} onDeleteFile={onDeleteFile} />}

      <Actionsheet
        isOpen={isActionsheetOpen}
        onClose={onCloseActionsheet}
        title={actionsheetTitle}
        items={items}
        showDragIndicator
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
