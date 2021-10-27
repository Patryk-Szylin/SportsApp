import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/home';
import StatsScreen from '../../screens/stats';

const Stack = createStackNavigator();

export default function StackRoot() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Stats" component={StatsScreen} />
    </Stack.Navigator>
  );
}
