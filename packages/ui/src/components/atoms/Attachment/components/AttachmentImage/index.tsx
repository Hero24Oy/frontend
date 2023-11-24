import { FC } from 'react';

import { AttachmentImageProps } from '../../types';

import { GroupImage } from './GroupImage';
import { ImageContainer } from './ImageContainer';

export const AttachmentImage: FC<AttachmentImageProps> = (props) => {
  const { fileDetails, onDelete, isSoloImage } = props;

  if (isSoloImage) {
    return <GroupImage fileDetails={fileDetails} onDelete={onDelete} />;
  }

  return <ImageContainer fileDetails={fileDetails} onDelete={onDelete} />;
};
