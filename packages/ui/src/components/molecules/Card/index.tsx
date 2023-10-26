import { ComponentProps, FC, PropsWithChildren } from 'react';

import { Box } from '$atoms';

type BoxProps = ComponentProps<typeof Box>;

type Props = PropsWithChildren<{
  backgroundColor?: BoxProps['backgroundColor'];
  borderColor?: BoxProps['borderColor'];
  borderRadius?: BoxProps['borderRadius'];
  maxWidth?: BoxProps['maxWidth'];
  sx?: BoxProps['sx'];
}>;

export const Card: FC<Props> = (props) => {
  const { borderRadius, borderColor, maxWidth, sx, backgroundColor, children } =
    props;

  return (
    <Box
      borderRadius={borderRadius}
      borderColor={borderColor}
      maxWidth={maxWidth}
      sx={sx}
      backgroundColor={backgroundColor}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};
