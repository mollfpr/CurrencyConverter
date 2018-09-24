import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import styles from "./styles";
import moment from "moment";

const LastConverted = ({ base, qoute, conversionRate, date }) => (
	<Text style={styles.smallText}>
		1 {base} = {conversionRate} {qoute} as of {moment(date).format('MMMM D, YYYY')}
	</Text>
);

LastConverted.propTypes = {
	date: PropTypes.object,
	base: PropTypes.string,
	qoute: PropTypes.string,
	conversionRate: PropTypes.number
};

export default LastConverted;
