import { SafeAreaView, Text, ScrollView } from "react-native";

export default function SearchScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView className="p-4">
        <Text className="mb-4 text-lg">This is Settings Screen </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
