import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  headWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 25,
    paddingTop: 45,
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 0.15,
    elevation: 1,
    backgroundColor: '#FFF',
  },
  centerWrap: {
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
  },
  contents: {
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  count1: {
    fontWeight: 'bold',
    color: '#000',
  },
  count2: {
    color: '#000',
  },
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
  btn: {
    backgroundColor: '#000',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
  },
  btnText: {
    color: '#FFF',
    paddingHorizontal: 50,
  },
});

export default styles;
