import { Stack } from '@hero24/ui';

export const createLayout = (title?: string) => {
  return () => {
    return <Stack title={title} />;
  };
};
