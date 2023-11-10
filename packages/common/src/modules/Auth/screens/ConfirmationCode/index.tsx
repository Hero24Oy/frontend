import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { ConfirmationCodeForm, ConfirmationCodeHeader } from '../../components';

import { StackKeyboardAwareScrollView } from '$core';

export const ConfirmationCodeScreen = () => {
  return (
    <StackKeyboardAwareScrollView scrollEnabled={false}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <ConfirmationCodeHeader />
          <ConfirmationCodeForm />
        </View>
      </TouchableWithoutFeedback>
    </StackKeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
});
