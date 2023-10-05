import { Redirect } from 'expo-router';
import { FC } from 'react';

const Home: FC = () => {
  return <Redirect href="/auth/" />;
};

export default Home;
