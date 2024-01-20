import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
interface IBadgeIcon {
  icon: React.JSX.Element;
  count: number;
}

const BadgeIcon: React.FC<IBadgeIcon> = ({icon, count}) => {
  return (
    <View style={styles.iconArea}>
      {icon}
      {count > 0 && (
        <View style={styles.count}>
          <Text style={styles.text}>{count}</Text>
        </View>
      )}
    </View>
  );
};
export default BadgeIcon;
const styles = StyleSheet.create({
  iconArea: {
    position: 'relative',
  },
  count: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
});
