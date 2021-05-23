import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
    paddingLeft: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingRight: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  desc: {
    fontSize: 12,
    color: 'grey',
  },
  viewAll: {
    fontSize: 12,
    fontWeight: '800',
    color: '#000',
  },
});

export default styles;
