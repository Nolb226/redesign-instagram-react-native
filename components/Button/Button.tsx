import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from './Button.type';

function Button({ children, style }: ButtonProps) {
	return (
		<TouchableOpacity style={[style, styles.button]}>
			<Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
				{children}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#EFEFEF',
		paddingVertical: 7,
		textAlign: 'center',
	},
});

export default Button;
