import { StyleSheet } from 'react-native';

import { addEmptyContainers, sliceIntoRows } from './helpers';

import { HStack } from '$components/atoms/HStack';
import { JsxElement } from '$types';

export const useLogic = (
  attachments: JsxElement[],
  numberOfColumns: number,
) => {
  const numberOfElements = attachments.length;

  const numberOfRows = Math.ceil(numberOfElements / numberOfColumns);

  const numberOfEmptyContainers =
    numberOfRows * numberOfColumns - numberOfElements;

  const componentsWithFullRows = addEmptyContainers(
    numberOfEmptyContainers,
    attachments,
  );

  const slicedComponents = sliceIntoRows(
    numberOfRows,
    numberOfColumns,
    componentsWithFullRows,
  );

  const groupedRows = slicedComponents.map(
    (row: JsxElement[], index: number) => (
      <HStack key={index} style={styles.rowContainer}>
        {...row}
      </HStack>
    ),
  );

  return { groupedRows };
};

const styles = StyleSheet.create({
  rowContainer: {
    gap: 8,
  },
});
