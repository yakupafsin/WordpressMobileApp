import { connect } from 'react-redux';
import { View,Text } from 'react-native';


const CategoriesPage = ({ sampleData }) => {
  return (
  
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Categories!</Text>
    </View>
  );


};

const mapStateToProps = (state) => ({
  sampleData: state.sampleReducer.sampleData,
});

export default connect(mapStateToProps)(CategoriesPage);
