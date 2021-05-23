import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  followWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    justifyContent: 'space-between',
    width: '100%',
  },
  user: {
    paddingHorizontal: 5,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 13,
  },
  message: {
    color: '#000',
    marginRight: 5,
    fontSize: 12,
  },
  duration: {
    color: 'grey',
    marginHorizontal: 5,
    fontSize: 11,
  },
  activeButton: {
    backgroundColor: '#4A95F6',
    paddingHorizontal: 5,
    paddingVertical: 7.5,
    width: 100,
    borderRadius: 5,
  },
  activebtnText: {
    color: '#FFF',
    fontSize: 15,
    textAlign: 'center',
  },
  inActiveButton: {
    backgroundColor: '#FFF',
    paddingHorizontal: 5,
    paddingVertical: 7.5,
    width: 100,
    borderWidth: 0.15,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  inActivebtnText: {
    color: '#000',
    fontSize: 15,
    textAlign: 'center',
  },
});
export default styles;
