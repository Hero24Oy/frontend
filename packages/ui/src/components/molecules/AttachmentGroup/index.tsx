import { FC } from 'react';

import { attachmentGroupMapper } from './constants';
import { AttachmentGroupProps } from './types';
import { useLogic } from './useLogic';

export const AttachmentGroup: FC<AttachmentGroupProps> = (props) => {
  const {
    type,
    gap = 0,
    externalPaddingsSum = 0,
    numberOfColumns = 1,
    ...restProps
  } = props;

  const { attachments } = useLogic({
    gap,
    externalPaddingsSum,
    numberOfColumns,
    type,
    ...restProps,
  });

  const GroupComponent = attachmentGroupMapper[type];

  return <GroupComponent gap={gap}>{attachments}</GroupComponent>;
};
