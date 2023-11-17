import { StyleSheet } from 'react-native';

import { View, VStack } from '@hero24/ui';

import { useLogic } from './useLogic';

import { BioForm, BioHeading } from '$modules/Profile/components';

export const BioScreen = () => {
  const { profileType, multiScreenProgressBar, ...restProps } = useLogic();

  return (
    <VStack style={styles.container}>
      <View style={styles.heading}>
        {multiScreenProgressBar}

        <BioHeading profileType={profileType} />
      </View>

      <BioForm profileType={profileType} {...restProps} />
    </VStack>
  );
};

const styles = StyleSheet.create({
  heading: {
    gap: 24,
  },
  container: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
});
