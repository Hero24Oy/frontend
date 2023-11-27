import { StyleSheet } from 'react-native';

import { View } from '$atoms/View';
import { JsxElement } from '$types';

export const addEmptyContainers = (
  amount: number,
  components: JsxElement[],
) => {
  const result = [...components];

  for (let index = 1; index <= amount; index += 1) {
    result.push(<View key={index} style={styles.emptyContainer} />);
  }

  return result;
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
  },
});
