import React, { Component, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
	TouchableHighlight,
	TouchableWithoutFeedback,
} from "react-native";

import Category from "../components/CanCategory";
import CanNewRecord from "../components/CanNewRecord";
import SupportListings from "../components/CanSupportListings";
import Screen from "../components/Screen";
import { AntDesign } from "@expo/vector-icons";
import AppText from "../components/AppText";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import AppButton from "../components/AppButton";

const { height, width } = Dimensions.get("window");

export default function Home({ navigation }) {
	const date = new Date();
	const hour = date.getHours();

	const [newRecord, setNewRecord] = useState(true); //I SET IT TO BE TRUE FOR NOW

	return (
		<>
			<Screen style={styles.container}>
				<View style={styles.headerContainer}>
					<Image
						style={styles.image}
						source={require("../assets/canlogo.png")}
					/>
					<TouchableWithoutFeedback
						onPress={() => navigation.navigate("Setting")}
					>
						<AntDesign name="setting" size={24} color="tomato" />
					</TouchableWithoutFeedback>
				</View>
				<ScrollView scrollEventThrottle={16}>
					<View
						style={{
							padding: 15,
						}}
					>
						<AppText style={styles.userText}>
							{hour < 12 ? `Good Morning Osunkeye` : `Good day Osunkeye`}
						</AppText>
						<ScrollView scrollEventThrottle={16}>
							<View
								style={{
									flex: 1,
									backgroundColor: "#ffffff",
									paddingTop: 20,
									height: 250,
								}}
							>
								<View
									style={{
										height: 180,
										marginTop: 10,
										backgroundColor: "#ffffff",
									}}
								>
									<ScrollView
										horizontal={true}
										showsHorizontalScrollIndicator={false}
									>
										<Category
											image={require("../assets/flushot.jpeg")}
											desc="null"
											onPress={() => alert("Whoops, you pressed me!")}
										/>
										<Category
											image={require("../assets/prevent.jpeg")}
											desc="null"
											onPress={() => alert("Whoops, you pressed me!")}
										/>
										<Category
											image={require("../assets/baby.jpeg")}
											desc="null"
											onPress={() => alert("Whoops, you pressed me!")}
										/>
									</ScrollView>
								</View>
							</View>
						</ScrollView>
						<View style={styles.headerContainer}>
							<AppText
								style={{
									paddingLeft: 10,
									fontWeight: "bold",
									fontSize: 18,
									textTransform: "uppercase",
									color: "#3266a8",
								}}
							>
								My Records
							</AppText>
							<TouchableWithoutFeedback
								onPress={() => alert("Whoops, you pressed me!")}
							>
								<Ionicons
									name="ios-add-circle-outline"
									size={24}
									color="#3266a8"
								/>
							</TouchableWithoutFeedback>
						</View>
						{newRecord && (
							<>
								<CanNewRecord />
								<TouchableWithoutFeedback
									onPress={() => alert("Whoops, you pressed me!")}
								>
									<AppButton
										title="New Record"
										onPress={() => alert("Whoops, you pressed me!")}
									/>
								</TouchableWithoutFeedback>
							</>
						)}

						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								marginVertical: 15,
								paddingRight: 30,
								paddingLeft: 30,
							}}
						>
							<TouchableWithoutFeedback
								onPress={() => navigation.navigate("Setting")}
							>
								<View
									style={{
										flexDirection: "row",
										opacity: 0.5,
									}}
								>
									<AntDesign name="setting" size={24} color="black" />
									<AppText
										style={{
											paddingLeft: 10,
											fontWeight: "bold",
											fontSize: 18,
										}}
									>
										Settings
									</AppText>
								</View>
							</TouchableWithoutFeedback>

							<TouchableWithoutFeedback
								onPress={() => alert("Whoops, you pressed me!")}
							>
								<View
									style={{
										flexDirection: "row",
										opacity: 0.5,
									}}
								>
									<Feather name="help-circle" size={24} color="black" />
									<AppText
										style={{
											paddingLeft: 10,
											fontWeight: "bold",
											fontSize: 18,
										}}
									>
										Help
									</AppText>
								</View>
							</TouchableWithoutFeedback>
						</View>
						<AppText
							style={{
								paddingLeft: 10,
								fontWeight: "bold",
								fontSize: 18,
								textTransform: "uppercase",
								color: "black",
								marginTop: 10,
							}}
						>
							All about immunization
						</AppText>
						<AppText
							style={{
								paddingLeft: 10,
								fontWeight: "bold",
								fontSize: 18,
								color: "#3266a8",
							}}
						>
							Have a question about immunization? The information below comes
							from sources you can trust!
						</AppText>
					</View>
					<View
						style={{
							// flex: 2,
							backgroundColor: "#ffffff",
						}}
					>
						<SupportListings
							imageUriOne={require("../assets/girl.png")}
							imageUriTwo={require("../assets/map.png")}
							helpDescriptionOne="Protecting yourself & Those Around you"
							helpDescriptionTwo="Outbreaks Map"
							onPress={() => alert("Whoops, you pressed me!")}
						/>

						<SupportListings
							imageUriOne={require("../assets/kids.png")}
							imageUriTwo={require("../assets/faq.png")}
							helpDescriptionOne="For Kids"
							helpDescriptionTwo="Frequently Asked Questions"
							onPress={() => alert("Whoops, you pressed me!")}
						/>
						<SupportListings
							imageUriOne={require("../assets/woman.png")}
							imageUriTwo={require("../assets/teddy.png")}
							helpDescriptionOne="Pregnancy and Immunization"
							helpDescriptionTwo="Pain Management"
							onPress={() => alert("Whoops, you pressed me!")}
						/>
						<SupportListings
							imageUriOne={require("../assets/travel.png")}
							imageUriTwo={require("../assets/note.png")}
							helpDescriptionOne="Travel Vaccinations"
							helpDescriptionTwo="Vaccine Facts Sheets"
							onPress={() => alert("Whoops, you pressed me!")}
						/>
						<SupportListings
							imageUriOne={require("../assets/date.png")}
							imageUriTwo={require("../assets/book.png")}
							helpDescriptionOne="Provincial Vaccination Schedules"
							helpDescriptionTwo="Further Readings"
							onPress={() => alert("Whoops, you pressed me!")}
						/>
						<View
							style={{
								width: "100%",
								borderWidth: 0.3,
								borderColor: "#d9cece",
							}}
						></View>
					</View>
					<View
						style={{
							flex: 1,
							alignItems: "center",
							justifyContent: "center",
							marginVertical: 10,
						}}
					>
						<TouchableWithoutFeedback
							onPress={() => alert("Whoops, you pressed me!")}
						>
							<Image
								style={{ width: 300, height: 200 }}
								source={require("../assets/footer.png")}
								resizeMode="contain"
							/>
						</TouchableWithoutFeedback>
					</View>
				</ScrollView>
			</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ffffff",
		flex: 1,
		// paddingBottom: "50%",
	},
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingRight: 15,
		marginVertical: 15,
	},
	image: {
		width: "80%",
		height: "100%",
	},
	footerImg: {
		width: "100%",
		height: 350,
	},
	userText: {
		fontSize: 22,
		fontWeight: "500",
		paddingTop: 50,
		paddingBottom: 1,
		paddingLeft: 20,
	},
});
