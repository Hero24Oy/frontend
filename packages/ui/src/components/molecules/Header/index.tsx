import { FC, useMemo } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

import { deviceStatusBarHeight } from './constants';

import { Heading, HStack, IconButton, View } from '$atoms';
import { BaseIcon } from '$icons/base';
import { Color } from '$theme';
import { JsxElement } from '$types';

interface Props {
  goBackIcon: BaseIcon;
  title: string;
  goBack?: () => void;
  rightComponent?: JsxElement;
}

export const Header: FC<Props> = (props) => {
  const { goBack, title, goBackIcon, rightComponent = null } = props;

  const styles = useStyles();

  return (
    <View style={styles.view}>
      <HStack style={styles.container}>
        <HStack style={{ ...styles.left, ...styles.sides }}>
          <IconButton icon={goBackIcon} size="md" onPress={goBack} />
        </HStack>
        <Heading variant="H5">{title}</Heading>
        <HStack style={{ ...styles.right, ...styles.sides }}>
          {rightComponent}
        </HStack>
      </HStack>
    </View>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- StyleSheet don't have correct return type
export const useStyles = () => {
  const frame = useSafeAreaFrame();

  const statusBarHeight = useMemo(() => {
    const isLandscape = frame.width > frame.height;

    if (Platform.OS === 'ios' && (Platform.isPad || Platform.isTV)) {
      return deviceStatusBarHeight.ios.ipad;
    }

    if (Platform.OS === 'ios' && isLandscape) {
      return deviceStatusBarHeight.ios.iphone.landscape;
    }

    if (Platform.OS === 'ios') {
      return deviceStatusBarHeight.ios.iphone.default;
    }

    if (Platform.OS === 'android') {
      return deviceStatusBarHeight.android;
    }

    return deviceStatusBarHeight.other;
  }, [frame]);

  return useMemo(
    () =>
      StyleSheet.create({
        view: {
          borderBottomWidth: 0.2,
          borderColor: Color.GREY_LIGHT_02,
          marginTop: statusBarHeight,
        },
        container: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 74,
        },
        left: {
          justifyContent: 'flex-start',
        },
        right: {
          justifyContent: 'flex-end',
        },
        sides: {
          width: 107.5,
        },
      }),
    [statusBarHeight],
  );
};
