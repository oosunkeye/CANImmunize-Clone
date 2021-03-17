import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }) => {
	let backgroundColor;

	backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";

	return (
		<View
			style={{
				width: 6,
				height: 6,
				marginHorizontal: 3,
				backgroundColor,
			}}
		/>
	);
};

const Skip = ({ ...props }) => (
	<TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
		<Text style={{ fontSize: 16 }}>Skip</Text>
	</TouchableOpacity>
);

const Next = ({ ...props }) => (
	<TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
		<Text style={{ fontSize: 16 }}>Next</Text>
	</TouchableOpacity>
);

const Done = ({ ...props }) => (
	<TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
		<Text style={{ fontSize: 16 }}>Done</Text>
	</TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
	return (
		<Onboarding
			SkipButtonComponent={Skip}
			NextButtonComponent={Next}
			DoneButtonComponent={Done}
			DotComponent={Dots}
			onSkip={() => navigation.replace("TestLoginForm")}
			onDone={() => navigation.navigate("TestLoginForm")}
			pages={[
				{
					backgroundColor: "#ffffff",
					image: <Image source={require("../assets/cleanlogo.png")} />,
					title: "CANImmunize",
					subtitle: "We help Canadians easily track their vaccination records",
				},
				{
					backgroundColor: "#d4a72c",
					image: <Image source={require("../assets/ncovid19.png")} />,
					title: "Eradicating Covid19 together",
					subtitle: "Helping Canada with the roll-out of the COVID-19 vaccine",
				},
				{
					backgroundColor: "#3490dc",
					image: <Image source={require("../assets/world2.png")} />,
					title: "A safer place for us",
					subtitle: "Let's make the world a better place",
				},
			]}
		/>
	);
};

export default OnboardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
