import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../src/screens/Home';
import Login from '../../src/screens/Login';
import Hotel from '../../src/screens/Hotel'
import Register from '../screens/Cadastro';
import Lazer from '../screens/Lazer';
import Gastronomia from '../screens/Gastronomia';
import Acomodacoes from '../screens/Acomodacoes';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Hotel" component={Hotel}  options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Register} />
        <Stack.Screen name="Lazer" component={Lazer} options={{headerShown: false}}/>
        <Stack.Screen name="Gastronomia" component={Gastronomia} options={{headerShown: false}} />
        <Stack.Screen name="Acomodacoes" component={Acomodacoes} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
