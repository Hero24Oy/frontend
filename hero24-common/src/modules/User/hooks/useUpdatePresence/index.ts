import { useCallback } from 'react';

import { useEditUser, useGetUser, User } from '../../graphql';

type UpdatePresence = (isOnline: boolean) => Promise<User | undefined>;

export const useUpdatePresence = (): UpdatePresence => {
  const { getUser } = useGetUser();
  const { editUser } = useEditUser();

  const updatePresence: UpdatePresence = useCallback(
    async (isOnline) => {
      const userId = getUser.data?.id;

      if (!userId) {
        throw new Error('User id not found');
      }
      return editUser.request({
        userId,
        data: {
          isActive: isOnline,
          activeRoute: isOnline ? {} : undefined,
        },
      });
    },
    [editUser, getUser.data?.id],
  );

  return updatePresence;
};
