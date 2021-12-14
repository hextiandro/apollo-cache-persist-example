/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { ApolloProvider } from '@apollo/client';
import type { Node } from 'react';
import React from 'react';
import {
  SafeAreaView, StatusBar,
  StyleSheet, Text, useColorScheme
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { useInitializeClient } from './src/hooks/useInitializeClient';
import { CharacterListScreen } from './src/screens/CharacertListScreen';


// // Initialize Apollo Client
// const client = new ApolloClient({
//   uri: 'localhost:4000/graphql',
//   cache: new InMemoryCache()
// });




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
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <CharacterListScreen />
      </SafeAreaView>
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
