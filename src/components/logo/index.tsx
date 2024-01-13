import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import config from './../../config';

const Logo: React.FC = () => {
  return (
    <View style={styles.logo}>
      <Text style={styles.exclusive}>{config.app.title}</Text>
      <Text style={styles.ecommerce}>{config.app.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  exclusive: {
    fontSize: 36,
  },
  ecommerce: {
    fontSize: 13,
  },
});
export default Logo;
