import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Alert, InfoIcon, VStack } from '@hero24/ui';

import { useLogic } from './useLogic';

import { TextButton } from '$modules/Profile/components/WorkDataForm/components';

export const DisclaimerAlert: FC = () => {
  const { isFullAlertOpen, onFullAlertOpenHandler } = useLogic();

  return isFullAlertOpen ? (
    <Alert
      Icon={InfoIcon}
      action="info"
      text={
        "By adding expertise, you're confirming you have the needed skills & licenses. \n\nHeroes are responsible for making sure they have the necessary expertise to perform each category of services they sign up for, and any required license. Depending on the category of expertise, certain jurisdictions may require a license \nto perform specific job."
      }
    />
  ) : (
    <VStack style={styles.container}>
      <Alert
        Icon={InfoIcon}
        action="info"
        text={
          "By adding expertise, you're confirming you have the needed skills & licenses.\n"
        }
      />
      <TextButton
        title="Read more"
        onPress={onFullAlertOpenHandler}
        styles={styles.button}
      />
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  button: {
    position: 'absolute',
    top: 45,
    left: 20,
  },
});
