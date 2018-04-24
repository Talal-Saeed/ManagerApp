import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {EmailChange, PasswordChange, LoginUser} from '../Actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.EmailChange(text);
  }

  OnPasswordChange(text) {
    this.props.PasswordChange(text);
  }

  onButtonPress() {
    const {email, password} = this.props;
    this.props.LoginUser({email, password});
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large"/>;
    }
    return (
      <TouchableOpacity style={styles.btn}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Login</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.screen}>
        <Image style={{width: 200, height: 200}}
               source={require('../Images/Logo.png')}/>
        <Text style={styles.text}>Save Now, Shop Later</Text>
        <TextInput
          style={styles.textField}
          placeholder="email@gmail.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
          placeholderTextColor={'white'}
        />
        <TextInput
          placeholderTextColor={'white'}
          style={styles.textField}
          secureTextEntry
          placeholder="password"
          onChangeText={this.OnPasswordChange.bind(this)}
          value={this.props.password}
        />
        {this.renderError()}

        {this.renderButton()}

      </View>

    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },

  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    backgroundColor: '#465A65',
    alignItems: 'center',
  },
  textField: {
    backgroundColor: '#6A7B83',
    height: 50,
    width: '70%',
    color: 'white',
    paddingLeft: 15,
    borderRadius: 25,
    marginTop: 17,
    fontSize: 17
  },
  text: {
    color: 'white',
    fontSize: 19,
    marginTop: 20,
    marginBottom: 25
  },
  btn: {
    backgroundColor: '#1D313A',
    height: 50,
    width: '70%',
    borderRadius: 25,
    marginTop: 17,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, {EmailChange, PasswordChange, LoginUser})(LoginForm);