import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';
import {Provider} from 'react-redux';
import store, {persistor} from './store';
import RootNavigation from './navigation';
import EnableContextProvider from './contexts/EnableContext';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <EnableContextProvider>
            <RootNavigation />
          </EnableContextProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
