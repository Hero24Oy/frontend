import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Attachment } from './components';
import { AttachmentGroupProps } from './components/types';

import { HStack } from '$components';

export const AttachmentGroup: FC<AttachmentGroupProps> = (props) => {
  const { sources, onDelete } = props;

  return (
    <HStack style={styles.container}>
      {sources.map((source, index) => (
        <Attachment source={source} key={index} onDelete={onDelete} />
      ))}
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    gap: 8,
  },
});
