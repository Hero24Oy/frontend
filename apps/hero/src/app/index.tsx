import { Link } from 'expo-router';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

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

const optionsNew: CheckboxOption[] = [
  {
    label: 'Installation',
    value: 'Installation',
  },
  {
    label: 'Maintenance',
    value: 'Maintenance',
  },
  {
    label: 'Engineering',
    value: 'Engineering',
  },
];

type Fields = {
  anotherCategories: string[];
  categories: string[];
};

const Home: FC = () => {
  const { user } = useFirebaseUser();

  // TODO get rid of
  const { control } = useForm<Fields>({
    defaultValues: {
      categories: [],
      anotherCategories: [],
    },
  });

  return (
    <SafeAreaView>
      <View marginVertical={10} gap={20}>
        <CheckboxGroup
          control={control}
          name="categories"
          size="lg"
          options={options}
          label="Cleaning & domestic help"
        />

        <CheckboxGroup
          control={control}
          name="anotherCategories"
          size="lg"
          options={optionsNew}
          label="Plumbing"
        />
      </View>
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
