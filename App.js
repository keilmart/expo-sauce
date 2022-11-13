import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RewardsScreen from "./src/screens/RewardsScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

//www.npmjs.com/package/react-native-reanimated-carousel#Example //

// TO DO - Restaurant listing screen //
// TO DO - Restaurant detail screen //
// TO DO - Favorite restaurants screen //
// TO DO - Restaurant search screen //
// TO DO - Profile screen //

// const Stack = createNativeStackNavigator();

// export default function App({ navigation }) {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           animation: "slide_from_right",
//         }}
//       >
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//         <Stack.Screen name="Search" component={SearchScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            }
            if (route.name === "Profile") {
              iconName = focused ? "ios-beer" : "ios-beer-outline";
            }
            if (route.name === "Rewards") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-person" : "ios-person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Rewards" component={RewardsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
