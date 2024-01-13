import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  area: {
    display: 'flex',
    flexDirection: 'row',
    width: 'auto',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ececec',
    borderRadius: 10,
    paddingVertical: 10,
  },
  photo: {
    width: '30%',
    height: '100%',
  },
  infoArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 100,
    padding: 5,
    width: '65%',
  },
  productNameArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontWeight: '600',
    fontSize: 17,
    width: '85%',
  },
  selectedArea: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  selectedColor: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: 'gray',
  },
  priceArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countArea: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    backgroundColor: '#eaeaea',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
export {styles};
