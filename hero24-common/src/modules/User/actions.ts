import {
  PICK_USER_BY_ID_PHONE,
  SET_USER_BY_ID_PHONE,
  TEMP_USER_UPDATE,
  UPDATE_USER_LAST_ASKED_REVIEW_TIME,
  USER_UPDATE,
  USER_UPDATE_ACTIVE_ROUTE,
  USER_UPDATE_PRESENCE,
  USER_UPDATED,
} from './actionTypes';
import { User } from './types';

// TODO strip when migrate to apollo hooks
export type UserData = {
  data: Omit<User['data'], 'createdAt'>;
  id: string;
};

export interface UpdateUser {
  type: typeof USER_UPDATE;
  user: User;
}

export const updateUser: (user: User) => UpdateUser = (user) => {
  return {
    type: USER_UPDATE,
    user,
  };
};

export interface UserUpdated {
  type: typeof USER_UPDATED;
  user: User;
}

export const userUpdated: (user: User) => UserUpdated = (user) => {
  if (user.data.selectedAppLanguage) {
    // i18n.locale = user.data.selectedAppLanguage;
  }

  return {
    type: USER_UPDATED,
    user,
  };
};

export interface UserUpdatePresence {
  isActive: boolean;
  type: typeof USER_UPDATE_PRESENCE;
}

export const userUpdatePresence: (isActive: boolean) => UserUpdatePresence = (
  isActive,
) => {
  return {
    type: USER_UPDATE_PRESENCE,
    isActive,
  };
};

export interface UserUpdateActiveRoute {
  type: typeof USER_UPDATE_ACTIVE_ROUTE;
  activeRoute?: {
    [key: string]: string;
  };
}

export const userUpdateActiveRoute: (activeRoute?: {
  [key: string]: string;
}) => UserUpdateActiveRoute = (activeRoute) => {
  return {
    type: USER_UPDATE_ACTIVE_ROUTE,
    activeRoute,
  };
};

export interface UpdateTempUser {
  data: User;
  type: typeof TEMP_USER_UPDATE;
}

export const updateTempUser: (data: User) => UpdateTempUser = (data) => {
  return {
    type: TEMP_USER_UPDATE,
    data,
  };
};

export interface PickUserByIdPhone {
  type: typeof PICK_USER_BY_ID_PHONE;
  userId: string;
}

export const pickUserByIdPhone: (userId: string) => PickUserByIdPhone = (
  userId,
) => ({
  type: PICK_USER_BY_ID_PHONE,
  userId,
});

export interface SetUserByIdPhone {
  phone: string;
  type: typeof SET_USER_BY_ID_PHONE;
  userId: string;
}

export const setUserByIdPhone: (
  userId: string,
  phone: string,
) => SetUserByIdPhone = (userId, phone) => ({
  type: SET_USER_BY_ID_PHONE,
  userId,
  phone,
});

export interface UpdateUserLastAskedReviewTime {
  time: number;
  type: typeof UPDATE_USER_LAST_ASKED_REVIEW_TIME;
  userId: string;
}

export const updateUserLastAskedReviewTime: (
  userId: string,
  time: number,
) => UpdateUserLastAskedReviewTime = (userId, time) => ({
  type: UPDATE_USER_LAST_ASKED_REVIEW_TIME,
  userId,
  time,
});
