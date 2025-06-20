
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./stack.routes";

export function Routes() {
  return (
    <NavigationContainer independent={true}>
      <AppRoutes />
    </NavigationContainer>
  );
};