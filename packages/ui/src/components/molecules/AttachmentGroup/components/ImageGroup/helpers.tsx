import { StyleSheet } from 'react-native';

import { View } from '$components/atoms/View';
import { JsxElement } from '$types';

export const addEmptyContainers = (
  amount: number,
  components: JsxElement[],
) => {
  const result = [...components];

  for (let index = 1; index <= amount; index += 1) {
    result.push(<View style={styles.emptyContainer} />);
  }

  return result;
};

export const sliceIntoRows = (
  numberOfRows: number,
  numberOfColumns: number,
  components: JsxElement[],
) => {
  const slicedComponents = [];

  for (let index = 0; index < numberOfRows; index += 1) {
    const startIndex = index * numberOfColumns;
    const finishIndex = startIndex + numberOfColumns;
    const rowOfElements = components.slice(startIndex, finishIndex);

    slicedComponents.push(rowOfElements);
  }

  return slicedComponents;
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
  },
});
