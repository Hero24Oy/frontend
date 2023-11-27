import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AttachmentGroupProps } from '../../types';

import { useLogic } from './useLogic';

import { HStack } from '$atoms/HStack';
import { JsxElement } from '$types';

type Props = { children: JsxElement[] } & Pick<
  AttachmentGroupProps,
  'numberOfColumns'
>;

export const ImageGroup: FC<Props> = (props) => {
  const { numberOfColumns = 1, children = [] } = props;

  const { components } = useLogic(children, numberOfColumns);

  return <HStack style={styles.container}>{components}</HStack>;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    flexWrap: 'wrap',
  },
});
