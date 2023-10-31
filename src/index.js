import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExplorePage from './screens/ExplorePage';
import BookmarksPage from './screens/BookmarksPage';
import CategoriesPage from './screens/CategoriesPage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (

        <NavigationContainer>
            <Tab.Navigator


                screenOptions={({ route }) => ({
                    
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Explore') {
                            iconName = focused ? 'home' : 'home-outline';
                        }
                        else if (route.name === 'Categories'){
                            iconName = focused ? 'apps' : 'apps-outline';
                        }
                        else if (route.name === 'Bookmarks'){
                            iconName = focused ? 'bookmarks' : 'bookmarks-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#69a1d8',
                    tabBarInactiveTintColor: '#192f45',
                })}
            >
                <Tab.Screen name="Explore" component={ExplorePage} />
                <Tab.Screen name="Categories" component={CategoriesPage} />
                <Tab.Screen name="Bookmarks" component={BookmarksPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
