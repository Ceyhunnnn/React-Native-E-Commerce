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
import Logo from '../../components/logo';
import Button from '../../components/button';
import {StackNavigationProp} from '@react-navigation/stack';
import {Formik} from 'formik';
import {initialValues, loginValidation} from './validate';
import ErrorText from '../../components/errorText';
import apiCall from '../../service/api';
import {ILoginType} from '../../types/auth';
import TokenService from '../../service/tokenService';
import axiosClient from '../../service/axios';

interface ILoginProps {
  navigation: StackNavigationProp<any, any>;
}

const LoginScreen: React.FC<ILoginProps> = props => {
  const {navigation} = props;
  const login = async (values: ILoginType): Promise<void> => {
    await apiCall('login', {body: values, type: 'post', message: true}).then(
      async res => {
        if (res?.data.success) {
          await TokenService.setToken(res.data.token);
          axiosClient.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
          navigation.navigate('homelayout');
        }
      },
    );
  };
  const navigateToRegister = (): void => {
    navigation.navigate('register');
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
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidation}
            onSubmit={values => login(values)}>
            {({handleChange, handleBlur, values, errors, handleSubmit}) => (
              <View>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholderTextColor="gray"
                  placeholder="Email Address"
                  style={styles.input}
                  keyboardType="email-address"
                />
                {errors.email && <ErrorText text={errors.email} />}
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder="Password"
                  placeholderTextColor="gray"
                  style={styles.input}
                  secureTextEntry={true}
                />
                {errors.password && <ErrorText text={errors.password} />}
                <Button
                  title="Log In"
                  onPress={handleSubmit}
                  style={styles.buttonSpace}
                />
              </View>
            )}
          </Formik>
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
