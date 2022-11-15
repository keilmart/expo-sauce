import { View, Text, Image, Dimensions } from "react-native";

import Carousel from "react-native-reanimated-carousel";

const CarouselComponent = (props) => {
  const width = Dimensions.get("window").width;

  return (
    <Carousel
      loop
      width={width - 32}
      height={width / 2}
      autoPlay={true}
      data={[...new Array(6).keys()]}
      scrollAnimationDuration={1000}
      onSnapToItem={(index) => console.log("current index:", index)}
      renderItem={({ index }) => (
        <View className="justify-center flex-1 border">
          <Text className="text-center ">{index}</Text>
        </View>
      )}
    />
  );
};

export default CarouselComponent;
