import React, {useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  title: {
    flex: 1,
    color: '#000000',
    fontSize: 40,
  },
});

export default function Landing() {
  return (
    <View style={{flex: 1}}>
      <View>
        <Text style={styles.title}>회의록 자동 작성</Text>
      </View>
    </View>
  );
}
