/* eslint-disable react-native/no-inline-styles */
import {Text} from 'react-native';
import React from 'react';

interface ITitleProps {
  title: string;
}
const Title: React.FC<ITitleProps> = props => {
  const {title} = props;
  return (
    <Text style={{fontWeight: '600', marginTop: 30, fontSize: 17}}>
      {title}
    </Text>
  );
};
export default Title;
