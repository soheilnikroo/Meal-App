import {createAppContainer} from 'react-navigation';
import React from 'react';
import { Platform,Text } from 'react-native'
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import FiltersScreen from '../screens/FlitersScreen';

import Colors from '../constant/Colors';


const defaultStackNavOption=    {
    // initialRouteName:'Categories',
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTitleStyle:{
            fontFamily:'open-sans-bold'
        },
        headerBackTitleStyle:{
            fontFamily:'open-sans'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}  


const MealsNavigator =createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeal:CategoryMealScreen,
        MealDetail:MealDetailsScreen,
    },
    {
        defaultNavigationOptions:defaultStackNavOption
    }
);

const favoriteNavigator=createStackNavigator({
        Favorite:FavoriteScreen,
        MealDetail:MealDetailsScreen
    },
    {
        defaultNavigationOptions:defaultStackNavOption
    }
);


const tabScreenConfig=    {
    Meals:
        {
            screen:MealsNavigator,
            navigationOptions:{
                tabBarIcon:(tabInfo)=>{
                    return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
                },
                tabBarLabel:"Meals",
                tabBarColor:Colors.primaryColor,
                tabBarLabel: Platform.OS ==='android' ? <Text style={{fontFamily:'open-sans-bold'}} >Meals</Text> : 'Meals'
            }
        },
    Favorite:
        {
            screen:favoriteNavigator,
            navigationOptions:{
                tabBarIcon:(tabInfo)=>{
                    return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
                },
                tabBarLabel:"Favorite",
                tabBarColor:Colors.accentColor
            }
        }
}

const MealsFavTabNavigator=Platform.OS === 'android' ? 
    createMaterialBottomTabNavigator(tabScreenConfig,{
        activeTintColor: 'white',
        shifting: true,
        barStyle:{
            backgroundColor:Colors.primaryColor
        },
        navigationOptions:{
            drawerLabel:'Meals',
        }
    }) : 
    createBottomTabNavigator(tabScreenConfig,{
        tabBarOptions:{
            labelStyle:{
                fontFamily:'open-sans-bold'
            },
            activeTintColor:Colors.accentColor
        },
        navigationOptions:{
            drawerLabel:'Meals',
        }
    });

const FilterNavigator=createStackNavigator({
        Filters:FiltersScreen
    },
    {
        navigationOptions:{
            drawerLabel:'Filter'
        },
        defaultNavigationOptions:defaultStackNavOption
    }
);

const MainNavigator=createDrawerNavigator({
        MealsFav:MealsFavTabNavigator,
        Filters:FilterNavigator
    },
    {
        contentOptions:{
            activeTintColor:Colors.accentColor,
            labelStyle:{
                fontFamily:'open-sans-bold',
                paddingTop:20,
                textAlign:'center',
                alignSelf:'center'
            }
        }
    }
);

export default createAppContainer(MainNavigator);