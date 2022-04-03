import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function FillButton(props) {
  const { text, onPress } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("Save/Delete and go back to Events");
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
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "45%",
    textAlign: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    color: "coral",
  },
});

export default FillButton;
