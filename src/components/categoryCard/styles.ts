import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const childWidth = (width - 48) / 4;

const styles = StyleSheet.create({
  categoryCard: {
    marginTop: 20,
    marginHorizontal: 16 / 4,
    minWidth: childWidth,
    maxWidth: childWidth,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ececec',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  categoryTitle: {
    marginTop: 8,
    fontWeight: '600',
  },
});
export {styles};
// backgroundColor: "#ececec",
