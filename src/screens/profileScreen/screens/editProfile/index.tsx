import {View, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Button from './../../../../components/button';
import {useAppSelector} from '../../../../app/hook';
import {Formik} from 'formik';
import ErrorText from '../../../../components/errorText';
import apiCall from '../../../../service/api';
import {IUserData, initialValues, registerValidation} from './validation';
import CustomAlert from '../../../../components/alert';
import {getUserData} from '../../../../modules/user';

const EditProfile: React.FC<{}> = () => {
  const userState = useAppSelector(state => state.user.data);
  const updateUserData = async (values: IUserData) => {
    await apiCall(`upload-profile/${userState?._id}`, {
      body: values,
      type: 'patch',
      message: true,
    }).then(async res => {
      if (res?.data.success) {
        await getUserData();
        CustomAlert({title: 'Update Profile', desc: 'User profile updated!'});
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Formik
          initialValues={initialValues}
          validationSchema={registerValidation}
          onSubmit={values => updateUserData(values)}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <View style={styles.formArea}>
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
                  editable={false}
                />
              </View>
              <Button title="Update" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};
export default EditProfile;
