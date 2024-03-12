import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StoryUserProps } from './StoryUser.type';
import { LinearGradient } from 'expo-linear-gradient';

function StoryUser({ user_avatar, user_name }: StoryUserProps) {
	return (
		<View style={styles.container}>
			<View>
				<LinearGradient
					colors={['#CA1D7E', '#E35157', '#F2703F']}
					start={{ x: 0.0, y: 1.0 }}
					end={{ x: 1.0, y: 1.0 }}
					style={styles.avatar_wrapper}
				>
					<Image source={{ uri: user_avatar }} style={styles.avatar} />
				</LinearGradient>
			</View>
			<Text style={{ textAlign: 'center', fontSize: 13 }}>{user_name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		gap: 6,
		textAlign: 'center',
	},
	avatar: {
		width: 61.5,
		height: 61.5,
		borderColor: '#fff',
		borderWidth: 2.5,
		alignSelf: 'center',
		borderRadius: 50,
	},
	avatar_wrapper: {
		justifyContent: 'center',
		width: 66,
		height: 66,
		borderRadius: 50,
	},
});

export default StoryUser;
