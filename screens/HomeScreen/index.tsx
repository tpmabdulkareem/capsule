import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

import images from '../../assets/images';
import HomeCategories from '../../components/HomeCategories';
import HomeDiscovery from '../../components/HomeDiscovery';
import HomeMDPick from '../../components/HomeMDPick';
import styles from './styles';

interface Props {
  navigation: any;
}

const HomeScreen = (props: Props) => {
  const { navigation } = props;
  const [searchText, setSearchText] = useState<string | undefined>(undefined);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
        style={styles.bg}>
        <Text style={styles.h1}>Hello,</Text>
        <Text style={styles.h11}>Mr. Jone Doe</Text>
        <Text style={styles.title}>
          Exercitation consectetur quis ad consectetur ea irure voluptate
          aliquip.
        </Text>
        <SearchBar
          placeholder="Search"
          onChangeText={setSearchText}
          value={searchText}
          clearIcon
          lightTheme
          round
          containerStyle={styles.searchContainer}
          inputStyle={styles.searchInput}
          inputContainerStyle={styles.inputContainer}
        />
      </ImageBackground>
      <HomeCategories />
      <HomeMDPick />
      <HomeDiscovery navigation={navigation} />
    </ScrollView>
  );
};

export default HomeScreen;
