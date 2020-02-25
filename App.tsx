import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Provider } from 'mobx-react'
import store from './store/index'

import { StatusBar } from 'react-native'

import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import Index from './pages/Index/index'
import Search from './pages/Search/search'
import Classlist from './pages/Classlist/classlsit'
import Detail from './pages/Detail/detail'

const Stack = createStackNavigator()
export default class App extends React.Component {
  state = {
    theme: null,
    currentTheme: null,
    isReady: false,
  };
  changeTheme = (theme, currentTheme) => {
    this.setState({ theme, currentTheme });
  };
  async componentDidMount() {
    await Font.loadAsync(
      'antoutline',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    );

    await Font.loadAsync(
      'antfill',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antfill.ttf')
    );
    // eslint-disable-next-line
    this.setState({ isReady: true });
  }
  render() {

    const { theme, currentTheme, isReady } = this.state;
    if (!isReady) {
      return <AppLoading />;
    }
    return (
      <NavigationContainer>
        <Provider store={store}>
          <StatusBar barStyle='dark-content'></StatusBar>
          <Stack.Navigator>

            <Stack.Screen
              name="Index"
              component={Index}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Classlist"
              component={Classlist}
              options={{
                title: '分类',
                /*                 headerStyle: {
                                  backgroundColor: '#fff',
                                },
                                headerTintColor: '#000', */
                headerTitleStyle: {
                  fontSize: 18,
                }
              }}
            />
            <Stack.Screen
              name="Detail"
              component={Detail}
              options={{
                title: '详情',
                headerTitleStyle: {
                  fontSize: 18,
                }
              }}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}


