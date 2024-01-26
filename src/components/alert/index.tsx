import {Alert} from 'react-native';

interface ICustomProps {
  title: string;
  desc?: string;
  onPress?: () => void;
  isCancel?: boolean;
  onCancelpress?: () => void;
}

const CustomAlert = ({
  title,
  desc,
  onPress,
  isCancel = false,
  onCancelpress,
}: ICustomProps) => {
  const buttonList = [
    {
      text: 'Ok',
      onPress: onPress,
    },
  ];
  if (isCancel) {
    buttonList.unshift({
      text: 'Cancel',
      onPress: onCancelpress,
    });
  }
  return Alert.alert(title, desc, buttonList);
};
export default CustomAlert;
