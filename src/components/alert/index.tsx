import {Alert} from 'react-native';

interface ICustomProps {
  title: string;
  desc?: string;
  onPress?: () => void;
}

const CustomAlert = ({title, desc, onPress}: ICustomProps) => {
  return Alert.alert(title, desc, [
    {
      text: 'text',
      onPress: onPress,
    },
  ]);
};
export default CustomAlert;
