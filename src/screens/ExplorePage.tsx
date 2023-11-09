import { View, Text } from "react-native";
import { connect } from "react-redux";

const ExplorePage = ({ sampleData }) => {
  // Access someData from Redux state
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  sampleData: state.sampleReducer.sampleData,
});

export default connect(mapStateToProps)(ExplorePage);