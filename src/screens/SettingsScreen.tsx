import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function SettingsScreen() {
  return (
    <View style={styles.container} className='bg-orange-500'>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.body}>Adjust your preferences here.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 28, fontWeight: '700'},
  body: {fontSize: 16, color: '#666', marginTop: 8},
});
