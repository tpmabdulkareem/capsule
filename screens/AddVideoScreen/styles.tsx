import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: '100%',
    resizeMode: 'cover',
    width: '100%',
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginTop: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 35,
    elevation: 0.25,
  },
  btnText: {
    fontSize: 18,
    padding: 5,
    textAlign: 'center',
    color: '#000',
    marginLeft: 15,
    fontWeight: 'bold',
  },
});

export default styles;
