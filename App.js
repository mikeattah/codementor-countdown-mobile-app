import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AddEvent from "~scenes/AddEvent";
import EditEvent from "~scenes/EditEvent";
import Events from "~scenes/Events";
import ExpiredEvents from "~scenes/ExpiredEvents";
import RecycleBin from "~scenes/RecycleBin";
import Settings from "~scenes/Settings";
import ViewEvent from "~scenes/ViewEvent";

import Header from "~components/organisms/Header";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Events"
      screenOptions={{
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
        name="Events"
        component={Events}
        options={{ drawerLabel: "Events" }}
      />
      <Drawer.Screen
        name="ExpiredEvents"
        component={ExpiredEvents}
        options={{ drawerLabel: "Expired Events" }}
      />
      <Drawer.Screen
        name="RecycleBin"
        component={RecycleBin}
        options={{ drawerLabel: "Recycle Bin" }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ drawerLabel: "Settings" }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppDrawer"
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
          name="AppDrawer"
          component={AppDrawer}
          options={{
            header: () => <Header />,
          }}
        />
        <Stack.Screen
          name="EditEvent"
          component={EditEvent}
          options={{ title: "Edit Event", headerShown: false }}
        />
        <Stack.Screen
          name="ViewEvent"
          component={ViewEvent}
          options={{ title: "View Event", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
