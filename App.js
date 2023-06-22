import React from 'react';
import Calc from './Calc';
import Test from './Test';
import BigCalc from './BigCalc';
import Api from './Pages/Api.js';
import Apipsot from './Pages/Apipost';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <Calc/>
    // <BigCalc />
    // <Api />
    // <Apipsot />

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="GET_API" component={Api} />
        <Stack.Screen name="POST_API" component={Apipsot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;