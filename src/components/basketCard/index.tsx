/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {DeleteIcon} from '../Icon';
import {deleteProductFromBasket} from '../../modules/basket';
import {IBasketData} from '../../types/basket';

interface IBasketCard {
  name: string;
  price: number;
  image: string;
  item: IBasketData;
}
const BasketCard: React.FC<IBasketCard> = ({name, price, image, item}) => {
  return (
    <View style={styles.area}>
      <Image style={styles.photo} source={{uri: image}} resizeMode="contain" />
      <View style={styles.infoArea}>
        <View style={styles.productNameArea}>
          <Text numberOfLines={1} style={styles.productName}>
            {name}
          </Text>
          <DeleteIcon
            size={25}
            color="red"
            onPress={() => deleteProductFromBasket(item)}
          />
        </View>
        <View style={styles.selectedArea}>
          <View style={styles.selectedColor}></View>
          <Text style={{color: 'gray'}}>Color</Text>
        </View>
        <View style={styles.priceArea}>
          <Text style={{fontWeight: '600', fontSize: 16}}>${price}</Text>
          <View style={styles.countArea}>
            <Text style={{fontSize: 16}}>-</Text>
            <Text style={{fontSize: 16}}>1</Text>
            <Text style={{fontSize: 16}}>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default BasketCard;
