import { gql } from '@apollo/client';

export const WORK_TIME_FRAGMENT = gql`
  fragment WorkTimeInfo on WorkTimeDto {
    startTime
    endTime
  }
`;
