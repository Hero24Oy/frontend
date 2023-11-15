import { FC } from 'react';

import { useGetWorkareas } from '@hero24/common';
import { Text } from '@hero24/ui';

export const CitySelect: FC = () => {
  const { isLoading } = useGetWorkareas('en');

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return <Text variant="medium">City selector here</Text>;
};
