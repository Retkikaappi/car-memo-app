import { View } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
const NavBar = () => {
  return (
    <View>
      <Link>
        <Text>To somewhere</Text>
      </Link>
    </View>
  );
};

export default NavBar;
