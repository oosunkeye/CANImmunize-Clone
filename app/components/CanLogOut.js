import React from "react";
import {
	View,
	StyleSheet,
	Image,
	TouchableHighlight,
	Text,
} from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const LogOutComponent = ({
	title,
	subTitle,
	image,
	IconComponent,
	onPress,
	renderRightActions,
	MaterialCommunityIcons,
}) => {
	return (
		<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
			<View style={styles.container}>
				{IconComponent}
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
		// backgroundColor: "#f5f6fa",
		backgroundColor: "white",
	},
	detailsContainer: {
		flex: 1,
		marginLeft: 10,
		justifyContent: "center",
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	subTitle: {
		color: colors.medium,
		fontSize: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "700",
		color: "tomato",
	},
});

export default LogOutComponent;
