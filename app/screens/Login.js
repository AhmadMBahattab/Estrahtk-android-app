import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Icon } from "react-native-elements";

const Login = () => {
  return (
    <View style={styles.container}>
      <Input
        label="Email"
        leftIcon={<Icon name="email" color="gray" />}
        placeholder="Enter your email"
      />
      <Input
        label="Password"
        secureTextEntry={true}
        leftIcon={<Icon name="lock" color="gray" />}
        placeholder="Enter your password"
      />
      <TouchableOpacity>
        <View style={styles.loginButtonContainer}>
          <Text style={styles.loginButtonText}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 30,
    flex: 1,
    backgroundColor: "#fff",
  },
  loginButtonContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "royalblue",
    borderRadius: 30,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default Login;
