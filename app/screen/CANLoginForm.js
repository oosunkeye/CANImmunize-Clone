import React, { useContext, useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Platform,
	StyleSheet,
	StatusBar,
	Alert,
	Button,
	Image,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Fontisto } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { Formik } from "formik";
import * as Yup from "yup";
import jwt_decode from "jwt-decode";

import Axios from "axios";
import useAuth from "../auth/useAuth";

import AuthContext from "../auth/context";
import AuthToken from "../auth/storage";

import { useTheme } from "react-native-paper";
import AppText from "../components/AppText";
import ActivityIndicator from "../components/CanActivityIndicator";

import DoneButton from "react-native-keyboard-done-button";

const SignupSchema = Yup.object().shape({
	emailInput: Yup.string()
		.min(3, "Too Short!")
		.max(100, "Too Long!")
		.required("Required"),
	passwordInput: Yup.string()
		.min(3, "Too Short!")
		.max(100, "Too Long!")
		.required("Required"),
});

const TestLoginForm = ({ navigation }) => {
	const authContext = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const [loader, setLoader] = useState(false);
	const [msgError, setMsgError] = useState("test");
	const [loginFail, setLoginFail] = useState(false);

	const [data, setData] = React.useState({
		username: "",
		password: "",
		check_textInputChange: false,
		secureTextEntry: true,
		isValidUser: true,
		isValidPassword: true,
	});

	const { colors } = useTheme();

	// const { signIn } = React.useContext(AuthContext);

	const textInputChange = (val) => {
		if (val.trim().length >= 4) {
			setData({
				...data,
				username: val,
				check_textInputChange: true,
				isValidUser: true,
			});
		} else {
			setData({
				...data,
				username: val,
				check_textInputChange: false,
				isValidUser: false,
			});
		}
	};

	const handlePasswordChange = (val) => {
		if (val.trim().length >= 8) {
			setData({
				...data,
				password: val,
				isValidPassword: true,
			});
		} else {
			setData({
				...data,
				password: val,
				isValidPassword: false,
			});
		}
	};

	const updateSecureTextEntry = () => {
		setData({
			...data,
			secureTextEntry: !data.secureTextEntry,
		});
	};

	const handleValidUser = (val) => {
		if (val.trim().length >= 4) {
			setData({
				...data,
				isValidUser: true,
			});
		} else {
			setData({
				...data,
				isValidUser: false,
			});
		}
	};

	const submitted = ({ emailInput, passwordInput }) => {
		setLoading(true);

		Axios.post("https://swifttransfer.herokuapp.com/login", {
			user: emailInput,
			pass: passwordInput,
		}).then((result) => {
			if (!result.data.message) {
				// if (loader) {
				// 	setTimeout(() => {
				// 		setLoading(false);
				// 	}, 9000);
				// }
				// setLoader(true);
				callLoader();
				const user = jwt_decode(result.data);
				authContext.setUser(user);
				AuthToken.storeToken(result.data);
				console.log(result.data);
			} else {
				console.log("Empty");
				setLoading(false);
				setMsgError(result.data.message);
				setMsgError("Invalid e-mail or password");
				setLoginFail(true);
				// console.log(msgError);
			}
		});
	};

	const callLoader = () => {
		setTimeout(() => {
			setLoading(false);
		}, 9000);
	};

	const DismissKeyboard = ({ children }) => (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			{children}
		</TouchableWithoutFeedback>
	);
	return (
		<>
			<ActivityIndicator visible={loading} />

			<View style={styles.container}>
				<StatusBar backgroundColor="#009387" barStyle="dark-content" />
				<Formik
					initialValues={{ emailInput: "", passwordInput: "" }}
					onSubmit={submitted}
					// onSubmit={(values) => console.log(values)}
					validationSchema={SignupSchema}
				>
					{({
						handleChange,
						handleSubmit,
						errors,
						setFieldTouched,
						touched,
						values,
					}) => (
						<>
							<View style={styles.header}>
								<View style={styles.LogoContainer}>
									<Image
										source={require("../assets/canMainLogo.png")}
										style={styles.mainLogo}
									/>
								</View>
								<AppText style={styles.text_header}>
									Please enter your email address and password
								</AppText>
							</View>

							<Animatable.View
								animation="fadeInUp"
								style={[
									styles.footer,
									{
										backgroundColor: "#ffffff",
									},
								]}
							>
								{loginFail && (
									<Animatable.View animation="fadeInLeft" duration={500}>
										<AppText style={styles.loginMsg}>{msgError}</AppText>
									</Animatable.View>
								)}
								<AppText
									style={[
										styles.text_footer,
										{
											color: colors.text,
										},
									]}
								>
									Email
								</AppText>
								<View style={styles.action}>
									<Fontisto name="email" size={22} color={colors.text} />
									<TextInput
										placeholder="Enter your e-mail"
										placeholderTextColor="#666666"
										style={[
											styles.textInput,
											{
												color: colors.text,
											},
										]}
										autoCapitalize="none"
										onChangeText={handleChange("emailInput")}
										onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
									/>
									{data.check_textInputChange ? (
										<Animatable.View animation="bounceIn">
											<Feather name="check-circle" color="green" size={20} />
										</Animatable.View>
									) : null}
								</View>
								{touched.emailInput && errors.emailInput && (
									<Animatable.View animation="fadeInLeft" duration={500}>
										<AppText style={styles.errorMsg}>
											{errors.emailInput}
										</AppText>
									</Animatable.View>
								)}

								<AppText
									style={[
										styles.text_footer,
										{
											color: colors.text,
											marginTop: 35,
										},
									]}
								>
									Password
								</AppText>
								<View style={styles.action}>
									{/* <Feather name="lock" color={colors.text} size={20} /> */}
									<AntDesign name="lock1" size={23} color={colors.text} />
									<TextInput
										placeholder="Enter your Password"
										placeholderTextColor="#666666"
										secureTextEntry={data.secureTextEntry ? true : false}
										style={[
											styles.textInput,
											{
												color: colors.text,
											},
										]}
										autoCapitalize="none"
										onChangeText={handleChange("passwordInput")}
									/>
									<TouchableOpacity onPress={updateSecureTextEntry}>
										{data.secureTextEntry ? (
											<Feather name="eye" color="grey" size={20} />
										) : (
											<MaterialCommunityIcons
												name="eye-off"
												size={20}
												color="grey"
											/>
										)}
									</TouchableOpacity>
								</View>
								{touched.passwordInput && errors.passwordInput && (
									<Animatable.View animation="fadeInLeft" duration={500}>
										<AppText style={styles.errorMsg}>
											{errors.passwordInput}
										</AppText>
									</Animatable.View>
								)}

								<View style={styles.button}>
									<TouchableOpacity
										style={styles.signIn}
										onPress={handleSubmit}
									>
										<LinearGradient
											colors={["#016fab", "#314c6b"]}
											style={styles.signIn}
										>
											<AppText
												style={[
													styles.textSign,
													{
														color: "#fff",
													},
												]}
											>
												Login
											</AppText>
										</LinearGradient>
									</TouchableOpacity>
									<TouchableOpacity
										onPress={() => navigation.navigate("TestForgotPassword")}
									>
										{/* <Text style={{ color: "#009387", marginTop: 15 }}>
										Forgot password?
									</Text> */}
										<AppText style={{ color: "#009387", marginTop: 25 }}>
											{" "}
											Forgot password?
										</AppText>
									</TouchableOpacity>
								</View>
							</Animatable.View>
						</>
					)}
				</Formik>
				<DoneButton
					title="Done" //not required, default value = `Done`
					style={{ backgroundColor: "#d3dee6" }} //not required
					// doneStyle={styles.Keyboard}
					doneStyle={{
						fontSize: 20,
						fontWeight: "500",
						// paddingRight: 50,
						color: "blue",
					}} //not required
				/>
			</View>
		</>
	);
};

