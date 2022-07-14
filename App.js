import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Main from './components/Main.jsx'
import {NativeRouter} from 'react-router-native'
import {Provider} from 'react-redux';
import {store} from './store/index';
// import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
          <Provider store={store}>
            <NativeRouter>
              <Main />
            </NativeRouter>
          </Provider>
        )
  
}


