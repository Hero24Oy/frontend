import { FC } from 'react';

import { AttachmentImageProps } from '../../types';

import { GroupImage } from './GroupImage';
import { ImageContainer } from './ImageContainer';

export const AttachmentImage: FC<AttachmentImageProps> = (props) => {
  const { isSoloImage, ...restProps } = props;

  if (isSoloImage) {
    return <GroupImage {...restProps} />;
  }

  return <ImageContainer {...restProps} />;
};
