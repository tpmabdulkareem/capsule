import styles from './styles';
import React from 'react';
import { View, Text } from 'react-native';
import FollowingTab from '../../components/Following';

interface Props {}

const NotificationScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>Notifications</Text>
      </View>
      <FollowingTab />
    </View>
  );
};

export default NotificationScreen;
