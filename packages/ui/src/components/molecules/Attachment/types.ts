export enum AttachmentMime {
  IMAGE = 'image',
  PDF = 'pdf',
}

export type AttachmentFile = {
  mime: `${AttachmentMime}`;
  src: string;
};
