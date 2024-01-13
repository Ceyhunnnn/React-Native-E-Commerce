/* eslint-disable react/no-unstable-nested-components */
import {View, Text, SafeAreaView, FlatList, Pressable} from 'react-native';
import React from 'react';
// import {imageList} from '../../utils/imageList';
import {styles} from './styles';
// import {Entypo} from '@expo/vector-icons';
// import {Ionicons} from '@expo/vector-icons';
// import {SimpleLineIcons} from '@expo/vector-icons';
// import {MaterialIcons} from '@expo/vector-icons';
import PathConstant from './../../navigation/PathConstant';
import {NavigationProp} from '@react-navigation/native';

interface IProfileProps {
  navigation: NavigationProp<any, any>;
}
interface IProfileMenuProps {
  title: string;
  arrow: boolean;
  icon: JSX.Element;
  textColor: string;
  event: () => void;
}
const ProfileScreen: React.FC<IProfileProps> = props => {
  const {navigation} = props;
  const menuItemList = [
    {
      id: 0,
      title: 'Edit Profile',
      arrow: true,
      icon: <Ionicons name="person-outline" size={18} color="black" />,
      textColor: 'black',
      event: () => navigation.navigate(PathConstant.EDIT_PROFILE),
    },
    {
      id: 1,
      title: 'Logout',
      arrow: false,
      icon: <MaterialIcons name="logout" size={18} color="red" />,
      textColor: 'red',
      event: () => null,
    },
  ];
  const ProfileMenuItems: React.FC<IProfileMenuProps> = props => {
    const {title, arrow, icon, textColor, event} = props;
    return (
      <Pressable onPress={event}>
        {/* <View style={styles.menuItem}>
          <View style={styles.menuLeftArea}>
            {icon}
            <Text style={{fontSize: 15, color: textColor}}>{title}</Text>
          </View>
          {arrow && (
            <SimpleLineIcons name="arrow-right" size={18} color="black" />
          )}
        </View> */}
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileArea}>
        {/* <View>
          <Image source={imageList.avatar} style={styles.avatar} />
          <Entypo
            name="edit"
            size={20}
            color="#232323"
            style={styles.editIcon}
          />
        </View> */}
        <Text numberOfLines={1} style={styles.userName}>
          Andrew Ainsley
        </Text>
        <Text style={styles.userPhone}>+90 555 555 5555</Text>
      </View>
      <FlatList
        style={styles.menuArea}
        data={menuItemList}
        renderItem={({item}) => (
          <ProfileMenuItems
            title={item.title}
            arrow={item.arrow}
            icon={item.icon}
            textColor={item.textColor}
            event={item.event}
          />
        )}
        // keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;