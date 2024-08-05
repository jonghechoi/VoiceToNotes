import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

export default function HomeScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleContainer: {
      flex: 1,
      paddingTop: 20,
    },
    title: {
      fontSize: 40,
      color: '#000000',
      fontWeight: 'bold',
    },
    descriptionContainer: {
      flex: 2,
    },
    description: {
      fontSize: 20,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>회의록 자동 작성</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          어떻게 써야하고{'\n'}
          어떤 장점이 있으며{'\n'}
          어떤 사람에게 필요한지{'\n'}
          간단한 소개글? 정도 써놓으면 될듯
        </Text>
      </View>
    </View>
  );
}
