// import { useCallback } from 'react';

// import { useEditUser, useGetUser, User } from '../../graphql';

// type UpdatePresence = (isOnline: boolean) => Promise<User | undefined>;

// export const useUpdatePresence = (): UpdatePresence => {
//   const { getUser } = useGetUser();
//   const { editUser } = useEditUser();

//   const updatePresence: UpdatePresence = useCallback(
//     async (isOnline) => {
//       const userId = getUser.data.id;

//       // TODO move logic to server
//       return editUser.request({
//         userId,
//         data: {
//           isActive: isOnline,
//           activeRoute: isOnline ? {} : undefined,
//         },
//       });
//     },
//     [editUser, getUser.data],
//   );

//   return updatePresence;
// };
