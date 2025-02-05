import {
  Pressable,
  StyleSheet,
  Switch,
  View,
  TextInput,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import Text from './Text';
import { useState } from 'react';
import theme from '../theme';
import { useFormik } from 'formik';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    marginTop: 64,
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
  input: {
    padding: 5,
    margin: 10,
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
  },
});

const MemoForm = ({ images, setImages }) => {
  const [additional, setAdditional] = useState(false);

  const formik = useFormik({
    initialValues: {
      licensePlate: '',
      make: '',
      model: '',
      description: '',
    },
    onSubmit: (e) => {
      console.log(e);
      console.log(images);
    },
  });

  const handleImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Käytöstä kieltäydytty');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImages(images.concat(result.assets[0].uri));
    }
  };
  console.log(images.length);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {images.length > 0 && (
        <View>
          {images.map((e, index) => (
            <Image
              key={`picture_${index}`}
              source={{ uri: e }}
              style={{ width: 210, height: 210, margin: 10, borderRadius: 5 }}
            />
          ))}
        </View>
      )}

      <Text style={{ color: 'white', alignSelf: 'center' }}>
        Lisää merkki & malli?
      </Text>
      <Switch
        style={{
          alignSelf: 'center',
          marginBottom: 20,
          marginTop: 10,
        }}
        trackColor={{
          false: theme.colors.foreground,
          true: theme.colors.button,
        }}
        value={additional}
        onChange={() => setAdditional(!additional)}
      />

      {additional && (
        <>
          <TextInput
            style={styles.input}
            placeholder='Merkki'
            placeholderTextColor={theme.colors.textSecondary}
            value={formik.values.make}
            onChangeText={formik.handleChange('make')}
          />
          <TextInput
            style={styles.input}
            placeholder='Malli'
            placeholderTextColor={theme.colors.textSecondary}
            value={formik.values.model}
            onChangeText={formik.handleChange('model')}
          />
        </>
      )}
      <TextInput
        style={styles.input}
        placeholder='ABC-123'
        placeholderTextColor={theme.colors.textSecondary}
        value={formik.values.licensePlate}
        onChangeText={formik.handleChange('licensePlate')}
      />
      <TextInput
        style={{ ...styles.input, height: 100, width: 210 }}
        multiline
        placeholder='Muistiinpano'
        placeholderTextColor={theme.colors.textSecondary}
        value={formik.values.description}
        onChangeText={formik.handleChange('description')}
      />
      <Pressable style={styles.button} onPress={handleImage}>
        <Text>Avaa kuvat</Text>
      </Pressable>
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text>Lisää</Text>
      </Pressable>
    </ScrollView>
  );
};

const CreateMemo = () => {
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState(true);

  const handleCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Käytöstä kieltäydytty.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled) {
      setImages(images.concat(result.assets[0].uri));
      setModal(false);
    }
  };

  return (
    <View style={styles.container}>
      {modal ? (
        <View>
          <Pressable onPress={handleCamera} style={styles.button}>
            <Text>Ota kuva</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => {
              setModal(false);
            }}
          >
            <Text>Kirjoita rekkari</Text>
          </Pressable>
        </View>
      ) : (
        <MemoForm images={images} setImages={setImages} />
      )}
    </View>
  );
};

export default CreateMemo;