export default TestLoginForm;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
	},
	header: {
		flex: 1,
		justifyContent: "flex-end",
		paddingHorizontal: 20,
		paddingBottom: 45,
	},
	LogoContainer: {
		alignItems: "center",
	},
	footer: {
		flex: 3,
		// flex: 2,
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
	text_header: {
		color: "#05375a",
		fontWeight: "bold",
		fontSize: 15,
		paddingLeft: 20,
	},
	text_footer: {
		color: "#05375a",
		fontSize: 18,
	},
	action: {
		flexDirection: "row",
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#f2f2f2",
		paddingBottom: 5,
	},
	actionError: {
		flexDirection: "row",
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#FF0000",
		paddingBottom: 5,
	},
	textInput: {
		flex: 1,
		marginTop: Platform.OS === "ios" ? 0 : -12,
		paddingLeft: 10,
		color: "#05375a",
		fontSize: 18,
	},
	errorMsg: {
		color: "#FF0000",
		fontSize: 14,
	},
	loginMsg: {
		color: "#FF0000",
		fontSize: 18,
		alignSelf: "center",
	},
	button: {
		alignItems: "center",
		marginTop: 50,
	},
	signIn: {
		width: "100%",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 25,
	},
	textSign: {
		fontSize: 18,
		fontWeight: "bold",
	},
	mainLogo: {
		height: 130,
		width: 130,
	},
	iconContainer: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
	},
	goBackBtn: {
		position: "absolute",
		alignSelf: "flex-start",
		top: 60,
		paddingLeft: 20,
	},
});
