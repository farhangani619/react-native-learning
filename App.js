import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ReviewDetails from './screens/ReviewDetailsScreen';
import About from './screens/AboutScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
      {/*check this app  */}
    </Drawer.Navigator>
  );
}

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Root">
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
        />
          <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

