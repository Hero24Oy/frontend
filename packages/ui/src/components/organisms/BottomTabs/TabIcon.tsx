import { Text } from '@gluestack-ui/themed';
import { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { BaseIcon } from '$icons';

export type TabIconProps = {
  Icon: BaseIcon;
  label: string;
  isFocused?: boolean;
  onPress?: () => void; // TODO get rid of
};

export const TabIcon: FC<TabIconProps> = (props) => {
  const { isFocused, Icon, label, onPress } = props;

  const textStyles = isFocused
    ? [styles.tabText, styles.textFocused]
    : [styles.tabText];

  const iconWrapperStyles = isFocused
    ? [styles.iconWrapper, styles.backgroundFocused]
    : [styles.iconWrapper];

  const iconColor = isFocused ? 'white' : 'grey';

  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={styles.centered}
    >
      <View style={iconWrapperStyles}>
        <Icon size={20} color={iconColor} />
      </View>
      <Text style={textStyles}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabText: { fontSize: 14 },

  centered: { alignItems: 'center' },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
  },
  backgroundFocused: {
    backgroundColor: 'red', // TODO colors enum
  },
  textFocused: {
    color: 'red',
  },
});
