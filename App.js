import HomeScreen from './src/screen/home';
import OfferScreen from './src/screen/offer';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

console.disableYellowBox = true;

console.log = function () {};
console.warn = function () {};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Offer" component={OfferScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
