import React from "react";
// import Login from './src/screens/Login';
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import AuthLoading from "./src/authLoading/authLoading";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthLoading />
    </SafeAreaView>
  );
};

export default App;
