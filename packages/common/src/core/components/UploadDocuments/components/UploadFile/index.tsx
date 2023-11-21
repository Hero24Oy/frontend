import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { DeleteIcon, IconButton, Image, View } from '@hero24/ui';

type Props = {
  onDeleteFile: () => void;
  source: string;
};

export const UploadFile: FC<Props> = (props) => {
  const { source, onDeleteFile } = props;

  return (
    <View style={styles.container}>
      <IconButton
        size="sm"
        icon={DeleteIcon}
        style={styles.button}
        onPress={() => onDeleteFile()}
      />
      <Image source={source} style={styles.file} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    width: 167,
  },
  file: {
    height: 120,
    position: 'relative',
    borderRadius: 8,
  },
  button: {
    position: 'absolute',
    right: 6,
    top: 6,
    zIndex: 1,
  },
});
