import React from 'react';
import { View,StyleSheet,TouchableOpacity,Text,ImageBackground } from 'react-native';

import DefaultText from '../components/DefaulltText'

const MealItem=({title,onSelectedMeal,duration,affordability,complexity,image})=>{
    return(
        <View 
            style={styles.mealItem}>

            <TouchableOpacity 
                onPress={onSelectedMeal}>

                <View>
                    <View 
                        style={{...styles.row,...styles.mealHeader}}>

                        <ImageBackground 
                            source={{uri:image}} 
                            style={styles.bgImage}>

                            <View 
                                style={styles.titleContainer}>

                                <Text 
                                    style={styles.title} 
                                    numberOfLines={1}>

                                    {title}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View 
                        style={{...styles.row,...styles.mealDetails}}>

                        <DefaultText>
                            {duration}
                        </DefaultText>
                        <DefaultText>
                            {complexity.toUpperCase()}
                        </DefaultText>
                        <DefaultText>
                            {affordability.toUpperCase()}
                        </DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height:200,
        width:'100%',
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        overflow:'hidden',
        marginVertical:10
    },
    row:{
        flexDirection:'row'
    },
    mealHeader:{
        height:'85%',
    },
    mealDetails:{
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
        height:'15%'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent: 'flex-end',
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        color:'white',
        textAlign:'center'
    },
    titleContainer:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:12,
    }
});

export default MealItem;