import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import StackRoot from './navigation';

import store from './store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider>
        <PaperProvider>
          <NavigationContainer>
            <StackRoot />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </StoreProvider>
  );
};

export default App;
