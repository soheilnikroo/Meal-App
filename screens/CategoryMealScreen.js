import React from 'react';


import {CATEGORIES,MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList'

const CategoryMealScreen=({navigation})=>{
    const categoryId= navigation.getParam('categoryId');

    const displayMeals=MEALS.filter(meal=>meal.categoryId.indexOf(categoryId)>=0);

    return(
        <MealList listData={displayMeals} navigation={navigation} />
    );
};

CategoryMealScreen.navigationOptions=navigationData=>{

    const categoryId= navigationData.navigation.getParam('categoryId');

    const selectedCategory=CATEGORIES.find(category=>category.id === categoryId);

    return{
        headerTitle:selectedCategory.title,    
    };
};

export default CategoryMealScreen;