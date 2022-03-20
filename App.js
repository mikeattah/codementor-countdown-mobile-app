import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AddEvent from "~scenes/AddEvent";
import ArchivedEvents from "~scenes/ArchivedEvents";
import EditEvent from "~scenes/EditEvent";
import Events from "~scenes/Events";
import Settings from "~scenes/Settings";
import ViewEvent from "~scenes/ViewEvent";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="AddEvent"
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen
          name="AddEvent"
          component={AddEvent}
          options={{ drawerLabel: "Add Event" }}
        />
        <Drawer.Screen
          name="ArchivedEvents"
          component={ArchivedEvents}
          options={{ drawerLabel: "Archived Events" }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{ drawerLabel: "Settings" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

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
          component={AddEvent}
          options={{ title: "Add Event" }}
        />
        <Stack.Screen
          name="ArchivedEvents"
          component={ArchivedEvents}
          options={{ title: "Archived Events" }}
        />
        <Stack.Screen
          name="EditEvent"
          component={EditEvent}
          options={{ title: "Edit Event" }}
        />
        <Stack.Screen
          name="Events"
          component={Events}
          options={{
            title: "Events",
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title: "Settings" }}
        />
        <Stack.Screen
          name="ViewEvent"
          component={ViewEvent}
          options={{ title: "View Event" }}
        />
        <Stack.Screen
          name="AppDrawer"
          component={AppDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
