import React from 'react';
import {useSelector} from 'react-redux';


import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen=({navigation})=>{
    const categoryId= navigation.getParam('categoryId');

    const availableMeals=useSelector(state => state.meals.filterMeals);

    const displayMeals=availableMeals.filter(meal=>meal.categoryId.indexOf(categoryId)>=0);

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