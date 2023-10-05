import { Redirect } from 'expo-router';
import { FC } from 'react';

const UnmatchedRoute: FC = () => {
  console.error('Oops! Such route does not exists! Redirecting to main page');

  return <Redirect href="/" />;
};

export default UnmatchedRoute;
