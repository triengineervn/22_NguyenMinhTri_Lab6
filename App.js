import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import ChatScreen from "./screens/ChatScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MenuProvider } from "react-native-popup-menu";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MenuProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Details"
            component={DetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </MenuProvider>
    </NavigationContainer>
  );
}
