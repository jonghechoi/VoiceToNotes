import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './screens/Tabs';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import JoinScreen from './screens/JoinScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Join'}
          component={JoinScreen}
          options={{title: '회원가입'}}
        />
        <Stack.Screen
          name={'Tab'}
          component={Tabs}
          options={{title: 'VoiceToNotes'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
