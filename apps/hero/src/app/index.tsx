import { Link } from 'expo-router';
import { FC } from 'react';

import { useFirebaseUser } from '@hero24/common';
import { Button, SafeAreaView, View } from '@hero24/ui';

const Home: FC = () => {
  const { user } = useFirebaseUser();

  return (
    <SafeAreaView>
      <Link href="/home" asChild>
        <Button variant="solid" size="md">
          Home
        </Button>
      </Link>

      <View>
        {!user && (
          <Link href="/sign-in" asChild>
            <Button variant="solid" size="md">
              Sign in
            </Button>
          </Link>
        )}

        {user && (
          <Link href="/profile" asChild>
            <Button variant="solid" size="md">
              My profile
            </Button>
          </Link>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
