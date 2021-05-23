import { Entypo, Feather } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

import styles from './styles';

interface Props {
  navigation: any;
}

const ProfileScreen = (props: Props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      {/* Header Section - Starts */}
      <View style={styles.headWrap}>
        <Avatar
          rounded
          size="large"
          source={{
            uri: 'https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
        />
        <View style={styles.centerWrap}>
          <Text style={styles.title}>John Doe</Text>
          <View style={styles.row}>
            <View style={styles.contents}>
              <Text style={styles.count1}>5</Text>
              <Text style={styles.count2}>FOLLOWINGS</Text>
            </View>
            <View style={styles.contents}>
              <Text style={styles.count1}>15</Text>
              <Text style={styles.count2}>FOLLOWERS</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <Feather name="settings" size={20} color="black" />
          <Entypo
            name="share"
            size={20}
            color="black"
            style={{ paddingLeft: 10 }}
          />
        </View>
      </View>
      {/* Header Section - Ends */}

      <View style={styles.wrap}>
        <Text> No Capsules Added Yet</Text>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate('AddVideo')}>
          <Text style={styles.btnText}>START NOW</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;
