import { ScrollView, Image, View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Constants from 'expo-constants';
import theme from '../theme';
import { useNavigate, useParams } from 'react-router-native';
import memoService from '../services/memoService';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    margin: 10,
    marginTop: 64,
    marginBottom: 65,
    top: Constants.statusBarHeight,
    alignItems: 'center',
    alignContent: 'center',
  },
  button: {
    margin: 15,
    padding: 15,
    backgroundColor: theme.colors.button,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.colors.buttonB,
  },
  deleteBtn: {
    position: 'absolute',
    top: -65,
    right: -178,
    backgroundColor: 'red',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 5,
    margin: 10,
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
  },
});

const SingleMemo = () => {
  const queryClient = useQueryClient();
  const { memoId } = useParams();
  const nav = useNavigate();
  const mutation = useMutation({
    mutationFn: memoService.deleteOne,
    onSuccess: () => {
      queryClient.refetchQueries(['carMemos']);
      nav('/');
    },
  });

  const item = queryClient
    .getQueryData(['carMemos'])
    .find((e) => e.id === memoId);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Ei löydetty.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View>
          <Pressable
            onPress={() => mutation.mutate(memoId)}
            style={styles.deleteBtn}
          >
            <Text>Delete</Text>
          </Pressable>
        </View>
        <Text fontSize='heading' fontWeight='bold'>
          {item.licensePlate}
        </Text>
        {item.make && (
          <Text fontSize='heading' fontWeight='bold'>
            {item.make} {item.model && item.model}
          </Text>
        )}
        <View style={{ margin: 30 }}>
          <Text fontSize='subHead'>{item.description}</Text>
        </View>
        {item.pictures.length > 0 && (
          <View>
            {item.pictures.map((e, index) => (
              <Image
                key={`picture_${index}`}
                source={{ uri: e }}
                style={{ width: 210, height: 210, margin: 10, borderRadius: 5 }}
              />
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default SingleMemo;
