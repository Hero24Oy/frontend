import { useCallback } from 'react';

import { useEditUser, useGetUser, User } from '../../graphql';

type UpdateLastAskedReviewTime = (newTime: number) => Promise<User | undefined>;

export const useUpdateUserLastAskedReviewTime =
  (): UpdateLastAskedReviewTime => {
    const { getUser } = useGetUser();
    const { editUser } = useEditUser();

    const updateLastAskedReviewTime: UpdateLastAskedReviewTime = useCallback(
      async (lastAskedReviewTime) => {
        const userId = getUser.data!.id;

        // TODO move logic to server
        return editUser.request({
          userId,
          data: {
            lastAskedReviewTime,
          },
        });
      },
      [editUser, getUser.data],
    );

    return updateLastAskedReviewTime;
  };
