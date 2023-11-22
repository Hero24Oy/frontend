// import { useCallback } from 'react';

// import {
//   useEditUser,
//   useGetUser,
//   User,
//   UserDataActiveRoute,
// } from '../../graphql';

// type UpdateActiveRoute = (
//   activeRoute?: UserDataActiveRoute,
// ) => Promise<User | undefined>;

// export const useUpdateActiveRoute = (): UpdateActiveRoute => {
//   const { getUser } = useGetUser();
//   const { editUser } = useEditUser();

//   const updateActiveRoute: UpdateActiveRoute = useCallback(
//     async (route) => {
//       const userId = getUser.data.id;

//       // TODO move logic to server
//       const activeRoute = route
//         ? {
//             chatId: Object.values(route)[0],
//           }
//         : {};

//       return editUser.request({
//         userId,
//         data: {
//           activeRoute,
//         },
//       });
//     },
//     [editUser, getUser.data],
//   );

//   return updateActiveRoute;
// };
