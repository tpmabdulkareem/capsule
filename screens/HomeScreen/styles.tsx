import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    height: '100%',
    width: '100%',
  },
  bg: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: '#000',
  },
  h1: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '900',
    marginTop: '15%',
    paddingHorizontal: 25,
  },
  h11: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '800',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    paddingHorizontal: 25,
    marginTop: 15,
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    marginTop: 15,
  },
  searchInput: {
    backgroundColor: '#FFF',
    color: '#000',
    borderColor: 'transparent',
  },
  inputContainer: {
    backgroundColor: '#FFF',
    color: '#000',
    borderColor: 'transparent',
    borderRadius: 25,
  },
});

export default styles;
