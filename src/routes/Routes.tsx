import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Views/HomeScreen";
import MovieDescriptionScreen from "../Views/MovieDescriptionScreen";
import DownLoadScreen from "../Views/DownLoadScreen";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MovieDescriptionScreen"
          component={MovieDescriptionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="DownLoadScreen"
        component={DownLoadScreen}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
};

export default Routes;
