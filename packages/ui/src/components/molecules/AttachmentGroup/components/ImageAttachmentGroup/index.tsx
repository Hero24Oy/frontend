import { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentGroupProps } from '../../types';

import { HStack } from '$atoms/HStack';

type Props = Pick<AttachmentGroupProps, 'gap'> & PropsWithChildren;

export const ImageAttachmentGroup: FC<Props> = (props) => {
  const { gap, children } = props;

  const styles = useStyles(gap);

  return <HStack style={styles.container}>{children}</HStack>;
};

const useStyles = (gap?: number) => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap,
    },
  });
};
