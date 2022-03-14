import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { RecipeData } from '../assets/Data/RecipeData';
import Homeheader from '../components/HomeHeader';

const Home = ({navigation}) => {
    return (
        <>
            <Homeheader navigation={navigation} />
            <ScrollView>
                <MainContent 
                navigation={navigation}
                />
            </ScrollView>
        </>
    );
};


//Components

const MainContent = ({navigation}) => (
    <>
      {RecipeData.map((recipe, index) =>(
     <View 
       key={index}
       style={{
             flexDirection: 'row', 
             marginHorizontal: 15,
             justifyContent: 'space-evenly'
             }}>
      <Content1
         name={recipe.name}
         image={recipe.image}
         category={recipe.category}
         ingredients={recipe.ingredients}
         formular1={recipe.formular1}
         navigation={navigation}
         time={recipe.time}
       />
      <Content2 
         name2={recipe.name2}
         image2={recipe.image2}
         category2={recipe.category2}
         ingredients2={recipe.ingredients2}
         formular2={recipe.formular2}
         navigation={navigation}
         time2={recipe.time2}
      />
     </View>
     ))}
   </>
)

const Content1 = ({name, image, category, ingredients, formular1, time, navigation}) => (
    <TouchableOpacity 
      style={styles.content}
      onPress= {() => navigation.navigate('RecipeDetailScreen', {name, image, category, ingredients, formular1, time})}
    >
     <Image
        source={{uri: image}}
        style={styles.img}
     />
      <View style={styles.details}>
          <Text style={styles.txt}>{name}</Text>
          <View style={styles.cat}>
            <Text>{category}</Text>
          </View>

      </View>
    </TouchableOpacity>
)

const Content2 = ({name2, image2, category2, ingredients2, formular2, time2, navigation}) => (
    <TouchableOpacity 
      style={styles.content}
      onPress= {() => navigation.navigate('RecipeDetailScreen', {name2, image2, category2, ingredients2, formular2, time2})}
    >
      <Image
      source={{uri: image2}}
      style={styles.img}/>
      <View style={styles.details}>
          <Text style={styles.txt}>{name2}</Text>
          <View style={styles.cat}>
            <Text>{category2}</Text>
          </View>
      </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    content: {
        borderWidth: 1,
        width: 165,
        borderRadius: 15,
        marginTop: 15
        
    },
     details: {
        alignItems: 'center',
        paddingBottom: 40,
        paddingTop: 10
    },
     img: {height: 100, 
        width: 163,
        borderRadius: 15,
    },
     cat: {
        position: 'absolute',
        bottom: 2,
    },
     txt: {
        fontWeight: '700',
    },

})

export default Home;
