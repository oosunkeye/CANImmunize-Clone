import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screen/AccountScreen";
import Home from "../screen/Home";
import MessagesScreen from "../screen/MessagesScreen";
import TestPaymentInfo from "../screen/TestPaymentInfo";
import TestAddCard from "../screen/TestAddCard";
import TestEditCard from "../screen/TestEditCard";
import TestFaqs from "../screen/TestFaqs";
import TestPersonalInfo from "../screen/TestPersonalInfo";
import TestCardAdded from "../screen/TestCardAdded";
import { NavigationContainer } from "@react-navigation/native";

//CANIMMUNIZE
import Home from "../screen/Home";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

const HomeNavigator = ({ navigation, route }) => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ headerShown: true }}
				/>
				<Stack.Screen
					name="Account"
					component={AccountScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Messages" component={MessagesScreen} />
				<Stack.Screen
					name="TestPaymentInfo"
					component={TestPaymentInfo}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="TestAddCard"
					component={TestAddCard}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="TestEditCard"
					component={TestEditCard}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="TestFaqs"
					component={TestFaqs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="TestPersonalInfo"
					component={TestPersonalInfo}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="TestCardAdded"
					component={TestCardAdded}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default HomeNavigator;
