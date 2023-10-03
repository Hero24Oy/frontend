import { useCallback } from 'react';

import { useEditUser, useGetUser, User } from '../../graphql';

type UpdatePresence = (isPresent: boolean) => Promise<User | undefined>;

export const useUpdatePresence = (): UpdatePresence => {
  const { getUser } = useGetUser();
  const { editUser } = useEditUser();

  const updatePresence: UpdatePresence = useCallback(
    async (presence) => {
      const userId = getUser.data?.id;

      if (!userId) {
        throw new Error('User id not found');
      }
      try {
        const res = await editUser.request({
          userId,
          data: {
            isActive: presence,
            activeRoute: presence ? {} : undefined,
          },
        });

        return res;
      } catch (error) {
        console.error('Error deleting push token', error);
        return undefined;
      }
    },
    [editUser, getUser.data?.id],
  );

  return updatePresence;
};
