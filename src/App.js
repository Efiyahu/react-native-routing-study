import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';
import {Provider} from 'react-redux';
import {store} from './store';
import RootNavigation from './navigation';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
