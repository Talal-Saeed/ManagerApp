import React from 'react';
import {View} from 'react-native';

//creating
const CardSection =(props)=>{

    return(
        <View style={styles.containerStyle}>
        {props.children}
        </View>
    );
};

//Styling
const styles={
    containerStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#FFF',
        justifyContent:'center',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    }
};

export { CardSection};