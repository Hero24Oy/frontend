import { call, put } from 'redux-saga/effects';

import { SIGN_IN_BY_PROVIDER } from '../../constants';

import {
  setSignInEnded,
  setSignInStarted,
  signInSucceed,
  signInWithProvider,
} from '$modules/Auth/actions';

export function* signInWithProviderWorker(
  action: ReturnType<typeof signInWithProvider>,
): Generator {
  const { payload } = action;

  try {
    yield put(setSignInStarted());

    const signIn = SIGN_IN_BY_PROVIDER[payload.provider];

    if (!signIn) {
      throw new Error(
        `The used provider type isn't exist (${payload.provider})`,
      );
    }

    yield call(signIn, payload.options);
    yield put(signInSucceed());
  } finally {
    yield put(setSignInEnded());
  }
}
