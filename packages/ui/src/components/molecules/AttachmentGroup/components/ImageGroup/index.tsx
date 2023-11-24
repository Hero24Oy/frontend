import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentGroupProps } from '../../types';

import { useLogic } from './useLogic';

import { VStack } from '$components/atoms';
import { JsxElement } from '$types';

type Props = {
  children: JsxElement[];
} & Pick<AttachmentGroupProps, 'numberOfColumns'>;

export const ImageGroup: FC<Props> = (props) => {
  const { numberOfColumns, children } = props;

  const columns = numberOfColumns || 1;

  const { groupedRows } = useLogic(children, columns);

  return <VStack style={styles.container}>{groupedRows}</VStack>;
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
