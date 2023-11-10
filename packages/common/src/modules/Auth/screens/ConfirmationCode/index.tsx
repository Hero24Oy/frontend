import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { ConfirmationCodeForm, ConfirmationCodeHeader } from '../../components';

export const ConfirmationCodeScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
        <ConfirmationCodeHeader />
        <ConfirmationCodeForm />
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
