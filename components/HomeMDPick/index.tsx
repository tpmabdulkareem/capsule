import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

import mdPickData from '../../utils/mdPickData';
import HomeMDPickCard from '../HomeMDPickCard';
import styles from './styles';

interface Props {}

const HomeMDPick = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>MD Pick</Text>
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet consectetur
          </Text>
        </View>
        <Pressable>
          <Text style={styles.viewAll}>VIEW ALL</Text>
        </Pressable>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={mdPickData}
        renderItem={({ item }) => <HomeMDPickCard data={item} />}
        keyExtractor={({ id }) => id.toString()}
      />
    </View>
  );
};

export default HomeMDPick;
