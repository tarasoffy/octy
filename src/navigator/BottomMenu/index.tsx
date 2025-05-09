import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import components
import {favoritePath, homePath} from '../../constants/pathLocations';
import Home from '../../screens/App/Home';
import Favorite from '../../screens/App/Favorite';
import {Icon} from '../../components/Icon';
import {goldColor, lightGray} from '../../constants/colors';
import {w} from '../../styles/scale';

const BottomMenu: FC = (): JSX.Element => {
  const Tab = createBottomTabNavigator();

  const HomeStackScreen = () => {
    return (
      <Home />
    );
  };

  const FavoriteStackScreen = () => {
    return (
      <Favorite />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        headerTransparent: false,
        tabBarActiveTintColor: goldColor,
        tabBarInactiveTintColor: lightGray,
        tabBarLabelStyle: {
          fontSize: w(12),
          fontWeight: 'bold',
        },
      })}
      initialRouteName={homePath}>
      <Tab.Screen 
        name={homePath}  
        component={HomeStackScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => <Icon name='home' fill={focused? goldColor: lightGray}/>
        }}
      />
      <Tab.Screen 
        name={favoritePath} 
        component={FavoriteStackScreen} 
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({focused}) => <Icon name='twoStar' fill={focused? goldColor: lightGray}/>
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomMenu;
