import { View, Text, Image, Dimensions } from "react-native";

import Carousel from "react-native-reanimated-carousel";

import RestaurantCardHalf from "../restaurant/RestaurantCardHalf";

import emptyLogo from "../../../assets/RestaurantImages/rd1.png";

const data = [
  {
    restaurantName: "Bar Neon",
    category: "Bar",
    distance: 10,
    image: emptyLogo,
  },
  {
    restaurantName: "Popeyes",
    category: "Pub",
    distance: 15,
    image: emptyLogo,
  },
  {
    restaurantName: "Thai Nyyom",
    category: 25,
    distance: "Club",
    image: emptyLogo,
  },
  {
    restaurantName: "Early Mercy",
    category: "Bar",
    distance: 40,
    image: emptyLogo,
  },
];

const CarouselComponent = (props) => {
  const width = Dimensions.get("window").width;

  return (
    <Carousel
      loop
      width={width - 32}
      height={width / 2}
      // autoPlay={true}
      data={data}
      // scrollAnimationDuration={3500}
      onSnapToItem={(index) => console.log("current index:", index)}
      renderItem={({ index }) => (
        // <View className="justify-center flex-1 border">
        //   <Text className="text-center ">{index}</Text>
        // </View>
        <RestaurantCardHalf data={data} index={index} />
      )}
    />
  );
};

export default CarouselComponent;
