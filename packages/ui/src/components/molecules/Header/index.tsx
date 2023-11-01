import { FC, Fragment, useMemo } from 'react';

import { useStyles } from './hooks';

import { Heading, HStack, IconButton, View } from '$atoms';
import { BaseIcon } from '$icons/base';

interface Props {
  icon: BaseIcon;
  name: string;
  back?: () => void;
  RightAccessory?: FC;
}

export const Header: FC<Props> = (props) => {
  const { back, name, icon, RightAccessory = Fragment } = props;

  const styles = useStyles();

  const leftAccessoryStyles = useMemo(
    () => ({ ...styles.left, ...styles.sides }),
    [styles],
  );

  const rightAccessoryStyles = useMemo(
    () => ({ ...styles.right, ...styles.sides }),
    [styles],
  );

  return (
    <View style={styles.view}>
      <HStack style={styles.container}>
        <HStack style={leftAccessoryStyles}>
          <IconButton icon={icon} size="md" onPress={back} />
        </HStack>
        <Heading variant="H5">{name}</Heading>
        <HStack style={rightAccessoryStyles}>
          <RightAccessory />
        </HStack>
      </HStack>
    </View>
  );
};
