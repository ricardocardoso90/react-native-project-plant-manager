import colors from "../styles/colors";
import { Welcome } from "../screens/Welcome";
import { Confirmation } from "../screens/Confirmation";
import { UserIdenfication } from "../screens/UserIdentification";
import { createStackNavigator } from "@react-navigation/stack";
import { PlantSave } from "../screens/PlantSave";
import { AuthRoutes } from "./tab.routes";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.white
        }
      }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="UserIdentification" component={UserIdenfication} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="PlantSelect" component={AuthRoutes} />
      <Screen name="PlantSave" component={PlantSave} />
      <Screen name="MyPlants" component={AuthRoutes} />
    </Navigator >
  )
};