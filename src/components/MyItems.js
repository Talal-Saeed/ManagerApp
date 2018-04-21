import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import {Icon, Button, Container, Header, Content, Left} from 'native-base';
import Settings from './Settings';


/*const MyApp = DrawerNavigator ({
    MyItems : {
        screen: MyItems 
    },
    Settings: {
        screen: Settings
    }
    }
)
*/
class MyItems extends Component{
    render (){
        return(
            <View>
                <Text>
                    My Items
                </Text>
            </View>
        );

    }
}

export default MyItems;