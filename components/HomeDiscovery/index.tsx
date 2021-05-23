import React from 'react';
import { FlatList, Text, View } from 'react-native';

import discoverData from '../../utils/discoverData';
import VideoCard from '../VideoCard';
import styles from './style';

interface Props {
  navigation: any;
}

const HomeDiscovery = (props: Props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discovery</Text>
      <Text style={styles.desc}>See the discover</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={discoverData}
        renderItem={({ item }) => (
          <VideoCard data={item} navigation={navigation} />
        )}
        keyExtractor={({ id }) => id.toString()}
      />
    </View>
  );
};

export default HomeDiscovery;
