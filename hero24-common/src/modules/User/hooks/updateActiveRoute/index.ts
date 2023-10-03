import { useCallback } from 'react';

import {
  useEditUser,
  useGetUser,
  User,
  UserDataActiveRoute,
} from '../../graphql';

type UpdateActiveRoute = (
  activeRoute?: UserDataActiveRoute,
) => Promise<User | undefined>;

export const useUpdateActiveRoute = (): UpdateActiveRoute => {
  const { getUser } = useGetUser();
  const { editUser } = useEditUser();

  const updateActiveRoute: UpdateActiveRoute = useCallback(
    async (route) => {
      const userId = getUser.data?.id;

      const activeRoute = route
        ? {
            chatId: Object.values(route)[0],
          }
        : {};

      if (!userId) {
        throw new Error('User id not found');
      }
      try {
        const res = await editUser.request({
          userId,
          data: {
            activeRoute,
          },
        });

        return res;
      } catch (error) {
        console.error('Error updating active route', error);
        return undefined;
      }
    },
    [editUser, getUser.data?.id],
  );

  return updateActiveRoute;
};
