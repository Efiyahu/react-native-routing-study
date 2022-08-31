import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';
import {Provider} from 'react-redux';
import store, {persistor} from './store';
import RootNavigation from './navigation';
import LanguageContextProvider from './contexts/LanguageContext';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <ThemeProvider testID="app" theme={theme}>
      <Provider testID="app" store={store}>
        <PersistGate testID="app" persistor={persistor}>
          <GestureHandlerRootView testID="app" style={{flex: 1}}>
            <LanguageContextProvider>
              <RootNavigation testID="app" />
            </LanguageContextProvider>
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
