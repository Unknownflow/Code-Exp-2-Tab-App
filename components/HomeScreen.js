import * as React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home!</Text>
      <FontAwesome name="glass" size={64} color="blue" />
    </View>
  );
}
