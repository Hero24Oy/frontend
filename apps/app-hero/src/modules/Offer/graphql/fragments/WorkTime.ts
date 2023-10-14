import { gql } from '@apollo/client';

export const WORK_TIME_FRAGMENT = gql`
  fragment WorkTimeFragment on WorkTimeDto {
    startTime
    endTime
  }
`;
