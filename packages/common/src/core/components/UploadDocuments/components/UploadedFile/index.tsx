import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { DeleteIcon, IconButton, Image, View } from '@hero24/ui';

type Props = {
  onDeleteFile: () => void;
  source: string;
};

export const UploadedFile: FC<Props> = (props) => {
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
    position: 'relative',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    zIndex: 0,
  },
  file: {
    width: 167,
    height: 120,
    borderRadius: 8,
    gap: 4,
  },
  button: {
    position: 'absolute',
    left: 125,
    top: 6,
    zIndex: 1,
  },
});
