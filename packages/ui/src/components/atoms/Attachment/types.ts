export enum AttachmentMime {
  IMAGE = 'image',
  PDF = 'pdf',
}

export type AttachmentProps = {
  file: FileType;
  mime: AttachmentMime;
  onDelete: (id: number) => void;
};

export type FileType = {
  fileSource: string;
  id: number;
  fileName?: string;
};
