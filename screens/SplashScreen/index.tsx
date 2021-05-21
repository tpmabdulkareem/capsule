import React from 'react';
import { Image, View } from 'react-native';
import images from '../../assets/images';
import styles from './styles';

interface Props {}

const SplashScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image source={images.logo} />
    </View>
  );
};

export default SplashScreen;
