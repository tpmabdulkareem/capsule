import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

interface Props {
  data: { id: number; label: string; comment: string; thumbnail: string };
}

const HomeMDPickCard = (props: Props) => {
  const { data } = props;
  const { thumbnail, label, comment } = data;
  return (
    <View style={styles.CardWrap}>
      <Image source={{ uri: thumbnail }} style={styles.background} />
      <Text style={styles.comment}>{comment}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default HomeMDPickCard;
