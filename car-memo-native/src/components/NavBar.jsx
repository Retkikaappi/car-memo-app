import { StyleSheet, View } from 'react-native';
import { Link, useLocation } from 'react-router-native';
import Text from './Text';
import theme from '../theme';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  link: {
    margin: 4,
    backgroundColor: theme.colors.button,
    borderColor: theme.colors.buttonB,
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const NavBar = () => {
  const location = useLocation();
  return (
    <View
      style={{
        left: 10,
        marginTop: Constants.statusBarHeight - 10,
        position: 'absolute',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Link style={styles.link} to='/'>
        <Text>Koti</Text>
      </Link>
      <Link
        style={
          location.pathname === '/createMemo'
            ? { display: 'none' }
            : { display: '' } && { ...styles.link }
        }
        to='/createMemo'
      >
        <Text>Uusi</Text>
      </Link>
    </View>
  );
};

export default NavBar;
