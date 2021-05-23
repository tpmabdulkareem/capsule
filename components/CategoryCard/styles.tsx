import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  categoryCard: {
    height: 180,
    width: 150,
    borderRadius: 50,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    marginRight: 20,
  },
  background: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
    resizeMode: 'cover',
    position: 'absolute',
  },
  label: {
    color: '#FFF',
    fontStyle: 'italic',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
  comment: {
    color: '#FFF',
    fontSize: 12,
  },
});

export default styles;
