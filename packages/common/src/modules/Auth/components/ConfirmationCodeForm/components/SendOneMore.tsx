import { PressableProps, StyleSheet } from 'react-native';

import { Color, Pressable, Text } from '@hero24/ui';

type PickerProps = Pick<PressableProps, 'onPress'>;

type SendOneMoreProps = {
  debounceTime: number;
} & PickerProps;

export const SendOneMoreTime = (props: SendOneMoreProps) => {
  const { debounceTime, onPress } = props;

  // TODO i18n
  const text =
    debounceTime > 0
      ? `Send one more time after ${debounceTime}`
      : ' Send one more time';

  return (
    <Pressable
      disabled={debounceTime > 0}
      style={styles.sendOneMore}
      onPress={onPress}
    >
      <Text variant="link" style={styles.message}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  sendOneMore: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },
  message: {
    color: Color.BLACK_00,
  },
});
