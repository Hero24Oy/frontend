import { FC } from 'react';

import { attachmentGroupMapper } from './constants';
import { AttachmentGroupProps } from './types';
import { useLogic } from './useLogic';

export const AttachmentGroup: FC<AttachmentGroupProps> = (props) => {
  const { type, gap, ...restProps } = props;

  const { attachments } = useLogic({
    type,
    gap,
    ...restProps,
  });

  const GroupComponent = attachmentGroupMapper[type];

  return <GroupComponent gap={gap}>{attachments}</GroupComponent>;
};
