import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import Category from '../screens/Category';

const Stack = createNativeStackNavigator();


const UserStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
           <Stack.Screen 
             name= 'Home'
             component= {Home}
          />
           <Stack.Screen 
             name= 'RecipeDetailScreen'
             component= {RecipeDetailScreen}
          />
         <Stack.Screen 
            name= 'Category'
            component= {Category}
         />
    </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default UserStack;
