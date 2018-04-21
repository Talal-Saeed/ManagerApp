import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import {Icon, Button, Container, Header, Content, Left} from 'native-base';

/*
const MyApp = DrawerNavigator ({
    MyItems : {
        screen: MyItems 
    },
    Settings: {
        screen: SettingsScreen
    }
    }
})
*/
class Settings extends Component{
    render (){
        return(
            <Container>
                <Content>
                <Text>
                    Settings
                </Text>
                </Content>
            </Container>
        
        );

    }
}

export default Settings;