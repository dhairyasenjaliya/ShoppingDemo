import React from 'react';
import {View, TouchableOpacity, TouchableHighlight} from 'react-native';
import ProductList from '../../components/productList';
import Search from '../../components/search';
import styles from './styles';
import {Input, Header, SocialIcon, Icon, Button} from 'react-native-elements';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigateToHome = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{
            text: 'Sign Up',
            style: {
              color: '#fff',
              justifyContent: 'center',
              alignSelf: 'center',
            },
          }}
        />
        <View
          style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
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

          <Input
            placeholder="Confirm Password"
            leftIcon={{type: 'font-awesome', name: 'lock'}}
            style={styles}
            onChangeText={value => this.setState({comment: value})}
            secureTextEntry={true}
          />

          <Button
            buttonStyle={{
              marginHorizontal: 10,
              borderRadius: 100,
              height: 50,
              backgroundColor: 'green',
            }}
            title="Sign Up"
            onPress={() => {
              this.navigateToHome();
            }}
          />

          <SocialIcon
            onPress={() => {
              this.navigateToHome();
            }}
            title="Sign Up With Facebook"
            button
            type="facebook"
            style={{
              marginTop: 100,
            }}
          />
          <SocialIcon
            onPress={() => {
              this.navigateToHome();
            }}
            title="Sign Up With Instagram"
            button
            type="instagram"
          />
          <SocialIcon
            onPress={() => {
              this.navigateToHome();
            }}
            button
            title="Sign Up With Google"
            type="google"
          />
        </View>
      </View>
    );
  }
}

export default RegisterScreen;
