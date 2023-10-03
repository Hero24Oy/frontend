import { gql } from '@apollo/client';

import { Maybe } from '$common';

export type WorkTime = {
  startTime: Date;
  endTime?: Maybe<Date>;
};

export const WORK_TIME_FRAGMENT = gql`
  fragment WorkTimeInfo on WorkTimeDto {
    startTime
    endTime
  }
`;
