import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/context";
import Ionicons from "react-native-vector-icons/Ionicons";
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
} from "react-native";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

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
            <TouchableOpacity style={styles.loginBtn} onPress={() => login()}>
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

          {/* Create an account suggestion */}
          <View style={{ flexDirection: "row" }}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={[{ color: "#01BA76" }, styles.mainFont]}>
                Create an account
              </Text>
            </TouchableOpacity>
          </View>
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
