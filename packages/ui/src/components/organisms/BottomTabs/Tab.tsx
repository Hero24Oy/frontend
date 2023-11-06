import { Text } from '@gluestack-ui/themed';
import { FC } from 'react';
import { Pressable, PressableProps, StyleSheet, View } from 'react-native';

import { BaseIcon } from '$icons';
import { Color } from '$theme';

export type TabProps = {
  Icon: BaseIcon;
  label: string;
  isFocused?: boolean;
} & Pick<PressableProps, 'onPress'>;

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
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={styles.centered}
    >
      <View style={iconWrapperStyles}>
        <Icon size={20} color={iconColor} />
      </View>
      <Text style={textStyles}>{label}</Text>
    </Pressable>
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
    borderRadius: 16,
  },
  backgroundFocused: {
    backgroundColor: Color.RED_00,
  },
  textFocused: {
    color: Color.RED_00,
  },
});
