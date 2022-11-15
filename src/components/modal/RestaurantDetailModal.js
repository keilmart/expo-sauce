import { Text, View, Pressable, Modal } from "react-native";

// import JobCardDetail from "../job/JobCardDetail";
import SvgCrossMark from "../../icons/SvgCrossMark";

export default function RestaurantDetailModal(props) {
  const { data, isVisible, onCrossClick = () => {} } = props;

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View className="px-4 mt-14">
        <View className="flex-row items-center">
          <Pressable className="pt-1 pb-1 pr-2" onPress={onCrossClick}>
            <SvgCrossMark className="text-black" height="20" width="20" />
          </Pressable>
          <Text className="text-gray-600">Job detail view</Text>
        </View>
      </View>
      {/* <JobCardDetail data={data} /> */}
      <Text>Restaurant Detail</Text>
    </Modal>
  );
}
