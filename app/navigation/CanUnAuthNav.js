import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TestLoginForm from "../screen/CANLoginForm";
// import TestRegisterForm from "../screen/TestRegisterForm";
import CanOnBoarding from "../screen/CanOnBoarding";

const Stack = createStackNavigator();

const ScreenStack = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="CanOnBoarding"
			component={CanOnBoarding}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name="TestLoginForm"
			component={TestLoginForm}
			options={{ headerShown: false }}
		/>
	</Stack.Navigator>
);

export default function UnAuthNav() {
	return <ScreenStack />;
}

const styles = StyleSheet.create({});
