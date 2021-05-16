import React from 'react';
import { View,Text,StyleSheet,Button,ScrollView,Image } from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'

import {MEALS} from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaulltText';

const ListItem=({children})=>{
    return(
        <View style={styles.ListItem}>
            <DefaultText>
                {children}
            </DefaultText>
        </View>
    )
}

const MealDetailsScreen=({navigation})=>{

    const id =navigation.getParam('id');

    const selectedMeal=MEALS.find(meal=>meal.id===id);

    return(
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image} />
            <View 
                style={styles.details}>
                <DefaultText>
                    {selectedMeal.duration}
                </DefaultText>
                <DefaultText>
                    {selectedMeal.complexity.toUpperCase()}
                </DefaultText>
                <DefaultText>
                    {selectedMeal.affordability.toUpperCase()}
                </DefaultText>
            </View>
            <Text style={styles.title}>
                Ingredients
            </Text>
            {selectedMeal.ingerdients.map(ingredient=>
                <ListItem key={ingredient}>
                    {ingredient}
                </ListItem>
            )}
            <Text style={styles.title}>
                Steps
            </Text>
            {selectedMeal.steps.map(step=>
                <ListItem key={step}>
                    {step}
                </ListItem>
            )}
        </ScrollView>
    );
};

MealDetailsScreen.navigationOptions=navigationData=>{
    const id= navigationData.navigation.getParam('id');
    const selectedMeal= MEALS.find(meal=>meal.id===id);

    return{
        headerTitle:selectedMeal.title,
        headerRight: ()=>(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName="ios-star"
                    onPress={() => {
                        console.log('Mark as favorite!');
                    }}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200,

    },
    details:{
        flexDirection:'row',
        padding:15,
        justifyContent: 'space-around',
    },
    title:{
        fontSize:22,
        textAlign: 'center',
        fontFamily:'open-sans'
    },
    ListItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:2,
        padding:10,
        borderRadius:10,
        textAlign: 'center'
    }
});

export default MealDetailsScreen;