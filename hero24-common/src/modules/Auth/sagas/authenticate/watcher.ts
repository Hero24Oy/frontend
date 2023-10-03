// import { take } from 'redux-saga/effects';

// import { firebaseAuthStatusChanged, logoutSucceed } from '../../actions';
// import { authErrorHandler } from '../utils';

// import { authenticateWorker } from './workers';

// import { reCallUntilSucceed } from '$modules/Common/utils/saga';

// export function* authenticateWatcher(): Generator {
//   yield take(firebaseAuthStatusChanged.getType()); // Wait initial event

//   while (true) {
//     yield* reCallUntilSucceed(authenticateWorker, authErrorHandler);
//     yield take(logoutSucceed.getType());
//   }
// }
