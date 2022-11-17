import React from "react";
import { View, Text, Image } from "react-native";

import emptyLogo from "../../../assets/RestaurantImages/rd1.png";

const RestaurantCardFull = (props) => {
  const { data } = props;

  return (
    <View className="flex-col w-full mb-3" {...props}>
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

export default RestaurantCardFull;
