import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: '100%',
    width: '100%',
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
  },
  brief: {
    color: '#FFF',
    fontSize: 12,
    marginTop: 20,
    marginBottom: 5,
  },
  fbBtn: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#3B5797',
    marginTop: 15,
    flexDirection: 'row',
  },
  fbText: {
    color: '#FFF',
    fontSize: 15,
    paddingHorizontal: 10,
    fontWeight: '600',
  },
  socialBtn: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'yellow',
    marginTop: 15,
  },
  socialText: {
    color: '#000',
    fontSize: 16,
    paddingHorizontal: 10,
    fontWeight: '600',
  },
});

export default styles;
