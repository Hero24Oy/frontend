// import { useCallback } from 'react';

// import { useEditUser, useGetUser } from '../../graphql';

// export type DeletePushToken = (
//   userId: string,
//   tokenToDelete: string,
// ) => Promise<void>;

// export const useDeletePushToken = (): DeletePushToken => {
//   // TODO implement lazy user query
//   const { getUser } = useGetUser({
//     skip: true,
//   });
//   const { editUser } = useEditUser();

//   const deleteToken: DeletePushToken = useCallback(
//     async (userId, tokenToDelete) => {
//       const user = await getUser.refetch({
//         id: userId,
//       });

//       const { data } = user.data.response;
//       const { pushToken: existingTokens } = data;

//       if (!existingTokens?.includes(tokenToDelete)) {
//         return;
//       }

//       // TODO move logic to server
//       const updatedTokens = existingTokens.filter(
//         (token) => token !== tokenToDelete,
//       );

//       await editUser.request({
//         userId,
//         data: {
//           pushToken: updatedTokens,
//         },
//       });
//     },
//     [editUser, getUser],
//   );

//   return deleteToken;
// };
