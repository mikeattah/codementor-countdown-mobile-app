import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ text, onPress, buttonType }) => {
  if (buttonType === "primary") {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log("Save/Delete and go back to Events");
          onPress();
        }}
        style={styles.priButton}
      >
        <Text style={styles.priText}>{text}</Text>
      </TouchableOpacity>
    );
  } else if (buttonType === "secondary") {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log("Cancel and go back to Events");
          onPress();
        }}
        style={styles.secButton}
      >
        <Text style={styles.secText}>{text}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  priButton: {
    width: 150,
    paddingVertical: 10,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "coral",
  },
  secButton: {
    width: 150,
    paddingVertical: 10,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "oldlace",
  },
  priText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  secText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "coral",
  },
});

export default Button;
