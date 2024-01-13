import React from 'react';
import {
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  SafeAreaView,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import {styles} from './styles';
import {images} from '../../assets';
import {PathConstant} from '../../navigation/PathConstant';
import Logo from '../../components/logo';
import {NavigationProp} from '@react-navigation/native';
import Button from '../../components/button';

interface ILoginProps {
  navigation: NavigationProp<any, any>;
}

const LoginScreen: React.FC<ILoginProps> = props => {
  const {navigation} = props;

  const login = (): void => {
    navigation.navigate(PathConstant.HOME_LAYOUT);
  };
  const navigateToRegister = (): void => {
    navigation.navigate(PathConstant.REGISTER);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <SafeAreaView>
        <View style={styles.photoArea}>
          <Image style={styles.photo} source={images.logo} />
        </View>
        <View style={styles.content}>
          <View style={styles.logoArea}>
            <Logo />
          </View>
          <View style={styles.inputArea}>
            <TextInput
              placeholderTextColor="gray"
              placeholder="Email Address"
              style={styles.input}
              keyboardType="email-address"
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="gray"
              style={styles.input}
              secureTextEntry={true}
            />
            <Button title="Log In" onPress={login} />
          </View>
        </View>
        <View style={styles.account}>
          <Text> Don't have an account ?</Text>
          <Pressable onPress={navigateToRegister}>
            <Text style={styles.register}>Register</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;
