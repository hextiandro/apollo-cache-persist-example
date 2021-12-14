/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet, Text, useColorScheme,
  View
} from 'react-native';
import {
  Colors, Header
} from 'react-native/Libraries/NewAppScreen';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache()
});



const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={styles.sectionContainer}>
            <Text>Hola Asio!!!</Text>
          </View>
        </ScrollView>
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
