import React from 'react';
import { View,Text,StyleSheet,Button,Platform } from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import Color from '../constant/Color'

const CategoryMealScreen=({navigation})=>{
    const categoryId= navigation.getParam('categoryId');

    const selectedCategory=CATEGORIES.find(category=>category.id === categoryId);

    return(
        <View style={styles.screen}>
            <Text>
                The Category Meal Screen {selectedCategory.title}
            </Text>
            <Button title="Got ot Meal Details Screen" onPress={() =>navigation.navigate({routeName:'MealDetail'})} />
            <Button title="Go Back" onPress={() =>navigation.pop()} />
        </View>
    );
};

CategoryMealScreen.navigationOptions=navigationData=>{

    const categoryId= navigationData.navigation.getParam('categoryId');

    const selectedCategory=CATEGORIES.find(category=>category.id === categoryId);

    return{
        headerTitle:selectedCategory.title,    
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default CategoryMealScreen;