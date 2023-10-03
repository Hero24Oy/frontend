import { useCallback } from 'react';

import { useEditUser, useGetUser, User } from '../../graphql';

type UpdateLastAskedReviewTime = (newTime: number) => Promise<User | undefined>;

export const useUpdateUserLastAskedReviewTime =
  (): UpdateLastAskedReviewTime => {
    const { getUser } = useGetUser();
    const { editUser } = useEditUser();

    const updateLastAskedReviewTime: UpdateLastAskedReviewTime = useCallback(
      async (lastAskedReviewTime) => {
        const userId = getUser.data?.id;

        if (!userId) {
          throw new Error('User id not found');
        }

        try {
          const res = await editUser.request({
            userId,
            data: {
              lastAskedReviewTime,
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

    return updateLastAskedReviewTime;
  };
