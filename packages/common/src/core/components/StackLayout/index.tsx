import { ExpoStack } from '../ExpoStack';

export const createStackLayout = (title?: string) => {
  return () => {
    return <ExpoStack title={title} />;
  };
};
