export type Range = {
  max: number;
  min: number;
};

export type ImageSize = {
  height: number;
  width: number;
};

export type File = {
  name: string;
  src: string;
  base64?: string;
};

export interface Image extends File {
  type: 'image';
  blurHash?: string;
  size?: ImageSize;
}

export interface PDF extends File {
  type: 'pdf';
}

export type LoadedFile = Image | PDF;
