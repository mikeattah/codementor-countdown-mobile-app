import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Linking,
} from "react-native";

function Settings({ route, navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>General</Text>
          <TouchableOpacity onPress={() => {}} style={styles.links}>
            <Text style={styles.textTop}>Theme</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.links}>
            <Text style={styles.textTop}>Date Format</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.links}>
            <Text style={styles.textTop}>First day of the week</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>About</Text>
          <TouchableOpacity style={styles.links}>
            <Text style={styles.textTop}>Build Version</Text>
            <Text style={styles.textBottom}>1.0.0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://github.com/mikeattah/events-countdown-mobile-app/issues"
              )
            }
            style={styles.links}
          >
            <Text style={styles.textTop}>Open an issue on GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://github.com/mikeattah/events-countdown-mobile-app/issues"
              )
            }
            style={styles.links}
          >
            <Text style={styles.textTop}>Review App on Expo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://mikeattah.com/")}
            style={styles.links}
          >
            <Text style={styles.textTop}>Author:</Text>
            <Text style={styles.textBottom}>Mike Attah</Text>
          </TouchableOpacity>
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
  section: {},
  title: {},
  links: {},
  textTop: {},
  textBottom: {},
});

export default Settings;
