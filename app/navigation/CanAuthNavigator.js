import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TestLoginForm from "../screen/CANLoginForm";
import CanAccount from "../screen/CanAccount";
import CanOnBoarding from "../screen/CanOnBoarding";
import Home from "../screen/CANHome";

const Stack = createStackNavigator();

const ScreenStack = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Home"
			component={Home}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name="Setting"
			component={CanAccount}
			options={{ headerShown: true }}
		/>
	</Stack.Navigator>
);

export default function TestAuthNavigator() {
	return <ScreenStack />;
}

const styles = StyleSheet.create({});
