import React from 'react';
import { LinkProps } from './Link.type';
import { Linking, StyleSheet, Text } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

function Link({ children, url }: LinkProps) {
	const href = () => Linking.openURL(url);
	return (
		<Text style={styles.container} onPress={href}>
			<Fontisto
				name="link"
				size={14}
				color={'#004c8b'}
				style={{ opacity: 0.6 }}
			/>{' '}
			<Text style={styles.url}>{children}</Text>
		</Text>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#000db31a',
		paddingHorizontal: 8,
		alignSelf: 'flex-start',
		borderRadius: 5,
	},
	url: {
		lineHeight: 24,
		color: '#004c8b',
	},
});

export default Link;
