import { getDefaultHeaderHeight } from '@react-navigation/elements';
import { FC, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

import { Heading, HStack, IconButton, View } from '$atoms';
import { BaseIcon } from '$icons/base';
import { Color } from '$theme';

interface Props {
  icon: BaseIcon;
  name: string;
  back?: () => void;
  RightAccessory?: FC;
}

export const Header: FC<Props> = (props) => {
  const { back, name, icon, RightAccessory } = props;

  const frame = useSafeAreaFrame();

  const statusBarHeight = useMemo(
    () => getDefaultHeaderHeight(frame, false, 0),
    [frame],
  );

  return (
    <View style={{ ...styles.view, marginTop: statusBarHeight }}>
      <HStack style={styles.container}>
        <HStack style={{ ...styles.left, ...styles.sides }}>
          <IconButton icon={icon} size="md" onPress={back} />
        </HStack>
        <Heading size="md">{name}</Heading>
        <HStack style={{ ...styles.right, ...styles.sides }}>
          {RightAccessory ? <RightAccessory /> : null}
        </HStack>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderBottomWidth: 0.2,
    borderColor: Color.GREY_LIGHT_02,
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
});
