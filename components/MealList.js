import React from 'react';
import { View,Text,FlatList,StyleSheet } from 'react-native';

import MealItem from './MealItem'

const MealList =({listData,navigation})=>{
    
    const renderMealItem=itemData=>{
        return(
            <MealItem 
                title={itemData.item.title} 
                onSelectedMeal={()=>navigation.navigate({routeName:'MealDetail',params:{id:itemData.item.id}})} 
                duration={itemData.item.duration} 
                complexity={itemData.item.complexity} 
                affordability={itemData.item.affordability} 
                image={itemData.item.imageUrl} 
            />
        );
    };

    return (
        <View style={styles.list}>
            <FlatList
                data={listData}
                keyExtractor={(item,index)=>item.id}
                renderItem={renderMealItem}
                style={{width:'100%'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealList;