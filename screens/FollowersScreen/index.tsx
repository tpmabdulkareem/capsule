import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Tab } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import Bookmark from '../../components/Bookmark';
import FollowingTab from '../../components/Following';
import styles from './styles';

interface Props {
  navigation: any;
}

const FollowersScreen = (props: Props) => {
  const { navigation } = props;
  const [value, setValue] = useState<number>(0);
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Tab
        onChange={(e) => setValue(e)}
        value={value}
        indicatorStyle={{
          backgroundColor: '#FFF',
          borderWidth: 1,
          borderColor: '#ccc',
        }}>
        <Tab.Item
          title="FOLLOWING"
          containerStyle={styles.tabContainer}
          titleStyle={value === 0 ? styles.activeTab : styles.inActiveTab}
        />
        <Tab.Item
          title="BOOKMARK"
          containerStyle={styles.tabContainer}
          titleStyle={value === 1 ? styles.activeTab : styles.inActiveTab}
        />
      </Tab>
      {value === 0 ? <FollowingTab /> : <Bookmark navigation={navigation} />}
    </SafeAreaView>
  );
};

export default FollowersScreen;
