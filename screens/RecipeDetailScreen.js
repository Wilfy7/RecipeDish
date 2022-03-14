import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import { Icon } from 'react-native-elements';

const RecipeDetailScreen = ({navigation, route}) => {
    const {name, name2, image, image2, category, category2, ingredients, ingredients2, formular1, formular2, time, time2}= route.params

    const [visible, setVisible] = useState (false)

    return (
        <>
        <View>
            <Image 
            source={{uri: image || image2}}
            style={{height: 250, width: '100%', resizeMode: 'cover'}}
            />
            <TouchableOpacity 
              style={styles.icon}
              onPress={() => navigation.goBack()}
            >
                <Icon 
                name= 'chevron-back-outline'
                type= 'ionicon'
                size= {35}
                color= '#2AD184'
                />
            </TouchableOpacity>

            <View style={{alignContent: 'content', alignItems: 'center' }}>
            <Text style={styles.txt}>{name || name2}</Text>
            <Text style={{color: '#2AD184', marginVertical: 10, fontWeight:'700'}}>{category || category2}</Text>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <Icon 
                  name= 'timer-outline'
                  type= 'ionicon'
                  size= {20}
                />
                <Text style={{fontWeight: '700'}}> {time || time2}</Text>
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {setVisible(!visible)
            }
        }
            >
               <Text style={{color:'#2AD184'}}>{!visible ? 'View Ingredients' : 'Checkout Process'} </Text>
            </TouchableOpacity>
               {!visible ?
            <View style={{marginHorizontal: 40}}>
               <Text style={{lineHeight: 22}}>{formular1 || formular2}</Text>
            </View>
            :
            <View style={{marginHorizontal: 40}}>
                <Text style={{lineHeight: 45}}>{ingredients || ingredients2}</Text>
            </View>
            }
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    icon: {
        borderWidth: 1,
        height: 40,
        width: 40,
        borderRadius: 20,
        position: 'absolute',
        top: 55,
        backgroundColor: 'white',
        borderColor: '#2AD184',
        left: 10

    },
    txt: {
        fontWeight: '800',
        marginTop: 20,
        fontSize: 20
    },
    btn: {
        marginVertical: 15,
        borderColor: '#2AD184',
        borderWidth: 1,
        paddingHorizontal: 70,
        paddingVertical: 10,
        borderRadius: 20
    }
})

export default RecipeDetailScreen;
