import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,FlatList,Platform } from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import Color from '../constant/Color'



const CategoriesScreen=({navigation})=>{

    const renderGridItem=(itemData) =>{
        return (
            <TouchableOpacity  style={styles.gridItem} onPress={() =>{
                navigation.navigate({routeName:'CategoryMeal',params:{
                    categoryId: itemData.item.id,
                    
                }})
            }}>
                <View>
                    <Text>
                        {itemData.item.title}
                    </Text>
                </View>
            </TouchableOpacity>
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

CategoriesScreen.navigationOptions={
    headerTitle:'Meal Categories',
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Color.primaryColor
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    gridItem:{
        flex:1,
        margin:15,
        height:150
    }

});

export default CategoriesScreen;