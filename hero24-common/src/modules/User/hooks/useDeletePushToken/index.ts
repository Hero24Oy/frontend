import { useCallback } from 'react';

import { useEditUser, useGetUser, User } from '../../graphql';

type DeletePushToken = (tokenToDelete: string) => Promise<User | undefined>;

export const useDeletePushToken = (): DeletePushToken => {
  const { getUser } = useGetUser();
  const { editUser } = useEditUser();

  const deleteToken: DeletePushToken = useCallback(
    async (tokenToDelete) => {
      const existingTokens = getUser.data?.data.pushToken;

      if (!existingTokens?.includes(tokenToDelete)) {
        return undefined;
      }

      const userId = getUser.data?.id;

      if (!userId) {
        throw new Error('User id not found');
      }
      // TODO move logic to server
      const updatedTokens = existingTokens.filter(
        (token) => token !== tokenToDelete,
      );

      return editUser.request({
        userId,
        data: {
          pushToken: updatedTokens,
        },
      });
    },
    [editUser, getUser.data?.data.pushToken, getUser.data?.id],
  );

  return deleteToken;
};
