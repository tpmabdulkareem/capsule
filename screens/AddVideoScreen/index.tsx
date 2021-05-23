import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  ImageBackground,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';

import styles from './styles';

interface Props {
  navigation: any;
}

const AddVideoScreen = (props: Props) => {
  const { navigation } = props;
  const [video, setVideo] = useState<string | null>(null);

  const pickVideo = async () => {
    const result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      await setVideo(result?.file);
      navigation.navigate('PlayVideo', { data: result?.file || video });
    }
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Error',
            'Sorry, we need camera roll permissions to make this work!',
          );
        }
      }
    })();
  }, []);

  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/3965506/pexels-photo-3965506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      }}
      style={styles.container}>
      <View>
        <Pressable style={styles.btn} onPress={pickVideo}>
          <Entypo name="video-camera" size={30} color="#000" />
          <Text style={styles.btnText}>Create Your Capsule</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default AddVideoScreen;
