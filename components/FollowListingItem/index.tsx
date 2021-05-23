import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

import styles from './style';

interface Props {
  data: {
    id: number;
    avatar: string;
    isFollow: boolean;
    time: string;
    user: string;
  };
}

const FollowListingItem = (props: Props) => {
  const { data } = props;
  const { avatar, isFollow, time, user } = data;
  return (
    <View style={styles.followWrap}>
      <Avatar
        rounded
        source={{
          uri: avatar,
        }}
      />
      <Text style={styles.user}>{user}</Text>
      <Text style={styles.message}>statrted following you</Text>
      <Text style={styles.duration}>{time}</Text>
      <Pressable
        style={!isFollow ? styles.activeButton : styles.inActiveButton}>
        <Text style={!isFollow ? styles.activebtnText : styles.inActivebtnText}>
          {isFollow ? 'Following' : 'Follow'}
        </Text>
      </Pressable>
    </View>
  );
};

export default FollowListingItem;
