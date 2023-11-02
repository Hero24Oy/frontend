import { FC, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Tab, TabProps } from './Tab';

export type TabsProps = {
  routes: TabProps[];
};

export const Tabs: FC<TabsProps> = (props) => {
  const { routes } = props;

  const { bottom } = useSafeAreaInsets();

  const tabs = useMemo(
    () => routes.map((tabProps) => <Tab key={tabProps.label} {...tabProps} />),
    [routes],
  );

  return (
    <View style={[styles.tabContainer, { paddingBottom: bottom }]}>{tabs}</View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
  },
});
