import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {
  ButtonDefault,
  Card,
  CardSection,
  EmailInput,
  PasswordInput,
  Spinner
} from '../../components';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      notificationMsg: '',
      errorMsg: '',
      isLoading: false,
      userDoesNotExist: false,
      mode: 'Login', // else 'Signup'
    }
  }

  onLogin() {
    const {mode} = this.state;
    this.setState({errorMsg: '', notificationMsg: '', isLoading: true});
    if (mode === 'Login') {return this.login();}
    else {return this.signup();}
    }

  login() {
    const {email, password} = this.state;
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess())
      .catch(this.onLoginFail.bind(this))
  }

  onLoginSuccess() {
    this.setState({email: '', password: '', isLoading: false})
  }

  onLoginFail(reasonLoginFailed) {
    console.log(reasonLoginFailed);
    if (reasonLoginFailed.code === 'auth/user-not-found') {
      return this.setState({userDoesNotExist: true, isLoading: false, notificationMsg: 'No such user. Would you like to sign up?', mode: 'Signup'});
    } else {
      return this.setState({notificationMsg: '', errorMsg: reasonLoginFailed.message, isLoading: false})
    }
  }

  signup() {
    const {email, password} = this.state;
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.onSignupSuccess())
      .catch(this.onSignupFail.bind(this))
  }

  onSignupSuccess() {
    return this.setState({notificationMsg: '', isLoading: false, userDoesNotExist: false, mode: 'Login'})
  }

  onSignupFail(reasonSignupFailed) {
    console.log(reasonSignupFailed);
    this.setState({notificationMsg: '', errorMsg: reasonSignupFailed.message, isLoading: false})
  }

  onChangeText(input, stateKey) {
    return this.setState({[stateKey]: input, mode: 'Login', notificationMsg: '', errorMsg: ''})
  }

  render() {
    const {
      email,
      password,
      errorMsg,
      notificationMsg,
      isLoading,
      mode
    } = this.state;
    const {errorText, notificationText} = styles;
    return (
      <Card>
        <CardSection>
          <EmailInput
            value={email}
            onChangeText={input => this.onChangeText(input, 'email')} />
        </CardSection>

        <CardSection>
          <PasswordInput
            value={password}
            onChangeText={input => this.onChangeText(input, 'password')} />
        </CardSection>

        {errorMsg
          ? <Text style={errorText}>{errorMsg}</Text>
          : null
}

        {notificationMsg
          ? <Text style={[errorText, notificationText]}>{notificationMsg}</Text>
          : null
}

        <CardSection>
          {isLoading
            ? <Spinner />
            : (<ButtonDefault
                content={mode}
                onPress={this.onLogin.bind(this)}
              />)
}
        </CardSection>

      </Card>
    )
  }
}

const styles = {
  errorText: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'red',
    padding: 5
  },
  notificationText: {
    color: 'orange',
    fontSize: 16,
  }
}

export default LoginForm;
