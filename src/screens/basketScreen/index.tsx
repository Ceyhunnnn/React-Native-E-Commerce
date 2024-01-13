import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
// import BasketCard from './../../components/basketCard';
// import Button from './../../components/button';
// import {Ionicons} from '@expo/vector-icons';

const BasketScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <ScrollView>
        <BasketCard />
        <BasketCard />
      </ScrollView>
      <View style={styles.checkoutArea}>
        <View>
          <Text style={{fontSize: 14}}>Total Price</Text>
          <Text style={{fontSize: 20, fontWeight: '700'}}>$1,970.00</Text>
        </View>
        <Button
          title="Checkout"
          style={{gap: 5, marginHorizontal: 0}}
          iconRight={<Ionicons name="arrow-forward" size={20} color="white" />}
        />
      </View> */}
    </View>
  );
};
export default BasketScreen;
