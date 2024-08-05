import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    margin: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 3,
    width: '99%',
  },
  btnLoginByService: {
    height: 40,
    marginTop: 10,
    width: '70%',
    borderRadius: 5,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    borderWith: 1,
    padding: 5,
  },
  btnLoginByOauth: {
    height: 40,
    marginTop: 10,
    width: '70%',
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function LoginScreen() {
  const [id, onChangeId] = useState('ID');
  const [pw, onChangePw] = useState('Password');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeId}
        placeholder="이메일 주소"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePw}
        placeholder="비밀번호"
      />
      <TouchableOpacity style={styles.btnLoginByService}>
        <Text style={{color: 'white'}}>로그인</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.cell}>이메일 가입</Text>
        <Text style={styles.cell}>|</Text>
        <Text style={styles.cell}>이메일 찾기</Text>
        <Text style={styles.cell}>|</Text>
        <Text style={styles.cell}>비밀번호 찾기</Text>
      </View>
      <TouchableOpacity style={styles.btnLoginByOauth}>
        <Text style={{color: 'black'}}>네이버로 로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnLoginByOauth}>
        <Text style={{color: 'black'}}>구글로 로그인</Text>
      </TouchableOpacity>
    </View>
  );
}
