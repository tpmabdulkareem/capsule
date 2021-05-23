import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  CardWrap: {
    height: 220,
    width: 180,
    marginBottom: 15,
    marginRight: 20,
  },
  background: {
    height: 180,
    width: 180,
    borderRadius: 25,
    resizeMode: 'cover',
    backgroundColor: '#ccc',
  },
  label: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  comment: {
    color: 'grey',
    fontSize: 12,
    marginTop: 5,
  },
});

export default styles;
