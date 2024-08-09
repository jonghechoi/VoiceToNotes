import {Text, TouchableOpacity, View, StyleSheet, TextInput} from 'react-native';
import {useState} from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  input: {
    borderBottomWidth: 1,
  },
  btnContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  btn: {
    height: 50,
    width: '95%',
    borderRadius: 5,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const JoinScreen = () => {
  const [email, onChangeEmail] = useState('');
  const [pw, onChangePw] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>이메일 주소</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder=""
        />
        <Text>비밀번호</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePw}
          placeholder=""
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{color: 'white'}}>가입하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JoinScreen;
