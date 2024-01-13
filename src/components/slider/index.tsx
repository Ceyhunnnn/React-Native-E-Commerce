/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
interface ISliderImages {
  img: string;
  id: number;
}

interface ISliderProps {
  imageList: ISliderImages[];
}

const Slider: React.FC<ISliderProps> = props => {
  const {imageList} = props;
  const [activeImg, setActiveImage] = useState(0);
  const onImageChange = (
    nativeEvent: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.nativeEvent.contentOffset.x /
          nativeEvent.nativeEvent.layoutMeasurement.width,
      );
      if (slide !== activeImg) {
        setActiveImage(slide);
      }
    }
  };
  return (
    <View style={styles.sliderArea}>
      <View style={styles.sliderWrap}>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={nativeEvent => onImageChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.sliderWrap}>
          {imageList.map((image, index) => {
            return (
              <Image
                style={styles.sliderWrap}
                source={{
                  uri: image.img,
                }}
                key={image.id}
                resizeMode="stretch"
              />
            );
          })}
        </ScrollView>
        <View style={styles.sliderWrapDot}>
          {imageList.map((e, index) => (
            <Text
              key={e.id}
              style={activeImg === index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};
export default Slider;
const styles = StyleSheet.create({
  sliderArea: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sliderWrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
    marginTop: 5,
  },
  sliderWrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 3,
    color: 'white',
  },
});
