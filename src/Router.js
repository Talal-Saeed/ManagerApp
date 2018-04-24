import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MyItems from './components/MyItems';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key = "root" hideNavBar="ture">
                <Scene key= "auth">
                <Scene key = "login" component= {LoginForm} title = "Login" initial/>
                </Scene>
                <Scene key="Main">
                <Scene key = "myitems" component= {MyItems} title = "My Items"  />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;