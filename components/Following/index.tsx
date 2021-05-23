import React from 'react';
import { FlatList } from 'react-native';
import { Divider } from 'react-native-elements';

import followersList from '../../utils/followersList';
import FollowListingItem from '../FollowListingItem';
import styles from './style';

interface Props {}

const FollowingTab = (props: Props) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={followersList}
      style={styles.flatListWrap}
      renderItem={({ item }) => <FollowListingItem data={item} />}
      keyExtractor={({ id }) => id.toString()}
      ItemSeparatorComponent={() => <Divider />}
    />
  );
};

export default FollowingTab;
