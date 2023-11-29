// * On closing Actionsheet on web this error occurs, but this component is rarely used in web, rather in mobile
// * module.js:581 Uncaught TypeError: Failed to execute 'createTreeWalker' on 'Document': parameter 1 is not of type 'Node'.
// *  at $9bf71ea28793e738$export$2d6ec8fc375ceafa (module.js:581:27)
// *  at $9bf71ea28793e738$var$focusFirstInScope (module.js:407:14)
// *  at module.js:337:15

import {
  Actionsheet as GluestackActionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
} from '@gluestack-ui/themed';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { ActionsheetDragIndicator } from './ActionsheetDragIndicator';
import { ActionsheetItems } from './ActionsheetItems';
import { GluestackActionsheetProps, Item } from './types';

import { Heading } from '$atoms/Heading';

type Props = {
  items: Item[];
  showDragIndicator?: boolean;
  title?: string;
} & GluestackActionsheetProps;

export const Actionsheet: FC<Props> = (props) => {
  const { showDragIndicator, items, title, ...restProps } = props;

  return (
    <GluestackActionsheet {...restProps}>
      <ActionsheetBackdrop />
      <ActionsheetContent style={styles.container}>
        {showDragIndicator && <ActionsheetDragIndicator />}
        {title && <Heading variant="H5">{title}</Heading>}
        <ActionsheetItems items={items} />
      </ActionsheetContent>
    </GluestackActionsheet>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
});
