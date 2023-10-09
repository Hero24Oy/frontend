import { Redirect } from 'expo-router';
import { FC } from 'react';

const App: FC = () => {
  return <Redirect href="/auth/" />;
};

export default App;
