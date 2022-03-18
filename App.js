import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddEventScreen from "~screens/AddEventScreen";
import ArchivedEventsScreen from "~screens/ArchivedEventsScreen";
import EditEventScreen from "~screens/EditEventScreen";
import EventsScreen from "~screens/EventsScreen";
import SettingsScreen from "~screens/SettingsScreen";
import ViewEventScreen from "~screens/ViewEventScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Events"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="AddEvent"
          component={AddEventScreen}
          options={{ title: "Add Event" }}
        />
        <Stack.Screen
          name="ArchivedEvents"
          component={ArchivedEventsScreen}
          options={{ title: "Archived Events" }}
        />
        <Stack.Screen
          name="EditEvent"
          component={EditEventScreen}
          options={{ title: "Edit Event" }}
        />
        <Stack.Screen
          name="Events"
          component={EventsScreen}
          options={{
            title: "Events",
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: "Settings" }}
        />
        <Stack.Screen
          name="ViewEvent"
          component={ViewEventScreen}
          options={({ navigation, route }) => ({
            title: "View Event",
            headerLeft: (props) => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#fff"
                {...props}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
