import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    paddingBottom: 80,
  },
  checkoutArea: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#ececec',
  },
  totalText: {
    fontSize: 14,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
  },
  button: {gap: 5, marginHorizontal: 0},
});
export {styles};
