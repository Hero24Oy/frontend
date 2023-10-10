import { Redirect } from 'expo-router';
import { FC } from 'react';

const UnmatchedRoute: FC = (props) => {
  console.error('Oops! Such route does not exists! Redirecting to main page');
  console.error(
    'Props being passed to non-existing route ',
    JSON.stringify(props),
  );

  return <Redirect href="/" />;
};

export default UnmatchedRoute;
