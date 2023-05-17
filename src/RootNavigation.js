import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Login from '../login';
import Signup from '../signup';

const Stack = createStackNavigator();

export default  RootNavigation = (props) => {
  return (
   
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

