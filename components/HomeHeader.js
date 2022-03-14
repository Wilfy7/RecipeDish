import React from 'react';
import { TouchableOpacity } from 'react-native';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import DrawerNav from '../navigation/DrawerNav';


const Draw = DrawerNav()

const Homeheader = ({navigation}) => {
    return (
        <> 
        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
            onPress={() => navigation.toggleDrawer()}>
            <Icon
            name= 'menu-outline' 
            type= 'ionicon'
            size= {25}
            
            />
            </TouchableOpacity>
            <Text style={styles.txt}>Home</Text>

        </SafeAreaView>
        <Divider 
            width={0.7}
            />
        </>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15
    },
    txt:{
        fontWeight: '700',
        fontSize: 16,
        marginLeft: 120
    
    }
})

export default Homeheader;
