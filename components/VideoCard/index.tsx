import {
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import styles from './style';

interface Props {
  data: {
    id: number;
    thumbnail: string;
    avatar: string;
    title: string;
    location: string;
    user: string;
  };
  navigation: any;
}

const VideoCard = (props: Props) => {
  const { data, navigation } = props;
  const { thumbnail, avatar, title, location, user } = data;
  return (
    <Pressable onPress={() => navigation?.navigate('PlayVideo')}>
      <View style={styles.container}>
        <Image style={styles.videoWrap} source={{ uri: thumbnail }} />
        <View style={styles.footer}>
          <View style={styles.row}>
            <View style={styles.avatarWrap}>
              <Image source={{ uri: avatar }} style={styles.avatar} />
              <Text style={styles.avatarText} numberOfLines={1}>
                {user}
              </Text>
            </View>
            <View style={styles.row}>
              <Fontisto
                name="favorite"
                size={24}
                color="black"
                style={styles.icon}
              />
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={24}
                color="black"
                style={styles.icon}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
            <View style={styles.row}>
              <MaterialIcons name="place" size={24} color="grey" />
              <Text style={styles.location} numberOfLines={1}>
                {location}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default VideoCard;
