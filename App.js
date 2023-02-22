import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Src/Screens/Login';
import Signup from './Src/Screens/Signup';
import Splash from './Src/Screens/Splash';
import Profile from './Src/Screens/Profile';
import Home from './Src/Screens/Home';
const Stack = createNativeStackNavigator();
export function App() {
  const [loading, setisloading] = useState(true);

useEffect(()=>{
setTimeout(() => {
  setisloading(false)
}, 4000);
},[])


  if (loading) return <Splash />;

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <View style={{height: Dimensions.get('window').height}}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}
