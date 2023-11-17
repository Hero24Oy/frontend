import { StyleSheet } from 'react-native';

import { VStack } from '@hero24/ui';

import { useLogic } from './useLogic';

import { BioForm, BioHeading } from '$modules/Profile/components';

export const BioScreen = () => {
  const { profileType, ...restProps } = useLogic();

  return (
    <VStack style={styles.container}>
      <BioHeading profileType={profileType} />
      <BioForm profileType={profileType} {...restProps} />
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
});
