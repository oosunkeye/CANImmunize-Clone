import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import defaultStyles from "../config/styles";

function AppText({ children, style }) {
	const [loaded] = useFonts({
		CustomFontStyle: require("../assets/fonts/Montserrat-Regular.ttf"),
	});

	if (!loaded) {
		return null;
	}
	return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
	infoContainer: {
		color: "#282b30",
		// fontSize: 18,
		// fontWeight: "bold",
		fontFamily: Platform.OS === "android" ? "Roboto" : "CustomFontStyle",
	},
});

export default AppText;
