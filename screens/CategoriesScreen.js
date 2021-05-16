import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,FlatList } from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';


const CategoriesScreen=({navigation})=>{

    const renderGridItem=(itemData) =>{
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onSelected={() =>{
                    navigation.navigate({routeName:'CategoryMeal',params:{
                        categoryId: itemData.item.id,
                    
                    }})
                }} />
        );
    };

    return(
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
            // keyExtractor={(category)=>{category.id}}
        />
    );
};

CategoriesScreen.navigationOptions=(navData)=>{
    return{
        headerTitle:'Meal Categories',
        headerLeft:()=>{
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName="ios-menu" onPress={()=>{
                        navData.navigation.toggleDrawer();
                    }} />
                </HeaderButtons>
            )
        }
    }
};

export default CategoriesScreen;