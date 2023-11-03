import { Link } from 'expo-router';
import { FC } from 'react';

import { useFirebaseUser } from '@hero24/common';
import { Button, SafeAreaView, View } from '@hero24/ui';

const Home: FC = () => {
  const { user } = useFirebaseUser();

  return (
    <SafeAreaView>
      <View>
        {!user && (
          <Link href="/sign-in" asChild>
            <Button>Sign in</Button>
          </Link>
        )}

        {user && (
          <Link href="/profile" asChild>
            <Button>My profile</Button>
          </Link>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
