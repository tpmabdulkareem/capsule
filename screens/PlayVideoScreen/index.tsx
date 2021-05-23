import { Video } from 'expo-av';
import React from 'react';
import { View } from 'react-native';

import styles from './style';

interface Props {
  route: any;
}

const PlayVideoScreen = (props: Props) => {
  const { route } = props;
  const { data } = route;
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={
          data || {
            uri: 'https://player.vimeo.com/external/524515042.sd.mp4?s=3d54a047941937304f8b05e44fe9683f5ec30fa2&profile_id=165&oauth2_token_id=57447761',
          }
        }
        shouldPlay
        resizeMode="contain"
        isLooping
        isMuted
        useNativeControls
      />
    </View>
  );
};

export default PlayVideoScreen;
