import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookmarksPage from "@screens/BookmarksPage";
import CategoriesPage from "@screens/CategoriesPage";
import ExplorePage from "@screens/ExplorePage";
import React from "react";

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Explore") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Categories") {
            iconName = focused ? "apps" : "apps-outline";
          } else if (route.name === "Bookmarks") {
            iconName = focused ? "bookmarks" : "bookmarks-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#69a1d8",
        tabBarInactiveTintColor: "#192f45",
      })}
    >
      <Tab.Screen name="Explore" component={ExplorePage} />
      <Tab.Screen name="Categories" component={CategoriesPage} />
      <Tab.Screen name="Bookmarks" component={BookmarksPage} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
