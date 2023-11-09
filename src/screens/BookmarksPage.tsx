import { View, Text } from "react-native";
import { connect } from "react-redux";

const BookMarksPage = ({ sampleData }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bookmarks!</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  sampleData: state.sampleReducer.sampleData,
});

export default connect(mapStateToProps)(BookMarksPage);
