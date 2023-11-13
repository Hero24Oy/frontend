import { PressableProps, StyleSheet } from 'react-native';

import { Color, Pressable, Text } from '@hero24/ui';

import { useTimerData } from '../store';

type PickerProps = Pick<PressableProps, 'onPress'>;

type SendOneMoreProps = {
  // debounceTime: number;
} & PickerProps;

export const SendOneMoreTime = (props: SendOneMoreProps) => {
  console.log('rerender send one more time ');
  const { onPress } = props;
  const debounceTime = useTimerData();

  // TODO i18n
  const message =
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
        {message}
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
