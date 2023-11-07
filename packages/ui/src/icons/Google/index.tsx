import Svg, { Path } from 'react-native-svg';

import { BaseIcon } from '$icons/base';

export const GoogleIcon: BaseIcon = (props) => {
  const { size, ...restProps } = props;

  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 19 18"
      fill="none"
      {...restProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.013 8.68c0-.515-.046-1.011-.132-1.487h-6.85v2.813h3.914a3.346 3.346 0 01-1.45 2.195v1.825h2.35c1.375-1.266 2.168-3.13 2.168-5.346z"
        fill="#4285F4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.032 15.788c1.964 0 3.61-.651 4.814-1.762l-2.35-1.825c-.652.436-1.485.694-2.464.694-1.894 0-3.497-1.279-4.069-2.998h-2.43v1.884a7.27 7.27 0 006.5 4.007z"
        fill="#34A853"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.961 9.897a4.372 4.372 0 01-.228-1.382c0-.48.083-.946.228-1.382V5.25h-2.43a7.27 7.27 0 00-.773 3.266 7.27 7.27 0 00.773 3.266l2.43-1.884z"
        fill="#FBBC05"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.032 4.135c1.068 0 2.027.367 2.78 1.087L14.9 3.136c-1.26-1.173-2.906-1.894-4.867-1.894A7.27 7.27 0 003.533 5.25l2.43 1.884c.572-1.719 2.175-2.998 4.07-2.998z"
        fill="#EA4335"
      />
    </Svg>
  );
};
