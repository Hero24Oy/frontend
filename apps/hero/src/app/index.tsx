import { Link } from 'expo-router';
import React, { FC } from 'react';

import { useFirebaseUser } from '@hero24/common';
import {
  Button,
  CheckboxGroup,
  CheckboxOption,
  SafeAreaView,
  View,
} from '@hero24/ui';

const options: CheckboxOption[] = [
  {
    label: 'Home cleaning',
    value: 'Home cleaning',
  },
  {
    label: 'Office cleaning',
    value: 'Office cleaning',
  },
  {
    label: 'Window cleaning',
    value: 'Window cleaning',
  },
];

const Home: FC = () => {
  const { user } = useFirebaseUser();

  return (
    <SafeAreaView>
      <CheckboxGroup
        size="lg"
        options={options}
        label="Cleaning & domestic help"
      />
      <View>
        {!user && (
          <Button>
            <Link href="/sign-in">Sign in</Link>
          </Button>
        )}

        {user && (
          <Button>
            <Link href="/profile">My profile</Link>
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
