import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

interface Props {
  data: { id: number; label: string; comment: string; thumbnail: string };
}

const CategoryCard = (props: Props) => {
  const { data } = props;
  const { thumbnail, label, comment } = data;
  return (
    <View style={styles.categoryCard}>
      <Image source={{ uri: thumbnail }} style={styles.background} />
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.comment}>{comment}</Text>
    </View>
  );
};

export default CategoryCard;
