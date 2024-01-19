/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

interface ITextProp {
  text: string;
}
const ErrorText: React.FC<ITextProp> = ({text}) => {
  return <Text style={{color: 'red', textAlign: 'center'}}>{text}</Text>;
};

export default ErrorText;
