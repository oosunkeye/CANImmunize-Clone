import React, { Component } from "react";
import { StyleSheet, Image, TouchableHighlight } from "react-native";

const Category = ({ image, onPress }) => {
	return (
		<TouchableHighlight
			style={{
				width: 130,
				height: 180,
				marginLeft: 20,
			}}
			onPress={onPress}
		>
			<Image
				source={image}
				style={{
					flex: 1,
					width: null,
					height: null,
					resizeMode: "cover",
					borderRadius: 10,
				}}
			/>
		</TouchableHighlight>
	);
};

export default Category;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
