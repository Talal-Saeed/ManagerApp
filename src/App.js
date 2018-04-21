import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount(){
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyBvn_YiiNe-l-qWeG-7hm387S5ADhJ1L4c',
            authDomain: 'manager-33647.firebaseapp.com',
            databaseURL: 'https://manager-33647.firebaseio.com',
            projectId: 'manager-33647',
            storageBucket: 'manager-33647.appspot.com',
            messagingSenderId: '912140459981'
          };
          firebase.initializeApp(config);
  };
 
    render (){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <Router />
            </Provider>
        
        );

    }
}

export default App;