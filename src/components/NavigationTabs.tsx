import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Views/HomeScreen";
import FavoritesScreen from "../Views/FavoritesScreen";
import { Icon } from "@rneui/themed";
import DownLoadScreen from "../Views/DownLoadScreen";
import Routes from "../routes/Routes";

const Tab = createBottomTabNavigator();

export default function NavigationTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            marginBottom: 0,
            paddingBottom: 15,
            borderBottomStartRadius: 10,
            borderBottomEndRadius: 10,
            shadowOpacity: 0,
            elevation: 0,
            height: 75,
            borderColor: "#000",
            backgroundColor: "rgba(46, 46, 46, 0.8)",
          },
          tabBarLabelStyle: {
            marginTop: -20,
            color: "#fff",
            fontSize: 14,
            fontWeight: "500",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Routes}
          options={{
            tabBarIcon: () => <Icon name="home" color={"#fff"} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: () => <Icon name="favorite" color={"#fff"} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Download"
          component={DownLoadScreen}
          options={{
            tabBarIcon: () => <Icon name="file-download" color={"#fff"} />,
            headerShown: false,
          }}

        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}