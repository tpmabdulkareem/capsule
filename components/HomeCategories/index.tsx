import React from 'react';
import { FlatList, Text, View } from 'react-native';

import categories from '../../utils/categories';
import CategoryCard from '../CategoryCard';
import styles from './styles';

interface Props {}

const HomeCategories = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category</Text>
      <Text style={styles.desc}>See the trip which I want</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => <CategoryCard data={item} />}
        keyExtractor={({ id }) => id.toString()}
      />
    </View>
  );
};

export default HomeCategories;
