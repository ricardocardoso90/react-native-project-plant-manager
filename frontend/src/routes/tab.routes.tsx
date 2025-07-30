import colors from "../styles/colors";

const { Navigator, Screen } = createBottomTabNavigator();

import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MyPlants } from "../screens/MyPlants";
import { PlantSelect } from "../screens/PlantSelect";

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.heading,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialIcons
                size={size}
                color={color}
                name="add-circle-outline"
              />
            );
          },
        }}
      />

      <Screen
        name="Minhas Plantas"
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialIcons
                size={size}
                color={color}
                name="format-list-bulleted"
              />
            );
          },
        }}
      />
    </Navigator>
  );
}
