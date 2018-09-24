import React from "react";
import PropTypes from "prop-types";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import styles from "./styles";

const Container = ({ children, backgroundColor }) => {
	// const containerStyles = [
	// 	styles.container,
	// 	backgroundColor ? { backgroundColor } : null
	// ];
	const containerStyles = [styles.container];
	if (backgroundColor) {
		containerStyles.push({ backgroundColor });
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={containerStyles}>{children}</View>
		</TouchableWithoutFeedback>
	)
};

Container.propsTypes = {
	children: PropTypes.any,
	backgroundColor: PropTypes.backgroundColor
};

export default Container;
