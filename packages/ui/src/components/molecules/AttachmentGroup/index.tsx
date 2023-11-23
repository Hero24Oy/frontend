import { FC } from 'react';

import { AttachmentGroupMapper } from './constants';
import { AttachmentGroupProps } from './type';
import { useLogic } from './useLogic';

export const AttachmentGroup: FC<AttachmentGroupProps> = (props) => {
  const { type, ...restProps } = props;

  const { attachments } = useLogic({ type, ...restProps });

  const GroupComponent = AttachmentGroupMapper[type];

  return <GroupComponent>{attachments}</GroupComponent>;
};
