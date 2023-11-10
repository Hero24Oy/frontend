import { ExpoStack } from '../ExpoStack';

export const createLayout = (title?: string) => {
  return () => {
    return <ExpoStack title={title} />;
  };
};
