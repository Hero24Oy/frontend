import { Link } from 'expo-router';
import React, { FC } from 'react';

import { useFirebaseUser } from '@hero24/common';
import {
  Actionsheet,
  ActionsheetItem,
  ActionsheetItemText,
  Button,
  SafeAreaView,
  View,
} from '@hero24/ui';

const Home: FC = () => {
  const { user } = useFirebaseUser();

  return (
    <SafeAreaView>
      <Actionsheet isOpen showDragIndicator>
        <ActionsheetItem>
          <ActionsheetItemText>Hello</ActionsheetItemText>
        </ActionsheetItem>
      </Actionsheet>
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
