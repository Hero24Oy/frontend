import { FC, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { TabIcon, TabIconProps } from './TabIcon';
import { getBottomPadding } from './utils';

export type TabIconsProps = {
  tabs: TabIconProps[];
};

export const TabIcons: FC<TabIconsProps> = (props) => {
  const { tabs } = props;

  const tabIcons = useMemo(
    () =>
      tabs.map((tabProps) => <TabIcon key={tabProps.label} {...tabProps} />),
    [tabs],
  );

  return <View style={styles.tabContainer}>{tabIcons}</View>;
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: getBottomPadding(),
    paddingTop: 12,
  },
});
