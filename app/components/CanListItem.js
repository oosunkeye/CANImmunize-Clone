import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const TestListItem = ({
	title,
	subTitle,
	image,
	onPress,
	MaterialCommunityIcons,
}) => {
	return (
		<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
			<View style={styles.container}>
				{image && <Image style={styles.image} source={image} />}
				<View style={styles.detailsContainer}>
					<AppText style={styles.title}>{title}</AppText>
					{subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
				</View>
				{MaterialCommunityIcons}
			</View>
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		padding: 15,
		backgroundColor: "#FFFFFF",
	},
	detailsContainer: {
		flex: 1,
		marginLeft: 10,
		justifyContent: "center",
	},
	image: {
		width: 45,
		height: 45,
		borderRadius: 35,
	},
	subTitle: {
		color: colors.medium,
		fontSize: 15,
	},
	title: {
		fontWeight: "400",
		fontSize: 18,
		fontWeight: "600",
	},
});

export default TestListItem;
