import {
  View,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Logo from '../../components/logo';
import Button from '../../components/button';
import {NavigationProp} from '@react-navigation/native';
import {Formik} from 'formik';
import {IRegisterType} from '../../types/auth';
import {initialValues, registerValidation} from './validation';
import ErrorText from '../../components/errorText';
import apiCall from '../../service/api';
import CustomAlert from '../../components/alert';

interface IRegisterProps {
  navigation: NavigationProp<any, any>;
}

const RegisterScreen: React.FC<IRegisterProps> = props => {
  const {navigation} = props;
  const register = async (values: IRegisterType): Promise<void> => {
    await apiCall('/register', {
      body: values,
      type: 'post',
      message: true,
    }).then(res => {
      if (res?.data.success) {
        CustomAlert({
          title: 'User saved',
          desc: 'register is successfull',
          onPress: () => navigation.goBack(),
        });
      }
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <SafeAreaView>
        <View style={styles.content}>
          <View style={styles.logoArea}>
            <Logo />
          </View>
          <Formik
            initialValues={initialValues}
            validationSchema={registerValidation}
            onSubmit={values => register(values)}>
            {({handleChange, handleBlur, values, errors, handleSubmit}) => (
              <View>
                <TextInput
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholderTextColor="gray"
                  placeholder="Name"
                  style={styles.input}
                />
                {errors.name && <ErrorText text={errors.name} />}
                <TextInput
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                  placeholderTextColor="gray"
                  placeholder="Surname"
                  style={styles.input}
                />
                {errors.lastName && <ErrorText text={errors.lastName} />}
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
                  title="Register"
                  onPress={handleSubmit}
                  style={styles.buttonSpace}
                />
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default RegisterScreen;
