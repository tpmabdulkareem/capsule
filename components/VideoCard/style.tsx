import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    borderRadius: 25,
    marginVertical: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  videoWrap: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  footer: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
    resizeMode: 'cover',
  },
  avatarWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 15,
    color: '#000',
    marginHorizontal: 10,
  },
  icon: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 5,
    marginRight: 10,
    width: '50%',
  },
  location: {
    marginLeft: 5,
    fontSize: 12,
    color: 'grey',
  },
});

export default styles;
