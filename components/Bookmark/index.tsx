import React from 'react';
import { FlatList } from 'react-native';
import { Divider } from 'react-native-elements';

import discoverData from '../../utils/discoverData';
import VideoCard from '../VideoCard';
import styles from './style';

interface Props {
  navigation: any;
}

const Bookmark = (props: Props) => {
  const { navigation } = props;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={discoverData}
      style={styles.flatListWrap}
      renderItem={({ item }) => (
        <VideoCard data={item} navigation={navigation} />
      )}
      keyExtractor={({ id }) => id.toString()}
      ItemSeparatorComponent={() => <Divider />}
    />
  );
};

export default Bookmark;
