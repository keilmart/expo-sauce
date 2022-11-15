import { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from "react-native";

import RestaurantCardFull from "../components/restaurant/RestaurantCardFull";
import RestaurantCardHalf from "../components/restaurant/RestaurantCardHalf";
import CarouselComponent from "../components/common/CarouselComponent";

import banner from "../../assets/banner.png";

export default function HomeScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  // const onRefresh = useCallback(async () => {
  //   setRefreshing(true);
  //   await getJobData();
  //   setRefreshing(false);
  // }, []);

  return (
    <SafeAreaView className="h-full">
      <ScrollView
        className="flex-col flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
      >
        <Image resizeMode="cover" source={banner} className="w-full h-56" />
        <View className="px-4 pt-4">
          <RestaurantCardHalf />
          <RestaurantCardFull />
          <CarouselComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
