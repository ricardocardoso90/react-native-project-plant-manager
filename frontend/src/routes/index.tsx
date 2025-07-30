import { StackRoutes } from "./stack.routes";
import { NavigationContainer } from "@react-navigation/native";

export function Routes() {
  return (
    <NavigationContainer independent={true}>
      <StackRoutes />
    </NavigationContainer>
  );
}
