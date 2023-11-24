import { ImageSource } from '$atoms/Image';

export enum AttachmentType {
  IMAGE = 'image',
  PDF = 'pdf',
}

type FileName = string;

export type FileType = {
  fileDetails: FileName | ImageSource;
  id: number;
};

export type AttachmentProps = {
  file: FileType;
  onDelete: () => void;
  type: `${AttachmentType}`;
  isSoloImage?: boolean;
};

export type AttachmentPdfProps = Pick<AttachmentProps, 'onDelete'> & FileType;

export type AttachmentImageProps = Pick<
  AttachmentProps,
  'onDelete' | 'isSoloImage'
> &
  FileType;
