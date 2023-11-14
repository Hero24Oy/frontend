import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { ConfirmationCodeForm, ConfirmationCodeHeader } from '../../components';

import { TimerProvider } from '$modules/Auth/components';

export const ConfirmationCodeScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
        <TimerProvider>
          <ConfirmationCodeHeader />
          <ConfirmationCodeForm />
        </TimerProvider>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
});
