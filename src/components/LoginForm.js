import React, {Component} from 'react';
import {View,  Text, Image} from 'react-native'; 
import {Card, CardSection, Input, Button,Spinner} from './common';
import {connect} from 'react-redux';
import {EmailChange,PasswordChange,LoginUser} from '../Actions';

class LoginForm extends Component {
    onEmailChange(text){
            this.props.EmailChange(text);
    }
    OnPasswordChange(text){
            this.props.PasswordChange(text);
    }
    onButtonPress(){
        const {email,password} = this.props;
        this.props.LoginUser({email,password});
    }
    renderError (){
        if(this.props.error){
            return(
                <View style={{backgroundColor:'white'}}>
                    <Text style={styles.errorTextStyle}>
                    {this.props.error}
                    </Text>
                </View>
            )
        }
    }
    renderButton (){
        if(this.props.loading){
            return <Spinner size="large" />;
        }
        return (
            <Button onPress= {this.onButtonPress.bind(this)}>
            Sign In
        </Button>    

        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                <Image  style={{width:200, height: 70}}
          			source={require('../Images/Logo.png')}/>
                </CardSection>    
                <CardSection>
                    <Input
                    label= "Email:"
                    placeholder= "email@gmail.com"
                    onChangeText= {this.onEmailChange.bind(this)}
                    value= {this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                    secureTextEntry
                    label= "Password:"
                    placeholder= "password"
                    onChangeText= {this.OnPasswordChange.bind(this)}
                    value= {this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
            
        );
    }
}

const styles = {
    errorTextStyle:{
    fontSize:20,
    alignSelf: 'center',
    color: 'red'
    },

    imageStyle: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center',
    
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password:  state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, {EmailChange, PasswordChange, LoginUser})(LoginForm);