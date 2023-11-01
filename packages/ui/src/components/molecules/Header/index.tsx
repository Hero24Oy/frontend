import { FC, Fragment } from 'react';

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

  return (
    <View style={{ ...styles.view }}>
      <HStack style={styles.container}>
        <HStack style={{ ...styles.left, ...styles.sides }}>
          <IconButton icon={icon} size="md" onPress={back} />
        </HStack>
        <Heading variant="H5">{name}</Heading>
        <HStack style={{ ...styles.right, ...styles.sides }}>
          <RightAccessory />
        </HStack>
      </HStack>
    </View>
  );
};
