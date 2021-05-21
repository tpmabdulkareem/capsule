import { Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import images from '../../assets/images';
import videos from '../../assets/videos';
import styles from './styles';

interface Props {
  navigation: {
    navigate: (page: string) => {};
  };
}

const LoginScreen = (props: Props) => {
  // uri: 'https://player.vimeo.com/external/505233451.sd.mp4?s=7c7fa34f3b9478a580fbf31853d53a6ba48f1f37&profile_id=165&oauth2_token_id=57447761',
  // uri: 'https://player.vimeo.com/external/409532050.sd.mp4?s=dd697aecfb2bc23907ab2656a1a256d180307e73&profile_id=165&oauth2_token_id=57447761',
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Video
        style={styles.video}
        source={videos?.loginBg}
        shouldPlay
        resizeMode="contain"
        isLooping
        isMuted
      />
      <Image source={images.logo} style={styles.logo} />
      <Text style={styles.title}>Capsule</Text>

      <Text style={styles.brief}>Everyday Fun with CAPSULE!</Text>
      <Pressable
        style={styles.fbBtn}
        onPress={() => navigation.navigate('Root')}>
        <Text style={styles.fbText}>Sign in with Facebook</Text>
      </Pressable>
      <Pressable
        style={styles.socialBtn}
        onPress={() => navigation.navigate('Root')}>
        <Text style={styles.socialText}>Sign in with KakaoTalk</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
