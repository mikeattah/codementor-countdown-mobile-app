import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function OutlineButton(props) {
  const { text, onPress } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("Cancel and go back to Events");
        onPress();
      }}
      style={styles.button}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    paddingVertical: 10,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "oldlace",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "coral",
  },
});

export default OutlineButton;
