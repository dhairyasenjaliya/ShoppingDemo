import React from 'react';
import {View, TouchableOpacity, TouchableHighlight} from 'react-native';
import ProductList from '../../components/productList';
import Search from '../../components/search';
import styles from './styles';
import {Input, Header, SocialIcon, Icon, Button} from 'react-native-elements';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigateToHome = () => {
    this.props.navigation.navigate('Home');
  };

  navigateToSignUp = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{
            text: 'Login',
            style: {
              color: '#fff',
              justifyContent: 'center',
              alignSelf: 'center',
            },
          }}
        />
        <View style={{justifyContent: 'center', flex: 1}}>
          <Input
            placeholder="Email"
            leftIcon={{type: 'font-awesome', name: 'user'}}
            style={styles}
            onChangeText={value => this.setState({comment: value})}
          />

          <Input
            placeholder="Password"
            leftIcon={{type: 'font-awesome', name: 'lock'}}
            style={styles}
            onChangeText={value => this.setState({comment: value})}
            secureTextEntry={true}
          />

          <Button
            // eslint-disable-next-line react-native/no-inline-styles
            buttonStyle={{
              marginHorizontal: 10,
              borderRadius: 100,
              height: 50,
              backgroundColor: 'green',
              marginTop: 20,
            }}
            title="Log In"
            onPress={() => {
              this.navigateToHome();
            }}
          />

          <Button
            // eslint-disable-next-line react-native/no-inline-styles
            buttonStyle={{
              marginHorizontal: 10,
              borderRadius: 100,
              height: 50,
              backgroundColor: '#1C86EE',
              marginTop: 40,
            }}
            title="Sign Up"
            onPress={() => {
              this.navigateToSignUp();
            }}
          />
        </View>
      </View>
    );
  }
}

export default LoginScreen;
