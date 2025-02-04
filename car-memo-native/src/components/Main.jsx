import { View } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { Routes, Route } from 'react-router-native';
import NavBar from './NavBar';
const Main = () => {
  return (
    <View style={{ backgroundColor: theme.colors.background, flexGrow: 1 }}>
      <Text>Test</Text>
      <NavBar />
      <Routes></Routes>
    </View>
  );
};

export default Main;
