import { UpdateUserLastAskedReviewTime } from '../../actions';
import { editUserSaga } from '../../graphql/mutations';

export function* updateUserAskedReviewTime(
  action: UpdateUserLastAskedReviewTime,
): Generator {
  yield* editUserSaga({
    userId: action.userId,
    data: {
      lastAskedReviewTime: action.time,
    },
  });
}
