import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    const loginSuccess = true;

    if (loginSuccess) {
      navigation.navigate('App');
    } else {
      alert('Login failed. Please try again.');
    }
  };
  //Form content
  const inputFunction = (title, placeholder, keyBoardType) => {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.placeholdertxt}>{title}</Text>
        <TextInput placeholder={placeholder}
          keyboardType={keyBoardType}
          placeholderTextColor={'#f7dc63'}
          style={styles.textInputstyle}

        />
      </View>
    )
  }
  const loginbutton = () => {
    return (
      <TouchableOpacity style={styles.Button} onPress={handleLogin}>
        <Text style={[styles.headingStyle, { color: "white" }]}>Login</Text>
      </TouchableOpacity>

    )
  }

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.backButtonContainer}>
          {/* <Icon name='arrow-left' size={25}/> */}
          {/* <Text style={styles.headingStyle}>Back</Text> */}
        </View>
        {/* <Text style={styles.headingStyle}>Login</Text> */}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {renderHeader()}
      <View style={styles.miniContainer}>
        <View style={styles.logo}>
          <View style={styles.circle}>
            <Image source={require('../assets/a2z-televets-logo-304x304-removebg-preview.png')} style={styles.profile} resizeMode='contain' />
          </View>
          <Text style={styles.welcometxt}>Login</Text>
        </View>
        {inputFunction("Username", "prathi0909@gmail.com", "default")}
        {inputFunction("Password", "**********", "default")}
        <View style={styles.savepass}>
          <Checkbox
            status={'checked'}
            color="#de1b6f"

          />
          <Text style={styles.savetxt}>Save password</Text>
        </View>
        {loginbutton()}
        <View style={{ width: "80%", alignItems: "center", justifyContent: "center", flexDirection: "row", alignSelf: "center", marginTop: 50 }}>
          <Text style={[styles.savetxt, { color: "gray" }]}>Dont Have a account?</Text>
          <Text style={styles.savetxt}>Sing up</Text>

        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAE086',
    justifyContent: 'space-between'
  },
  headerContainer: {
    width: "100%",
    height: 60,
    marginTop: StatusBar.currentHeight,
    justifyContent: 'space-between',
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10

  },
  headingStyle: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
  },
  backButtonContainer: {
    flexDirection: "row"
  },
  miniContainer: {
    width: '100%',
    height: '85%',
    backgroundColor: 'white',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  logo: {
    width: '100%',
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 100,

  },
  circle: {
    width: "100%",
    height: 100,
    borderwidth: 5,
    borderColor: 'white',
    borderRadius: 10,
    overflow: "hidden",
    position: "absolute",
    top: -50

  },
  profile: {
    width: "100%",
    height: "100%"
  },
  welcometxt: {
    fontWeight: "700",
    fontSize: 26,
    position: "absolute",
    bottom: 0
  },
  inputContainer: {
    widht: "80%",
    height: 60,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20

  },
  placeholdertxt: {
    color: "gray",
    fontSize: 16,
    top: 30
  },
  textInputstyle: {
    width: "100%",
    height: 40,
    top: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#FAE086'
  },
  savepass: {
    height: 75,
    width: '80%',
    top: 50,
    padding: 10,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "start",
  },
  savetxt: {
    color: "#f7dc63"
  },
  Button: {
    width: "80%",
    height: 50,
    backgroundColor: '#FAE086',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 100,


  }
})
export default LoginScreen;
