import { FC } from 'react';

import { AttachmentGroupMapper } from './constants';
import { AttachmentGroupProps } from './types';
import { useLogic } from './useLogic';

export const AttachmentGroup: FC<AttachmentGroupProps> = (props) => {
  const { type, numberOfColumns, ...restProps } = props;

  const { attachments } = useLogic({ type, ...restProps });

  const GroupComponent = AttachmentGroupMapper[type];

  return (
    <GroupComponent numberOfColumns={numberOfColumns}>
      {attachments}
    </GroupComponent>
  );
};
