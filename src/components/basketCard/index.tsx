/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {DeleteIcon} from '../Icon';
import {deleteProductFromBasket} from '../../modules/basket';
import {IBasketData} from '../../types/basket';
import {useIsFocused} from '@react-navigation/native';

interface IBasketCard {
  name: string;
  price: number;
  image: string;
  item: IBasketData;
  productCountCalculate: (count: number, basketItem: IBasketData) => void;
}
const BasketCard: React.FC<IBasketCard> = ({
  name,
  image,
  price,
  item,
  productCountCalculate,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  let discountTotal = price - (price * item?.discount) / 100;
  const isFocused = useIsFocused();
  useEffect(() => {
    setQuantity(1);
  }, [isFocused]);
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
          <View>
            <View style={styles.priceTextArea}>
              <Text
                numberOfLines={1}
                style={
                  item.discount > 0 ? styles.discount : styles.productPrice
                }>
                $ {item.price}
              </Text>
              {item.discount > 0 && (
                <Text numberOfLines={1} style={styles.productPrice}>
                  $ {discountTotal.toFixed(2)}
                </Text>
              )}
            </View>
          </View>
          <View style={styles.countArea}>
            <Pressable
              onPress={() => {
                setQuantity(prevState => {
                  if (prevState > 1) {
                    productCountCalculate(prevState - 1, item);
                    return prevState - 1;
                  }
                  productCountCalculate(prevState, item);
                  return prevState;
                });
              }}>
              <Text style={{fontSize: 16}}>-</Text>
            </Pressable>
            <Text style={{fontSize: 16}}>{quantity}</Text>
            <Pressable
              onPress={() => {
                setQuantity(prevState => {
                  productCountCalculate(prevState + 1, item);
                  return prevState + 1;
                });
              }}>
              <Text style={{fontSize: 16}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
export default BasketCard;
