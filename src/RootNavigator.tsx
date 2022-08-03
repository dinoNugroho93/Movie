import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieList from "./feature/movie/persentation/MovieList";
import MovieDetailScreen from "./feature/movieDetail/persentation/MovieDetailScreen";



const RootNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="MovieList">
            <Stack.Screen
                name="MovieDetailScreen"
                component={MovieDetailScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="MovieList"
                component={MovieList}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}
export default RootNavigator;