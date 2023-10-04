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

        return editUser.request({
          userId,
          data: {
            lastAskedReviewTime,
          },
        });
      },
      [editUser, getUser.data?.id],
    );

    return updateLastAskedReviewTime;
  };
