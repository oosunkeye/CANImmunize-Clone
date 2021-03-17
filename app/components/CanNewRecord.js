import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const CanNewRecord = ({}) => {
	return (
		<TouchableHighlight underlayColor={colors.light}>
			<View style={styles.container}>
				<Image style={styles.image} source={require("../assets/family.png")} />
				<AppText style={styles.title}>
					Start by creating records for each of your
				</AppText>
				<AppText style={styles.title}>family members</AppText>
			</View>
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		justifyContent: "center",
	},

	image: {
		width: 90,
		height: 90,
	},

	title: {
		fontWeight: "400",
		fontSize: 16,
		fontWeight: "600",
	},
});

export default CanNewRecord;
