import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  sliderArea: {
    marginTop: 0,
  },
  productArea: {
    flex: 1,
    paddingVertical: 5,
    marginHorizontal: 10,
    position: 'relative',
  },
  productName: {
    fontSize: 18,
    fontWeight: '700',
  },
  propsTitle: {
    fontWeight: '700',
    fontSize: 13,
    marginTop: 10,
  },
  desc: {
    fontSize: 13,
    marginTop: 8,
    fontWeight: '300',
  },
  colorArea: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    marginTop: 10,
  },
  colorBall: {
    width: 20,
    height: 20,
    borderRadius: 50,
    opacity: 0.5,
  },
  quantityArea: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  quantityText: {
    fontWeight: '700',
  },
  countArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eaeaea',
    gap: 25,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    height: 35,
    width: 120,
    borderRadius: 30,
  },
  divider: {
    height: 2,
    width: '100%',
    backgroundColor: '#eaeaea',
    marginVertical: 10,
  },
  countText: {
    fontWeight: '600',
  },
  priceContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    height: 100,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    borderTopWidth: 2,
    borderTopColor: '#eaeaea',
  },
  button: {gap: 0, marginHorizontal: 0},
  totalText: {
    fontSize: 13,
    color: 'gray',
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
  },
  priceTextArea: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },

  productPrice: {
    fontWeight: '600',
    color: 'gray',
    fontSize: 18,
  },
  discount: {
    color: 'red',
    fontSize: 18,
    textDecorationLine: 'line-through',
  },
});
export {styles};
