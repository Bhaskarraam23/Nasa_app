import React from 'react';
import Home from './Home';
import Details from './Details';
import Random from './Random';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Weather_App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name=" " component={Home} />
        <Stack.Screen name="Details" component={ Details } />
        <Stack.Screen name="Random" component={Random} /> 
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default Weather_App;
