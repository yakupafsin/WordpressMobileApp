import { connect } from 'react-redux';
import { View,Text } from 'react-native';
const ExplorePage = ({ sampleData }) => {
  // Access someData from Redux state
  return (
  
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home!</Text>
    </View>
  );


};

const mapStateToProps = (state) => ({
  sampleData: state.sampleReducer.sampleData,
});

export default connect(mapStateToProps)(ExplorePage);
