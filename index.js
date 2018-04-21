import React,{Component} from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import LoginForm from './src/components/LoginForm';

import Splash from './src/components/Splash';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'Splash'};  
        setTimeout (()=>{
        this.setState({currentScreen: 'LoginForm'})
        },3000)    
}
 render () {
     const {currentScreen} = this.state
     let mainScreen = currentScreen === 'Splash' ? <Splash/> : <App/>
     return mainScreen

 }
}
AppRegistry.registerComponent('manager', () => Main);
