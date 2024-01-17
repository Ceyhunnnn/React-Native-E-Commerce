import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../../../../assets';

const NotOrderComponent: React.FC<{}> = () => {
  return (
    <View style={styles.content}>
      <Image source={images.empty} style={styles.emptyImage} />
      <Text style={styles.textBold}>You don't have an order yet</Text>
      <Text style={styles.textLigth}>
        You don't have an ongoing orders at this tme
      </Text>
    </View>
  );
};

export default NotOrderComponent;

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
