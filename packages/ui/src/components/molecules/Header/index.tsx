import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Heading, HStack, IconButton, View } from '$atoms';
import { BaseIcon } from '$icons/base';
import { Color } from '$theme';
import { JsxElement } from '$types';

interface Props {
  goBackIcon: BaseIcon;
  goBack?: () => void;
  rightComponent?: JsxElement;
  title?: string;
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
        {title ? <Heading variant="H5">{title}</Heading> : null}
        <HStack style={{ ...styles.right, ...styles.sides }}>
          {rightComponent}
        </HStack>
      </HStack>
    </View>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- StyleSheet doesn't have a correct return type
export const useStyles = () => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    view: {
      borderBottomWidth: 0.2,
      borderColor: Color.GREY_LIGHT_02,
      marginTop: insets.top,
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
      display: 'flex',
      alignItems: 'center',
      padding: 8,
      gap: 10,
      width: 107.5,
    },
  });
};
