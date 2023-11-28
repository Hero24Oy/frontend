import { FC } from 'react';

import { attachmentGroupMapper } from './constants';
import { AttachmentGroupProps } from './types';
import { useLogic } from './useLogic';

export const AttachmentGroup: FC<AttachmentGroupProps> = (props) => {
  const { type, gap } = props;

  const { attachments } = useLogic(props);

  const GroupComponent = attachmentGroupMapper[type];

  return <GroupComponent gap={gap}>{attachments}</GroupComponent>;
};
