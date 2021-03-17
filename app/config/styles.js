import { Platform } from "react-native";

import colors from "./colors";

import { useFonts } from "expo-font";

var test = "Avenir";

export default {
	colors,
	text: {
		color: colors.dark,
		fontSize: 18,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
};
