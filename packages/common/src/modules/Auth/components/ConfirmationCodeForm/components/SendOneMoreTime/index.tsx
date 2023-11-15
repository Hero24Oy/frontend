import { StyleSheet } from 'react-native';

import { Color, Pressable, Text } from '@hero24/ui';

import { useLogic, UseLogicParams } from './useLogic';

type SendOneMoreProps = UseLogicParams;

export const SendOneMoreTime = (props: SendOneMoreProps) => {
  const { onPress } = props;
  const { onPressHandler, message, isDisabled } = useLogic({ onPress });

  return (
    <Pressable
      disabled={isDisabled}
      style={styles.sendOneMore}
      onPress={onPressHandler}
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
