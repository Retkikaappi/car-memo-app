import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';
import { useNavigate } from 'react-router-native';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    alignItems: 'center',
    margin: 'auto',
    borderRadius: 5,
  },
});

const Card = ({ item }) => {
  const nav = useNavigate();
  return (
    <Pressable style={styles.card} onPress={() => nav(`/${item.id}`)}>
      <Text fontWeight='bold' fontSize='subhead'>
        {item.licensePlate}
      </Text>
      {item.pictures.length > 0 ? (
        <Image
          style={{ width: 100, height: 100, borderRadius: 5 }}
          source={{ uri: item.pictures[0] }}
        />
      ) : (
        <Image
          style={{ width: 100, height: 100, borderRadius: 5 }}
          source={require('../../assets/No-Image-Placeholder.svg')}
        />
      )}
    </Pressable>
  );
};

const CarMemos = ({ data }) => {
  const queryClient = useQueryClient();
  queryClient.refetchQueries({ queryKey: ['carMemos'] });
  return (
    <FlatList
      style={{
        top: Constants.statusBarHeight,
        marginTop: 64,
      }}
      data={data}
      numColumns={3}
      renderItem={({ item, separators }) => <Card key={item.id} item={item} />}
    />
  );
};

export default CarMemos;
