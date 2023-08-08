import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';

export const Modal: React.FC = () => (
  <View style={styles.modal}>
    <Text style={styles.h1}>Hello Portal!</Text>
    <Text style={styles.p}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia corporis
      numquam enim, tempore deserunt eos repellat assumenda est veritatis
      aspernatur suscipit quos rerum ex perspiciatis omnis dolore magni atque
      asperiores!
    </Text>
  </View>
);

export const Loader: React.FC = () => (
  <View>
    <Text style={styles.loading}>Loading...</Text>
    <ActivityIndicator size="large" color="#FFFF00" />
  </View>
);
