import { addEmptyContainers } from './helpers';

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

  return { components: componentsWithFullRows };
};
