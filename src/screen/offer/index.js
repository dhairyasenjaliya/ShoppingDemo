import React from 'react';
import {View, TouchableOpacity, TouchableHighlight} from 'react-native';
import ProductList from '../../components/productList';
import Search from '../../components/search';
import styles from './styles';
import {FAB, Header, SearchBar} from 'react-native-elements';
import {Icon} from 'react-native-elements';

class OfferScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          link:
            'https://rukminim1.flixcart.com/image/150/150/jzd0qkw0/mobile/x/n/w/realme-5-rmx1911-original-imafje89tgyzdj7c.jpeg?q=70',
          name: 'Realmex5',
          price: '35000',
          discount: '5%',
          description:
            'The POCO M3 is a stylish personal device that offers immersive visuals, seamless performance, and long battery life for uninterrupted functioning. This smartphone features a Premium Design to let you flaunt style, 6 GB LPDDR4X RAM for smooth performance, and an FHD+ Display for clear and detailed visuals.',
        },
        {
          link:
            'https://rukminim1.flixcart.com/image/150/150/jxz0brk0/mobile/m/6/z/redmi-k20-pro-na-original-imafgb4yzvmbfewa.jpeg?q=70',
          name: 'K20 pro',
          price: '35000',
          discount: '5%',
          description:
            'The POCO M3 is a stylish personal device that offers immersive visuals, seamless performance, and long battery life for uninterrupted functioning. This smartphone features a Premium Design to let you flaunt style, 6 GB LPDDR4X RAM for smooth performance, and an FHD+ Display for clear and detailed visuals.',
        },
        {
          link:
            'https://rukminim1.flixcart.com/image/150/150/jvjugsw0/mobile-phone-lens/f/e/f/4-in-1-lens-198-fish-eye-0-63x-super-wide-angle-15x-macro-2x-original-imafgehgfwhqkpbr.jpeg?q=70',
          name: 'Lenses',
          price: '35000',
          discount: '5%',
          description: 'Product Detail',
        },
        {
          link:
            'https://rukminim1.flixcart.com/image/150/150/k0r15e80/rice-light/j/w/f/1-hdrl-new-strip-yellow-01-home-delight-original-imafkgy6z3ybrwat.jpeg?q=70',
          name: 'Rice Light',
          price: '35000',
          discount: '5%',
          description: 'Product Detail',
        },
        {
          link:
            'https://rukminim1.flixcart.com/image/150/150/jnm2efk0/sari/e/g/s/free-725s5-saara-original-imafa4pmg634uhd4.jpeg?q=70',
          name: 'Saree',
          price: '2500',
          discount: '5%',
          description: 'Product Detail',
        },
        {
          link:
            'https://rukminim1.flixcart.com/flap/150/150/image/51b689f536463412.jpg?q=70',
          name: 'Shoes',
          price: '2500',
          discount: '5%',
          description: 'Product Detail',
        },
        {
          link:
            'https://rukminim1.flixcart.com/image/150/150/j7qi9ow0/sunglass/h/f/t/onesize-m155gr1-fastrack-original-imaexwzhgpaw5zqu.jpeg?q=70',
          name: 'Sunglasses',
          price: '2500',
          discount: '5%',
          description: 'Product Detail',
        },
        {
          link:
            'https://rukminim1.flixcart.com/image/150/150/j63x7rk0/memory-card/microsdhc/4/z/g/sandisk-sdsquar-032g-gn6ma-original-imaewngzfeudzgvm.jpeg?q=70',
          name: 'Home ',
          price: '2500',
          discount: '5%',
          description: 'Product Detail',
        },
        {
          link:
            'https://rukminim1.flixcart.com/image/150/150/jyj0how0/collapsible-wardrobe/g/s/g/pp-fksbcwma5-flipkart-smartbuy-maroon-original-imafgzswhgb6zxtx.jpeg?q=70',
          name: 'Bags',
          price: '2500',
          discount: '5%',
          description: 'Product Detail',
        },
        {
          link:
            'https://rukminim1.flixcart.com/image/150/150/jyj0how0/headphone/w/z/t/mi-zbw4475in-original-imafgr2cnz3ugqd3.jpeg?q=70',
          name: 'Headfone',
          price: '2500',
          discount: '5%',
          description: 'Product Detail',
        },
      ],
    };
  }

  render() {
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
            text: 'Offer',
            style: {
              color: '#fff',
              justifyContent: 'center',
              alignSelf: 'center',
            },
          }}
          // rightComponent={{icon: 'home', color: '#fff'}}
        />
        <SearchBar
          placeholder="Search Product..."
          onChangeText={this.updateSearch}
          value={search => {}}
          // style={{backgroundColor: '#FFF'}}
        />
        <ProductList
          navigation={this.props.navigation}
          content={this.state.productList}
        />
      </View>
    );
  }
}

export default OfferScreen;
