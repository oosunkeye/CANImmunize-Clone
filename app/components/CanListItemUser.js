import React from "react";
import {
	View,
	StyleSheet,
	Image,
	TouchableHighlight,
	Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

// import Text from "../Text";
import colors from "../config/colors";
import AppText from "./AppText";

const CanListItemUser = ({
	title,
	subTitle,
	image,
	IconComponent,
	onPress,
	renderRightActions,
	MaterialCommunityIcons,
}) => {
	return (
		<View style={styles.container}>
			{image && <Image style={styles.image} source={image} />}

			<AppText style={styles.title}>{title}</AppText>
			{subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},

	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	subTitle: {
		fontWeight: "600",
		fontSize: 16,
		fontWeight: "600",
		color: "#033e91",
	},
	title: {
		fontWeight: "600",
		fontSize: 20,
		fontWeight: "600",
		color: "#033e91",
	},
});

export default CanListItemUser;
