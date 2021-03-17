import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";

function ActivityIndicator({ visible = false }) {
	if (!visible) return null;

	return (
		<Screen style={styles.overlay}>
			<LottieView
				autoPlay
				loop
				source={require("../assets/animations/loadertwo.json")}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	overlay: {
		position: "absolute",
		backgroundColor: "white",
		height: "100%",
		opacity: 0.8,
		width: "100%",
		zIndex: 1,
	},
});

export default ActivityIndicator;
