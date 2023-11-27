import { FC } from 'react';

import { AttachmentGroupMapper } from './constants';
import { AttachmentGroupProps } from './types';
import { useLogic } from './useLogic';

export const AttachmentGroup: FC<AttachmentGroupProps> = (props) => {
  const { type, numberOfColumns, ...restProps } = props;

  const { attachments } = useLogic({ type, numberOfColumns, ...restProps });

  const GroupComponent = AttachmentGroupMapper[type];

  return (
    <GroupComponent numberOfColumns={numberOfColumns}>
      {attachments}
    </GroupComponent>
  );
};

export * from './helpers';
