import { Link } from "@react-navigation/native";
import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Email from "../Login/Fields/Email";
import Header from "../../components/Header";

export default function ForgotPassword() {
  const [showEmail, setShowEmail] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  function onPress() {
    setShowEmail(!showEmail);
  }

  return (
    <>
      <View style={styles.container}>
        <Header
          text="Forgot your password?"
          fontWeight={"bold"}
          fontSize={30}
        />
        {showEmail ? (
          <>
            <Email />
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text>Thank you an email has been sent!</Text>
        )}

        <Link
          style={[styles.link, isHovered && styles.linkHovered]}
          to={{ screen: "Login" }}
          onPressIn={() => setIsHovered(true)}
          onPressOut={() => setIsHovered(false)}
        >
          Back to Login
        </Link>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#7D29EE",
    padding: 10,
    borderRadius: 6,
    width: "70%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  link: {
    color: "blue",
    marginTop: 10,
  },
  linkHovered: {
    textDecorationLine: "underline",
  },
});
