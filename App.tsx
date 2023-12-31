import React from 'react';
import {Text, View} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Homescreen.js';
import ProfileScreen from './screens/Profilescreen.js';
import SearchScreen from './screens/Searchscreen.js';
import { Colors } from 'react-native/Libraries/NewAppScreen';

//ST10315122_Nikhil Rajkumar

//basically we need to wrap a navigation container inside our main component

//main component

const App =() =>{
  const Tab = createBottomTabNavigator();
  return(
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName="";

          //Navigation for bottom nav
          if (route.name === 'Home'){
            iconName = focused ? 'home' : 'home';
          }else if (route.name === 'Profile'){
            iconName = focused ? 'star-outline' : 'star-outline';
          }else if (route.name === 'Search'){
            iconName = focused ? 'history' : 'history';
          }
          return <Ionic name={iconName}  size={size} color={color} />;
        },
      })}>


      
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Genre" component={ProfileScreen}/>
      <Tab.Screen name="History" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;