import React from "react";
import {
	StyleSheet,
	View,
	FlatList,
	Alert,
	ScrollView,
	StatusBar,
	ImageBackground,
} from "react-native";

import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";
import AppText from "../components/AppText";
import TestListItem from "../components/CanListItem";
import CanListItemUser from "../components/CanListItemUser";
import LogOutComponent from "../components/CanLogOut";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Divider } from "react-native-paper";

function CanAccount({ navigation }) {
	const { user, logOut } = useAuth();

	const createTwoButtonAlert = () =>
		Alert.alert(
			"Warning",
			"Your information will be deleted from this device but is stored on the CANImmunize server. It will be retrieved the next time you log in. Are you sure you want to continue",
			[
				{
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel",
				},
				{
					text: "Yes",
					onPress: () => {
						logOut();
					},
					style: "Logout",
				},
			],
			{ cancelable: false }
		);

	return (
		<>
			<StatusBar backgroundColor="#009387" barStyle="dark-content" />
			<Screen style={styles.screen}>
				<ScrollView
					style={styles.scrollView}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<View style={styles.userContainer}>
						<ImageBackground
							source={require("../assets/baby1.jpg")}
							style={styles.ImageBackground}
						>
							<CanListItemUser
								title={user.firstName + " " + user.lastName}
								subTitle={user.username}
								image={require("../assets/user1.png")}
							/>
						</ImageBackground>
					</View>
					<View style={styles.container}>
						<AppText style={styles.description}>Account Settings</AppText>

						<TestListItem
							title="Account"
							subTitle="Change Password, Logout, more..."
							image={require("../assets/acctsetting.png")}
							onPress={() => alert("Whoops, you pressed me!")}
							MaterialCommunityIcons={
								<MaterialCommunityIcons
									// color={colors.medium}
									name="chevron-right"
									size={25}
								/>
							}
						/>
						<Divider />
						<TestListItem
							title="Notification"
							subTitle="How and when you receive notifications"
							image={require("../assets/bell.png")}
							onPress={() => alert("Whoops, you pressed me!")}
							MaterialCommunityIcons={
								<MaterialCommunityIcons name="chevron-right" size={25} />
							}
						/>
						<Divider />
					</View>
					<View style={styles.container}>
						<AppText style={styles.description}>Support</AppText>
						<TestListItem
							title="Language"
							subTitle="English"
							image={require("../assets/chat.png")}
							onPress={() => alert("Whoops, you pressed me!")}
							MaterialCommunityIcons={
								<MaterialCommunityIcons name="chevron-right" size={25} />
							}
						/>
						<Divider />
						<TestListItem
							title="Help Centre"
							subTitle="FAQs, instructions, and more..."
							image={require("../assets/safety.png")}
							onPress={() => alert("Whoops, you pressed me!")}
							MaterialCommunityIcons={
								<MaterialCommunityIcons name="chevron-right" size={25} />
							}
						/>
						<Divider />
						<TestListItem
							title="Privacy and Security"
							subTitle="Learn about how we're protecting your data"
							image={require("../assets/lock.png")}
							onPress={() => alert("Whoops, you pressed me!")}
							MaterialCommunityIcons={
								<MaterialCommunityIcons name="chevron-right" size={25} />
							}
						/>
						<Divider />
					</View>

					<View style={styles.container}>
						<AppText style={styles.description}>About the App</AppText>
						<TestListItem
							title="About CANImmunize"
							subTitle="Learn more about the CANImmunize project"
							image={require("../assets/bird.png")}
							onPress={() => alert("Whoops, you pressed me!")}
							MaterialCommunityIcons={
								<MaterialCommunityIcons name="chevron-right" size={25} />
							}
						/>
						<Divider />
						<TestListItem
							title="Provide Feedback"
							subTitle="Tell us how we can improve CANImmunize"
							image={require("../assets/speaker.png")}
							onPress={() => alert("Whoops, you pressed me!")}
							MaterialCommunityIcons={
								<MaterialCommunityIcons
									// color={colors.medium}
									name="chevron-right"
									size={25}
								/>
							}
						/>
						<Divider />
						<TestListItem
							title="Report a bug"
							subTitle="Find an issue? Let us know"
							image={require("../assets/bug.png")}
							onPress={() => alert("Whoops, you pressed me!")}
						/>
						<Divider />
					</View>

					<View
						style={[
							styles.container,
							{ marginTop: 1, paddingTop: 1, paddingBottom: 150 },
						]}
					>
						<LogOutComponent
							title="Log Out"
							IconComponent={
								<FontAwesome5 name="power-off" size={22} color="tomato" />
							}
							onPress={createTwoButtonAlert}
						/>
					</View>
				</ScrollView>
			</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: "#f4f5f0",
	},
	container: {
		marginVertical: 5,
		// paddingLeft: 10,
	},
	userContainer: {
		height: "20%",
	},
	description: {
		paddingLeft: 13,
		fontWeight: "600",
		fontSize: 21,
		color: "#0f2770",
		marginVertical: 5,
	},
	ImageBackground: {
		flex: 5,
		resizeMode: "cover",
		justifyContent: "center",
	},
});

export default CanAccount;
