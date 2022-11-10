import { SafeAreaView, ScrollView, Text, View, Pressable } from "react-native";

import SvgHeartButton from "../../src/icons/SvgHeartButton";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView className="h-full">
      <ScrollView
        className="flex-col flex-1 mt-4"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Text className="text-2xl">This is HomeScreen. </Text>
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Text>Go to Profile</Text>
        </Pressable>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
          ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.
          Pellentesque eu tincidunt tortor aliquam nulla facilisi cras
          fermentum. Mi eget mauris pharetra et ultrices neque. Magna fringilla
          urna porttitor rhoncus. Neque aliquam vestibulum morbi blandit cursus
          risus. Amet risus nullam eget felis eget nunc. Posuere lorem ipsum
          dolor sit amet consectetur adipiscing. Ultricies leo integer malesuada
          nunc vel. At elementum eu facilisis sed odio morbi quis. Ac tincidunt
          vitae semper quis lectus nulla at volutpat. Lectus quam id leo in
          vitae turpis massa sed elementum. At imperdiet dui accumsan sit amet.
          Consequat semper viverra nam libero justo laoreet sit amet cursus.
          Enim nulla aliquet porttitor lacus. Curabitur vitae nunc sed velit.
          Dignissim sodales ut eu sem. Ornare arcu odio ut sem. Justo laoreet
          sit amet cursus sit amet dictum sit amet. In egestas erat imperdiet
          sed euismod nisi porta. Tellus molestie nunc non blandit massa enim
          nec. Consequat mauris nunc congue nisi vitae suscipit tellus mauris.
          Elementum nisi quis eleifend quam adipiscing vitae. Et leo duis ut
          diam quam nulla porttitor. Vel orci porta non pulvinar. At varius vel
          pharetra vel turpis nunc. Mus mauris vitae ultricies leo. Amet risus
          nullam eget felis eget nunc lobortis. Non odio euismod lacinia at quis
          risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
          ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.
          Pellentesque eu tincidunt tortor aliquam nulla facilisi cras
          fermentum. Mi eget mauris pharetra et ultrices neque. Magna fringilla
          urna porttitor rhoncus. Neque aliquam vestibulum morbi blandit cursus
          risus. Amet risus nullam eget felis eget nunc. Posuere lorem ipsum
          dolor sit amet consectetur adipiscing. Ultricies leo integer malesuada
          nunc vel. At elementum eu facilisis sed odio morbi quis. Ac tincidunt
          vitae semper quis lectus nulla at volutpat. Lectus quam id leo in
          vitae turpis massa sed elementum. At imperdiet dui accumsan sit amet.
          Consequat semper viverra nam libero justo laoreet sit amet cursus.
          Enim nulla aliquet porttitor lacus. Curabitur vitae nunc sed velit.
          Dignissim sodales ut eu sem. Ornare arcu odio ut sem. Justo laoreet
          sit amet cursus sit amet dictum sit amet. In egestas erat imperdiet
          sed euismod nisi porta. Tellus molestie nunc non blandit massa enim
          nec. Consequat mauris nunc congue nisi vitae suscipit tellus mauris.
          Elementum nisi quis eleifend quam adipiscing vitae. Et leo duis ut
          diam quam nulla porttitor. Vel orci porta non pulvinar. At varius vel
          pharetra vel turpis nunc. Mus mauris vitae ultricies leo. Amet risus
          nullam eget felis eget nunc lobortis. Non odio euismod lacinia at quis
          risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
          ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.
          Pellentesque eu tincidunt tortor aliquam nulla facilisi cras
          fermentum. Mi eget mauris pharetra et ultrices neque. Magna fringilla
          urna porttitor rhoncus. Neque aliquam vestibulum morbi blandit cursus
          risus. Amet risus nullam eget felis eget nunc. Posuere lorem ipsum
          dolor sit amet consectetur adipiscing. Ultricies leo integer malesuada
          nunc vel. At elementum eu facilisis sed odio morbi quis. Ac tincidunt
          vitae semper quis lectus nulla at volutpat. Lectus quam id leo in
          vitae turpis massa sed elementum. At imperdiet dui accumsan sit amet.
          Consequat semper viverra nam libero justo laoreet sit amet cursus.
          Enim nulla aliquet porttitor lacus. Curabitur vitae nunc sed velit.
          Dignissim sodales ut eu sem. Ornare arcu odio ut sem. Justo laoreet
          sit amet cursus sit amet dictum sit amet. In egestas erat imperdiet
          sed euismod nisi porta. Tellus molestie nunc non blandit massa enim
          nec. Consequat mauris nunc congue nisi vitae suscipit tellus mauris.
          Elementum nisi quis eleifend quam adipiscing vitae. Et leo duis ut
          diam quam nulla porttitor. Vel orci porta non pulvinar. At varius vel
          pharetra vel turpis nunc. Mus mauris vitae ultricies leo. Amet risus
          nullam eget felis eget nunc lobortis. Non odio euismod lacinia at quis
          risus.
        </Text>
      </ScrollView>
      <View className="sticky bottom-0 flex-row w-full px-4 py-5 border-t border-gray-200">
        <Pressable className="bg-slate-500">
          <SvgHeartButton />
        </Pressable>

        <Pressable>
          <SvgHeartButton />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
