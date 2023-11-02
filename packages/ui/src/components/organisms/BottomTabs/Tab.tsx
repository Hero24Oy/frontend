import { Text } from '@gluestack-ui/themed';
import { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { BaseIcon } from '$icons';
import { Color } from '$theme';

export type TabProps = {
  Icon: BaseIcon;
  label: string;
  onPress: () => void;
  isFocused?: boolean;
};

export const Tab: FC<TabProps> = (props) => {
  const { isFocused, Icon, label, onPress } = props;

  const textStyles = isFocused
    ? [styles.tabText, styles.textFocused]
    : [styles.tabText];

  const iconWrapperStyles = isFocused
    ? [styles.iconWrapper, styles.backgroundFocused]
    : [styles.iconWrapper];

  const iconColor = isFocused ? Color.WHITE_00 : Color.GREY_01;

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
    backgroundColor: Color.RED_00,
  },
  textFocused: {
    color: Color.RED_00,
  },
});
