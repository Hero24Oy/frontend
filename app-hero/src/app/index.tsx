import { Redirect } from 'expo-router';
import { FC } from 'react';

const Main: FC = () => {
  return <Redirect href="/auth/" />;
};

export default Main;
