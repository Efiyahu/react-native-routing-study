import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';
import {Provider} from 'react-redux';
import {store} from './store';
import RootNavigation from './navigation';
import EnableContextProvider from './contexts/EnableContext';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <EnableContextProvider>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </EnableContextProvider>
    </ThemeProvider>
  );
};

export default App;
