import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import React from 'react';
import {images} from '../../assets';
import {HeartIcon} from '../Icon';

const AppBar: React.FC = () => {
  const date: string = new Date().toLocaleString().split(',')[0];
  return (
    <View style={styles.appBarArea}>
      <View style={styles.appBarUser}>
        <Image style={styles.avatar} source={images.avatar} />
        <View style={styles.textArea}>
          <Text style={styles.userName} numberOfLines={1}>
            Ceyhun Gul
          </Text>
          <Text style={styles.date} numberOfLines={1}>
            {date}
          </Text>
        </View>
      </View>
      <View>
        <HeartIcon size={28} color="black" />
      </View>
    </View>
  );
};
export default AppBar;
