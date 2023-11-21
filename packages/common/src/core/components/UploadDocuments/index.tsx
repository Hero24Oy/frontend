import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Actionsheet, Color, Item, Text, VStack } from '@hero24/ui';

import { UploadButton, UploadedFile } from './components';
import { useLogic } from './hooks';

type Props = {
  actionSheetItems: Item[];
  label: string;
  onDeleteFile: () => void;
  isRequired?: boolean;
  source?: string;
};

export const UploadDocuments: FC<Props> = (props) => {
  const { label, isRequired, source, onDeleteFile, actionSheetItems } = props;

  const { items, showActionSheet, toggleActionSheet } =
    useLogic(actionSheetItems);

  return (
    <VStack style={styles.container}>
      <Text style={styles.label} variant="small">
        {label}
      </Text>

      {!source && (
        <UploadButton
          isRequired={isRequired}
          onPress={() => toggleActionSheet()}
        />
      )}

      {source && <UploadedFile source={source} onDeleteFile={onDeleteFile} />}

      <Actionsheet
        isOpen={showActionSheet}
        onClose={() => toggleActionSheet()}
        title="Upload Liability insurance"
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
