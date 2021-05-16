import React from 'react';
import { TouchableOpacity,Text,StyleSheet,View,Platform,TouchableNativeFeedback } from 'react-native';

const CategoryGridTile=({title,onSelected,color})=>{

    let TouchableCmp=TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >=21 ){
        TouchableCmp=TouchableNativeFeedback;
    }

    return(
        <View style={styles.gridItem}>
            <TouchableCmp  style={{flex:1}} onPress={onSelected}>
                <View style={{...{backgroundColor:color},...styles.container}}>
                    <Text numberOfLines={2} style={styles.title}>
                        {title}
                    </Text>
                </View>
            </TouchableCmp>
        </View>
    );
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
        height:150,
        overflow:Platform.OS === 'android' ? 'hidden' : 'vsible',
        elevation:5,

    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        padding:10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        textAlign: 'right'
    }

});

export default CategoryGridTile;