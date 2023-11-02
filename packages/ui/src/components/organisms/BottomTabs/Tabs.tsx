import { FC, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { Tab, TabProps } from './Tab';
import { getBottomPadding } from './utils';

export type TabsProps = {
  routes: TabProps[];
};

export const Tabs: FC<TabsProps> = (props) => {
  const { routes } = props;

  const tabs = useMemo(
    () => routes.map((tabProps) => <Tab key={tabProps.label} {...tabProps} />),
    [routes],
  );

  return <View style={styles.tabContainer}>{tabs}</View>;
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: getBottomPadding(),
    paddingTop: 12,
  },
});
