import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableHighlight,
} from "react-native";
import AppText from "./AppText";

const SupportListings = ({
	imageUri,
	helpDescriptionOne,
	helpDescriptionTwo,
	imageUriOne,
	imageUriTwo,
	onPress,
}) => {
	return (
		<>
			<View
				style={{
					flexDirection: "row",
				}}
			>
				<TouchableHighlight
					underlayColor="null"
					onPress={onPress}
					style={{
						width: "50%",
						height: 200,
						borderWidth: 0.3,
						borderBottomWidth: 0,
						borderColor: "#d9cece",
						alignItems: "center",
						paddingLeft: 10,
						paddingRight: 10,
					}}
				>
					<>
						<Image
							source={imageUriOne}
							style={{
								width: 100,
								height: 100,
								borderRadius: 50,
								marginTop: 30,
							}}
						/>
						<AppText style={styles.desc}>{helpDescriptionOne}</AppText>
					</>
				</TouchableHighlight>

				<TouchableHighlight
					underlayColor="null"
					onPress={onPress}
					style={{
						width: "50%",
						height: 200,
						borderWidth: 0.3,
						borderBottomWidth: 0,
						borderColor: "#d9cece",
						alignItems: "center",
						paddingLeft: 10,
						paddingRight: 10,
					}}
				>
					<>
						<Image
							source={imageUriTwo}
							style={{
								width: 100,
								height: 100,
								borderRadius: 50,
								marginTop: 30,
							}}
						/>
						<AppText style={styles.desc}>{helpDescriptionTwo}</AppText>
					</>
				</TouchableHighlight>
			</View>
		</>
	);
};

export default SupportListings;

const styles = StyleSheet.create({
	desc: {
		fontSize: 15,
		marginVertical: 10,
		marginHorizontal: 15,
	},
});
