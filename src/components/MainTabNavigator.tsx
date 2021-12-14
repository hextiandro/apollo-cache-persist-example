import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import React from "react";
import { CharactersStackNavigator, CharactersStackParamList } from "./CharacterStackNavigator";
import { HomeScreen } from "../screens/HomeScreen";
import { MoreScreen } from "../screens/MoreScreen";
import { OfflineBanner } from "./OfflineBanner";
import { View } from "react-native";

export type MainTabParamList = {
    Home: undefined;
    Characters: NavigatorScreenParams<CharactersStackParamList>;
    More: undefined;
};

const MainTab = createBottomTabNavigator<MainTabParamList>();
export const MainTabNavigator: React.FC = () => {
    return (
        <MainTab.Navigator
            tabBar={(props) => (
                <>
                    <OfflineBanner />
                    <BottomTabBar {...props} />
                </>
            )}
        >
            <MainTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => <View />
                }}
            />
            <MainTab.Screen
                name="Characters"
                component={CharactersStackNavigator}
                options={{
                    tabBarIcon: () => <View />
                }}
            />
            <MainTab.Screen
                name="More"
                component={MoreScreen}
                options={{
                    tabBarIcon: () => <View />
                }}
            />
        </MainTab.Navigator>
    );
};
