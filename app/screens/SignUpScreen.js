import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Input, Icon } from "react-native-elements";

const SignUp = () => {
  return (
    <ScrollView style={styles.container}>
      <Input
        label="First name"
        leftIcon={<Icon name="email" color="gray" />}
        placeholder="Enter your first name"
      />
      <Input
        label="Last name"
        leftIcon={<Icon name="lock" color="gray" />}
        placeholder="Enter your last name"
      />
      <Input
        label="Usernme"
        leftIcon={<Icon name="lock" color="gray" />}
        placeholder="Enter your username"
      />
      <Input
        label="Email"
        leftIcon={<Icon name="email" color="gray" />}
        placeholder="Enter your email"
      />
      <Input
        label="Email 2"
        leftIcon={<Icon name="email" color="gray" />}
        placeholder="Enter your email"
      />
      <Input
        label="Password"
        secureTextEntry
        leftIcon={<Icon name="lock" color="gray" />}
        placeholder="Enter your password"
      />
      <Input
        label="Password 2"
        secureTextEntry
        leftIcon={<Icon name="lock" color="gray" />}
        placeholder="Enter your password"
      />

      <TouchableOpacity>
        <View style={styles.registerButtonContainer}>
          <Text style={styles.registerButtonText}>Register</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 30,
    flex: 1,
    backgroundColor: "#fff",
  },
  registerButtonContainer: {
    marginTop: 10,
    marginBottom: "30%",
    padding: 10,
    backgroundColor: "royalblue",
    borderRadius: 30,
  },
  registerButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default SignUp;
