// import { put } from 'redux-saga/effects';

import { PickUserByIdPhone, setUserByIdPhone } from '../../actions';
// import { getPhoneSaga } from '../../graphql/queries';

export function* pickUserByIdPhoneWorker(action: PickUserByIdPhone): Generator {
  // const { phoneData } = yield* getPhoneSaga(action.userId);
  // yield put(setUserByIdPhone(action.userId, phoneData || ''));
}
