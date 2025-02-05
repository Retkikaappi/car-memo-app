import { FlatList, Image, StyleSheet, View } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    alignItems: 'center',
    margin: 'auto',
    backgroundColor: theme.colors.foreground,
  },
});

const Card = ({ item }) => {
  return (
    <View style={styles.card}>
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
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg',
          }}
        />
      )}
    </View>
  );
};

const CarMemos = ({ data }) => {
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
