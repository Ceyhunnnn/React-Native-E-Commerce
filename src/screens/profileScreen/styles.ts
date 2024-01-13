import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'relative',
  },
  profileArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
    margin: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  userName: {
    fontWeight: '700',
    fontSize: 17,
  },
  userPhone: {
    fontSize: 12,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  menuArea: {
    width: '100%',
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
    gap: 10,
  },
  menuLeftArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
export {styles};
