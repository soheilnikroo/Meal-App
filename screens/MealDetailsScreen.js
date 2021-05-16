import React,{useEffect,useCallback} from 'react';
import { View,Text,StyleSheet,ScrollView,Image } from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import {useSelector,useDispatch} from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import {toggleFavorites} from '../store/actions/meals'

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
    
    const availableMeals=useSelector(state => state.meals.meals);

    const id =navigation.getParam('id');

    const selectedMeal=availableMeals.find(meal=>meal.id===id);

    const dispatch=useDispatch();

    const toggleFavoriteHandler=useCallback(()=>{
        dispatch(toggleFavorites(id));
    },[dispatch,id])

    useEffect(() =>{
        navigation.setParams({toggleFav: toggleFavoriteHandler});
    },[toggleFavoriteHandler])

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
    const title= navigationData.navigation.getParam('title');
    const toggleFavoriteHandler=navigationData.navigation.getParam('toggleFav');

    return{
        headerTitle:title,
        headerRight: ()=>(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName="ios-star"
                    onPress={toggleFavoriteHandler}
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