import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#26bd53',
};

export const styles = StyleSheet.create({
  globalMArgin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  botonLong: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonLongText: {
    color: 'white',
    fontSize: 20,
  },
  avatarContainer: {
    backgroundColor: 'purple',
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 3,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  menuBtn: {
    marginVertical: 10,
  },
  menuText: {
    fontSize: 20,
  },
});
