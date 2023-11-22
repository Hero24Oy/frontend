import { FC } from 'react';

import { MimeComponents } from './constants';
import { useLogic } from './hooks';
import { AttachmentGroupProps } from './type';

export const AttachmentGroup: FC<AttachmentGroupProps> = (props) => {
  const { type, ...restProps } = props;

  const { attachments } = useLogic({ type, ...restProps });

  const GroupComponent = MimeComponents[type];

  return <GroupComponent>{attachments}</GroupComponent>;
};
