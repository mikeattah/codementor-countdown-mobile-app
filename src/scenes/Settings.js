import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Linking,
} from "react-native";

function Settings({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.general}>
          <Text>General</Text>
        </View>
        <View style={styles.general}>
          <Text>About</Text>
          <Text>Build Version: 1.0.0</Text>
          <Text>
            Open an issue on
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://github.com/mikeattah/events-countdown-mobile-app/issues"
                )
              }
            >
              <Text style={styles.links}>GitHub</Text>
            </TouchableOpacity>
            to report bugs or suggest features:
          </Text>
          <Text>
            Review App on
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://github.com/mikeattah/events-countdown-mobile-app/issues"
                )
              }
            >
              <Text>Expo</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  links: {},
});

export default Settings;
