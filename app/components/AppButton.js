import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import { Card } from "react-native-shadow-cards";

function AppButton({ title, onPressed, Icon, color = "primary" }) {
	return (
		<View style={styles.textContainer}>
			<Card
				cornerRadius={100}
				style={{
					padding: 10,
					margin: 10,
					cornerRadius: 100,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: colors[color],
				}}
			>
				<TouchableOpacity style={[styles.button]} onPress={onPressed}>
					{Icon}
					<AppText style={styles.text}>{title}</AppText>
				</TouchableOpacity>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	textContainer: {
		alignItems: "center",
	},
	button: {
		justifyContent: "center",
		alignItems: "center",

		width: "90%",
		flexDirection: "row",
	},
	text: {
		color: "white",
		fontSize: 16,
		textTransform: "capitalize",
		fontWeight: "bold",
	},
});

export default AppButton;
