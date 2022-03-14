import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import { Divider, Icon } from 'react-native-elements';

const CategoryHeader = ({navigation}) => {
    return (
     <SafeAreaView>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Home')}
            style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
              <Icon 
                name= 'chevron-back-outline'
                type= 'ionicon'
                size= {25}
                color= '#2787FE'
             />
               <Text style={{color: '#2787FE'}}>Home</Text>
            </TouchableOpacity>
             <Text style={styles.txt}>Category</Text>
        </View>
          <Divider 
          width={0.7}
          />
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    txt: {
        marginLeft: 100,
        fontWeight: '700',
        
    
    }

})

export default CategoryHeader;
