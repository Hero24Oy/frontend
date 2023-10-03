import { useCallback } from 'react';

import { useEditUser, useGetUser, User } from '../../graphql';

type AddPushToken = (tokenToAdd: string) => Promise<User | undefined>;

export const useAddPushToken = (): AddPushToken => {
  const { getUser } = useGetUser();
  const { editUser } = useEditUser();

  const addToken: AddPushToken = useCallback(
    async (tokenToAdd) => {
      const existingTokens = getUser.data?.data.pushToken;

      if (existingTokens?.includes(tokenToAdd)) {
        return undefined;
      }

      const userId = getUser.data?.id;

      if (!userId) {
        throw new Error('User id not found');
      }

      const updatedTokens = existingTokens
        ? [...existingTokens, tokenToAdd]
        : [tokenToAdd];

      try {
        const res = await editUser.request({
          userId,
          data: {
            pushToken: updatedTokens,
          },
        });

        return res;
      } catch (error) {
        console.error('Error adding push token', error);
        return undefined;
      }
    },
    [editUser, getUser.data?.data.pushToken, getUser.data?.id],
  );

  return addToken;
};
