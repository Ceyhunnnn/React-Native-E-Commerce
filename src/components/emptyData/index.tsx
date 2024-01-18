import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../../assets';

interface IEmptyDataProps {
  title: string;
  desc: string;
}

const EmptyData: React.FC<IEmptyDataProps> = ({title, desc}) => {
  return (
    <View style={styles.content}>
      <Image source={images.empty} style={styles.emptyImage} />
      <Text style={styles.textBold}>{title}</Text>
      <Text style={styles.textLigth}>{desc}</Text>
    </View>
  );
};

export default EmptyData;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  emptyImage: {width: '100%', height: '50%'},
  textBold: {
    fontWeight: '600',
    marginBottom: 10,
    fontSize: 18,
  },
  textLigth: {
    fontWeight: '300',
  },
});
