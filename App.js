import * as React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Part2 from './src/screens/Part2';
import Perfil from './src/screens/Perfil';

import { BiHomeAlt, BiSearch} from 'react-icons/bi';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FaRegUserCircle } from 'react-icons/fa';
import { CgClapperBoard } from 'react-icons/cg';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'gray',
          tabBarInactiveTintColor: 'white',

          tabBarActiveBackgroundColor: 'black',
          tabBarInactiveBackgroundColor: 'black',

          headerShown: false,
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={Part2}
          options={{
            tabBarIcon: () => (
              <BiHomeAlt color='white' size={26}/>
            ),
          }}
        />

        <Tab.Screen
          name="Explorer"
          component={Perfil}
          options={{
            tabBarIcon: () => (
              <BiSearch color='white' size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Reels"
          component={Perfil}
          options={{
            tabBarIcon: () => (
              <CgClapperBoard color='white' size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Shop"
          component={Perfil}
          options={{
            tabBarIcon: () => (
              <IoBagHandleOutline color='white' size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarIcon: () => (
              <FaRegUserCircle color='white' size={25} />
            ),
          }}
        />


      </Tab.Navigator>
    </NavigationContainer>
  );
}