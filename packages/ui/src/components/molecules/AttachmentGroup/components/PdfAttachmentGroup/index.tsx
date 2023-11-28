import { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentGroupProps } from '../../types';

import { VStack } from '$atoms/VStack';

type Props = Pick<AttachmentGroupProps, 'gap'> & PropsWithChildren;

export const PdfAttachmentGroup: FC<Props> = (props) => {
  const { gap, children } = props;

  const styles = useStyles(gap);

  return <VStack style={styles.container}>{children}</VStack>;
};

const useStyles = (gap?: number) => {
  return StyleSheet.create({
    container: {
      gap,
    },
  });
};
