import { StyleSheet } from 'react-native';

import { View, VStack } from '@hero24/ui';

import { useLogic } from './useLogic';

import { BioForm, BioHeading } from '$modules/Profile/components';

export const BioScreen = () => {
  const { heroType, multiScreenProgressBar, ...restProps } = useLogic();

  return (
    <VStack style={styles.container}>
      <View style={styles.heading}>
        {multiScreenProgressBar}

        <BioHeading heroType={heroType} />
      </View>

      <BioForm heroType={heroType} {...restProps} />
    </VStack>
  );
};

const styles = StyleSheet.create({
  heading: {
    gap: 24,
    paddingTop: 26,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
});
