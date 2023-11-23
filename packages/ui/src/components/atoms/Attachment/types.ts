export enum AttachmentType {
  IMAGE = 'image',
  PDF = 'pdf',
}

export type AttachmentProps = {
  file: FileType;
  onDelete: (id: number) => void;
  type: `${AttachmentType}`;
};

export type FileType = {
  fileName: string;
  fileSource: string;
  id: number;
};
