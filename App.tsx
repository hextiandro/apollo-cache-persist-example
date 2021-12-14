/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import type { Node } from 'react';
import React from 'react';
import {
  StyleSheet, Text, useColorScheme
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { MainTabNavigator } from './src/components/MainTabNavigator';
import { useInitializeClient } from './src/hooks/useInitializeClient';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const client = useInitializeClient();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  if (!client) {
    return <Text>Loading ...</Text>;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>

    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    display: "flex",
    alignItems: 'center',
    marginTop: 32,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
});

export default App;
