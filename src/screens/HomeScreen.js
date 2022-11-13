import { SafeAreaView, ScrollView, Text, View, Pressable } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView className="h-full">
      <ScrollView
        className="flex-col flex-1 mt-4"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Text className="text-2xl">This is HomeScreen. </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
