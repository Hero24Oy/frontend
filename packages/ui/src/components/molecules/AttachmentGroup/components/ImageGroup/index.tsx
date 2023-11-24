import { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentGroupProps } from '../../types';

import { useLogic } from './useLogic';

import { VStack } from '$components/atoms';
import { JsxElement } from '$types';

type Props = Pick<AttachmentGroupProps, 'numberOfColumns'> & PropsWithChildren;

export const ImageGroup: FC<Props> = (props) => {
  const { numberOfColumns, children } = props;

  const numberColumns = numberOfColumns || 1;

  const { groupedRows } = useLogic(children as JsxElement[], numberColumns);

  return <VStack style={styles.container}>{groupedRows}</VStack>;
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
