import React,{useState,useEffect,useCallback} from 'react';
import { View,Text,StyleSheet,Switch } from 'react-native';

import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constant/Colors';


const FilterSwitch=({label,onChange,state})=>{
    return (
        <View style={styles.filterContainer}>
            <Text>
                {label}
            </Text>
            <Switch 
                value={state} 
                onValueChange={onChange} 
                trackColor={{true:Colors.primaryColor}}
                thumbColor={Colors.accentColor}
            />
        </View>
    );
};

const FiltersScreen=({navigation})=>{

    const [isGlutenFree,setIsGlutenFree]=useState(false);
    const [isLactoseFree,setIsLactoseFree]=useState(false);
    const [isVegan,setIsVegan]=useState(false);
    const [isVegetarian,setIsVegetarian]=useState(false);

    const saveFilters=useCallback(()=>{
        const appliedFilters={
            glutenFree:isGlutenFree,
            lactoseFree:isLactoseFree,
            vegan:isVegan,
            Vegetarian:isVegetarian
        };
    },[isGlutenFree,isLactoseFree,isVegan,isVegan]);

    useEffect(()=>{
        navigation.setParams({save:saveFilters});
    },[saveFilters]);

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>
                Available Filters
            </Text>
            <FilterSwitch 
                label="Gluten Free" 
                state={isGlutenFree} 
                onChange={newValue=>setIsGlutenFree(newValue)}
            />
            <FilterSwitch 
                label="Lactose Free" 
                state={isLactoseFree} 
                onChange={newValue=>setIsLactoseFree(newValue)}
            />
            <FilterSwitch 
                label="Vegan" 
                state={isVegan} 
                onChange={newValue=>setIsVegan(newValue)}
            />
            <FilterSwitch 
                label="Vegetarian" 
                state={isVegetarian} 
                onChange={newValue=>setIsVegetarian(newValue)}
            />
        </View>
    );
};

FiltersScreen.navigationOptions=navData=>{
    return{
        headerTitle:'Filter',
        headerLeft:()=>{
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName="ios-menu" onPress={()=>{
                        navData.navigation.toggleDrawer();
                    }} />
                </HeaderButtons>
            )
        },
        headerRight:()=>{
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName="ios-save" onPress={
                        navData.navigation.getParam('save')
                    } />
                </HeaderButtons>
            )
        },
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },

    filterContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width:'80%',
        alignItems: 'center',
        marginVertical: 20
    },

    title:{
        fontFamily:'open-sans-bold',
        fontSize:30,
        margin:20,
        textAlign:'center',
    }

});

export default FiltersScreen;