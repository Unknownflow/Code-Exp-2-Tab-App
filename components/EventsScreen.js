import * as React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

export default function EventsScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lime',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Events!</Text>
      <FontAwesome name="star" color="green" size={60}></FontAwesome>
    </View>
  );
}
