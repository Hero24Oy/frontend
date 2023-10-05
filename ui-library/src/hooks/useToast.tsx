import { useToast as useToastOrigin } from '@gluestack-ui/themed';

export const useToast = (): ReturnType<typeof useToastOrigin> => {
  return useToastOrigin();
};
