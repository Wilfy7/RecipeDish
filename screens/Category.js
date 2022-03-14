import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { CategoryData } from '../assets/Data/CategoryData';
import CategoryHeader from '../components/CategoryHeader';

const Category = ({navigation}) => {
    return (
        <>
          <CategoryHeader 
          navigation={navigation}/>
          <ScrollView>
               <MainCategories />
          </ScrollView>
        </>
    );
}

const MainCategories = () => (
  <>
   {CategoryData.map((Category, index) => (
  <TouchableOpacity style={styles.container} key={index}>
    <Image 
      source={{uri: Category.image}}
      style={styles.img}
    />
    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        <Text style={{fontWeight:'800', fontSize: 18, letterSpacing: 1.5}}>{Category.name}</Text>
        <Text>{Category.quantity}</Text>
    </View>
  </TouchableOpacity>
  ))}
  </>
)


const styles = StyleSheet.create({
  img: {
      height: 120,
      width: '100%',
      borderRadius: 15,
  },
  container : {
    borderWidth: 0.2,
    marginHorizontal: 5,
    borderRadius: 15,
    paddingBottom: 20,
    marginVertical: 15
  }
})

export default Category;
