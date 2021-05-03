import HomeScreen from './src/screen/home';
import OfferScreen from './src/screen/offer';
import RegisterScreen from './src/screen/register';
import LoginScreen from './src/screen/login';
import ProductDetailScreen from './src/screen/productDetail';

import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SafeAreaProvider} from 'react-native-safe-area-context';
const Stack = createStackNavigator();

console.disableYellowBox = true;

// console.log = function () {};
console.warn = function () {};

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Offer" component={OfferScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
