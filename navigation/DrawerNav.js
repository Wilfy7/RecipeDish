import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Icon } from 'react-native-elements';
import Category from '../screens/Category';
import Search from '../screens/Search';
import UserStack from './UserStack'

const Drawer = createDrawerNavigator()

const DrawerNav = () => {
    return (
       <Drawer.Navigator initialRoutName= 'Home'screenOptions={{
           headerShown: false,
           drawerActiveTintColor: 'green'
       }}>
           <Drawer.Screen 
              name= 'Menu' 
              component= {UserStack}
              options={{
                  title: 'Home',
                  drawerIcon: ({focused}) => (
                      <Icon 
                        name= 'home'
                        type= 'ionicon'
                        size= {24}
                        color= {focused? '#7cc' : 'gray'}
                      />
                  )

              }}  
           />
           <Drawer.Screen 
              name= 'Category' 
              component= {Category}  
              options={{
                  drawerIcon: ({focused}) => (
                      <Icon 
                      name= 'layers-outline'
                      type= 'ionicon'
                      size= {24}
                      color= {focused? '#7cc' : 'gray'}
                      />
                  )
              }}
           />

<Drawer.Screen 
              name= 'Search' 
              component= {Search}  
              options={{
                  drawerIcon: ({focused}) => (
                      <Icon 
                      name= 'search'
                      type= 'ionicon'
                      size= {24}
                      color= {focused? '#7cc' : 'gray'}
                      />
                  )
              }}
           />
       </Drawer.Navigator>
    );
}

export default DrawerNav;
