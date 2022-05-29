import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/context";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { LoginButton, AccessToken, LoginManager, Profile } from 'react-native-fbsdk-next';


import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  ActivityIndicator,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert
} from "react-native";


const Login = () => {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GoogleSignin.configure();
  })
  // facedbook
  const currentProfile = Profile.getCurrentProfile().then(
    function (currentProfile) {
      if (currentProfile) {
        console.log("The current logged user is: " +
          currentProfile.name
          + ". His profile id is: " +
          currentProfile.userID
        );
      }
    }
  );
  
// google signin
  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // this.setState({ userInfo });
      console.log(userInfo)
      Alert.alert("User Info",
        `UserName: ${userInfo.user.givenName}\nEmail: ${userInfo.user.email}`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ])
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error)

        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error)

        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error)

        // play services not available or outdated
      } else {
        console.log(error)
        // some other error happened
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.cont}>
          {/* Logo Icon */}
          <Ionicons name="logo-designernews" size={50} color="#01BA76" />
          <Text style={styles.mainHead}> Welcome Back </Text>
          <Text style={{ color: "grey", marginBottom: 25 }}>
            Sign in to continue
          </Text>

          {/* Email Fields */}
          <TextInput
            style={styles.textInput}
            placeholder={"Enter your email"}
            keyboardType={"email-address"}
          />

          {/* Password Field */}
          <TextInput
            style={styles.textInput}
            placeholder={"Enter Password"}
            secureTextEntry={true}
          />

          {/* Forgot Password button */}
          <View style={{ width: "70%" }}>
            <TouchableOpacity style={{ alignSelf: "flex-end" }}>
              <Text
                style={[
                  { color: "#01BA76", marginTop: 18, marginBottom: 35 },
                  styles.mainFont,
                ]}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          {loading ? (
            <View style={styles.spinnerContainer}>
              <ActivityIndicator size="small" color="#01BA76" />
            </View>
          ) : (
            <TouchableOpacity style={styles.loginBtn} onPress={() => null}>
              <Ionicons name="key" size={16} color="white" />
              <Text
                style={{
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          )}
          {/* google */}
          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={_signIn}
          // disabled={this.state.isSigninInProgress}
          />
          {/* facebook */}
          <LoginButton
            onLoginFinished={
              (error, result) => {
                if (error) {
                  console.log("login has error: " + result.error);
                } else if (result.isCancelled) {
                  console.log("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      console.log(data.accessToken.toString())
                      Profile.getCurrentProfile().then(
                        function (currentProfile) {
                          if (currentProfile) {
                            Alert.alert("User Info",
                              `UserName: ${currentProfile.name}\nUserId: ${currentProfile.userID}`,
                              [
                                {
                                  text: "Cancel",
                                  onPress: () => console.log("Cancel Pressed"),
                                  style: "cancel"
                                },
                                { text: "OK", onPress: () => console.log("OK Pressed") }
                              ])
                          }
                        }
                      );
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => console.log("logout.")} />

        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainHead: {
    fontSize: 22,
  },
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "70%",
    backgroundColor: "white",
    padding: 8,
    height: 45,
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  mainFont: {
    // fontFamily: "Poppins-SemiBold",
  },
  loginBtn: {
    flexDirection: "row",
    backgroundColor: "#01BA76",
    width: "70%",
    alignItems: "center",
    height: 45,
    justifyContent: "center",
    marginBottom: 25,
  },
});

export default Login;
