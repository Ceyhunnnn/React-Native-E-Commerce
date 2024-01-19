import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  content: {
    display: 'flex',
    width: 'auto',
  },
  logoArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderWidth: 0.5,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: 'gray',
  },
  buttonSpace: {marginTop: 10},
});
export {styles};
