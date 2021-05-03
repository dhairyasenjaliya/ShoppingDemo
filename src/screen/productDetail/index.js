import React from 'react';
import {View, TouchableOpacity, Image, Text, Alert} from 'react-native';
import ProductList from '../../components/productList';
import Search from '../../components/search';
import styles from './styles';
import {FAB, Header, Button} from 'react-native-elements';
import {Icon} from 'react-native-elements';

class ProductDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.route.params.ProductDetail,
    };
  }

  render() {
    console.log('product', this.state.product);
    const {name, link, price, discount, description} = this.state.product;

    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={() => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.goBack();
                }}>
                <Icon
                  size={20}
                  name="arrow-left"
                  type="font-awesome-5"
                  color="#FFF"
                />
              </TouchableOpacity>
            );
          }}
          centerComponent={{
            text: name,
            style: {
              color: '#fff',
              justifyContent: 'center',
              alignSelf: 'center',
            },
          }}
        />
        <View>
          <Image
            resizeMode={'contain'}
            source={{uri: link}}
            style={{height: 350, width: '100%'}}
          />
          <View style={{marginHorizontal: 20, marginVertical: 20}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>{name}</Text>
            <Text style={{fontSize: 20}}>{`$ ` + price}</Text>
            <Text style={{marginTop: 20}}>{description}</Text>

            <Button
              // eslint-disable-next-line react-native/no-inline-styles
              buttonStyle={{
                marginHorizontal: 10,
                borderRadius: 100,
                height: 50,
                backgroundColor: '#1C86EE',
                marginTop: 40,
              }}
              title="Buy Now"
              onPress={() => {
                Alert.alert('Product Purchased', '');
                // this.navigateToSignUp();
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default ProductDetailScreen;
