import { Link, Redirect } from 'expo-router';
import { FC } from 'react';

import { useFirebaseUser } from '@hero24/common';
import { Button, SafeAreaView, View } from '@hero24/ui';

const Home: FC = () => {
  const { user } = useFirebaseUser();

  return (
    <SafeAreaView>
      <View>
        {!user && <Redirect href="/sign-in" />}

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
