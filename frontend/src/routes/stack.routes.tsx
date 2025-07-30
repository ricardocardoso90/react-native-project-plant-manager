import colors from "../styles/colors";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import { Welcome } from "../screens/Welcome";
import { UserIdenfication } from "../screens/UserIdentification";
import { Confirmation } from "../screens/Confirmation";
import { PlantSave } from "../screens/PlantSave";

import { TabRoutes } from "./tab.routes";

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="UserIdentification" component={UserIdenfication} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="PlantSave" component={PlantSave} />

      <Screen name="PlantSelect" component={TabRoutes} />
      <Screen name="MyPlants" component={TabRoutes} />
    </Navigator>
  );
}
