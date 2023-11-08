export type ImageSize = {
  height: number;
  width: number;
};

export type File = {
  name: string;
  src: string;
  base64?: string;
};

export enum MimeType {
  PNG = 'image/png',
  JPEG = 'image/jpeg',
  PDF = 'application/pdf',
}

export interface Image extends File {
  mime: MimeType.JPEG | MimeType.PNG;
  blurHash?: string;
  size?: ImageSize;
}

export interface PDF extends File {
  mime: MimeType.PDF;
}

export type LoadedFile = Image | PDF;
