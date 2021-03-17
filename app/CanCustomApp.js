import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";

import jwtDecode from "jwt-decode";
// import BottomNavigator from "./navigation/BottomNavigator";
import UnAuthNav from "./navigation/CanUnAuthNav";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./navigation/navigationTheme";
import TestAuthNavigator from "./navigation/CanAuthNavigator";
import AuthContext from "../app/auth/context";
import AuthStorage from "../app/auth/storage";

export default function TestCustomApp() {
	const [user, setUser] = useState();
	const [isReady, setIsReady] = useState(false);

	// setUser(null);

	console.log(user);

	const restoreToken = async () => {
		const token = await AuthStorage.getToken();
		if (!token) return;
		setUser(jwtDecode(token));
	};

	if (!isReady)
		return (
			<AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} />
		);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<NavigationContainer theme={navigationTheme}>
				{user ? <TestAuthNavigator /> : <UnAuthNav />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}

const styles = StyleSheet.create({});
