import { HeadingSize, OriginHeadingSize } from './enum';

export const CONVERT_SIZE_TO_ORIGIN_MAPPER = {
  [HeadingSize.H1]: OriginHeadingSize.H1,
  [HeadingSize.H2]: OriginHeadingSize.H2,
  [HeadingSize.H3]: OriginHeadingSize.H3,
  [HeadingSize.H4]: OriginHeadingSize.H4,
  [HeadingSize.H5]: OriginHeadingSize.H5,
  [HeadingSize.H6]: OriginHeadingSize.H6,
  [HeadingSize.H7]: OriginHeadingSize.H7,
  [HeadingSize.H8]: OriginHeadingSize.H8,
  [HeadingSize.H9]: OriginHeadingSize.H9,
} satisfies Record<HeadingSize, OriginHeadingSize>;
