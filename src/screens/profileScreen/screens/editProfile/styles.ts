import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingBottom: 10,
  },
  formArea: {
    gap: 10,
    marginTop: 15,
  },
  input: {
    height: 40,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ececec',
  },
});
export {styles};
