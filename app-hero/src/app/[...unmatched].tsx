import { Redirect } from 'expo-router';
import { FC } from 'react';

const UnmatchedRoute: FC = (props) => {
  console.error(props);
  console.error('Oops! Such route does not exists! Redirecting to main page');

  return <Redirect href="/" />;
};

export default UnmatchedRoute;
