// src/App.js
import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import CharacterList from './components/CharacterList';
import CreateCharacter from './components/CreateCharacter';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',  // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>RPG Character Generator</h1>
        <CreateCharacter />
        <CharacterList />
      </div>
    </ApolloProvider>
  );
}

export default App;
