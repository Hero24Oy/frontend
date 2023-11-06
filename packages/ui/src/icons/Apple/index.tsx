import Svg, { Path } from 'react-native-svg';

import { BaseIcon } from '$icons/base';

// * To create svg the easiest way, just use service to transform XML svg to React Native
// * For example, https://transform.tools/svg-to-react-native
// * Just paste XML code and use the ready component, but you will need to remove xmlns='*' prop

// This component is only used in sign in button so far, so it's better to keep it as simple as possible
export const AppleIcon: BaseIcon = (props) => {
  const { size, ...restProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      {...restProps}
    >
      <Path
        d="M9.603 4.734c.677 0 1.525-.457 2.03-1.068.458-.553.792-1.325.792-2.098 0-.105-.01-.21-.028-.295-.754.028-1.66.505-2.203 1.144-.43.486-.82 1.25-.82 2.031 0 .115.019.229.028.267.048.01.124.02.2.02zM7.219 16.273c.925 0 1.335-.62 2.488-.62 1.173 0 1.43.6 2.46.6 1.011 0 1.688-.934 2.328-1.85.715-1.048 1.01-2.078 1.03-2.126-.067-.019-2.003-.81-2.003-3.032 0-1.927 1.525-2.794 1.611-2.861-1.01-1.45-2.546-1.488-2.965-1.488-1.135 0-2.06.687-2.642.687-.63 0-1.459-.649-2.441-.649-1.869 0-3.767 1.545-3.767 4.463 0 1.812.706 3.729 1.574 4.969.744 1.049 1.392 1.907 2.327 1.907z"
        fill="#000"
      />
    </Svg>
  );
};
