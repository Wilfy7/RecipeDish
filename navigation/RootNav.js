import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserStack from './UserStack';
import DrawerNav from './DrawerNav';


const RootNav = () => {
    return (
       <NavigationContainer>
          <DrawerNav /> 
       </NavigationContainer>
    );
}

export default RootNav;
