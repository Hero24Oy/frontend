import { useCallback, useState } from 'react';

export const useLogic = () => {
  const [isFullAlertOpen, setIsFullAlertOpen] = useState<boolean>(false);

  const onFullAlertOpenHandler = useCallback(() => {
    setIsFullAlertOpen(true);
  }, []);

  return { isFullAlertOpen, onFullAlertOpenHandler };
};
