import { ImageSource } from '$atoms/Image';

export enum AttachmentType {
  IMAGE = 'image',
  PDF = 'pdf',
}

export type FileType = {
  fileDetails: string | ImageSource;
  id: number;
};

export type AttachmentProps = {
  file: FileType;
  onDelete: () => void;
  type: `${AttachmentType}`;
  widthInPercent?: string;
};
