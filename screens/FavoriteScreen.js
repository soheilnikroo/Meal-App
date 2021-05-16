import React from 'react';
import {useSelector} from 'react-redux';


import MealList from '../components/MealList';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavoriteScreen=({navigation})=>{

    const favMeals = useSelector(state=>state.meals.favoriteMeals);

    return(
        <MealList listData={favMeals} navigation={navigation} />
    );
};

FavoriteScreen.navigationOptions=(navData)=>{
    return{
        headerTitle:'Your Favorites',
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

export default FavoriteScreen;