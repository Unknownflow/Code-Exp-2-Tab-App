import * as React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

export default function ContactsScreen(){
  return (
    <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center'}}>
      <Text>Contacts!</Text>
    </View>
  );
}