import React from "react";
import { View, Text, Image } from "react-native";

import emptyLogo from "../../../assets/RestaurantImages/rd1.png";

const RestaurantCardHalf = (props) => {
  return (
    <View className="flex-col w-7/12 mb-3">
      <Image
        resizeMode="cover"
        source={emptyLogo}
        className="w-full rounded-lg h-28"
      />
      <View className="flex-col pt-3">
        <Text numberOfLines={1} className="font-bold text-black">
          Restaurant Name
        </Text>
        <Text className="py-1 text-gray-400" numberOfLines={1}>
          Category
        </Text>
        <Text className="text-gray-700" numberOfLines={1}>
          Distance
        </Text>
      </View>
    </View>
  );
};

export default RestaurantCardHalf;
