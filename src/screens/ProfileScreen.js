import { SafeAreaView, Text, ScrollView } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView className="p-4">
        <Text className="mb-4 text-lg">This is ProfileScreen. </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
