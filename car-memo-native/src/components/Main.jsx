import { View } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { Routes, Route } from 'react-router-native';
import NavBar from './NavBar';
import CarMemos from './CarMemos';
import CreateMemo from './CreateMemo';
import { useQuery } from '@tanstack/react-query';
import memoService from '../services/memoService';
const Main = () => {
  const { data } = useQuery({
    queryKey: ['carMemos'],
    queryFn: memoService.getAll,
  });
  return (
    <View style={{ backgroundColor: theme.colors.background, flexGrow: 1 }}>
      <NavBar />
      <Routes>
        <Route path='/' element={<CarMemos data={data} />} />
        <Route path='/createMemo' element={<CreateMemo />} />
      </Routes>
    </View>
  );
};

export default Main;
