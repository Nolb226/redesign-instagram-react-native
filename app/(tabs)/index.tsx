import data from '@/__mock__';
import HomeHeader from '@/components/HomeHeader';
import Post from '@/components/Post';
import StoryUser from '@/components/StoryUser';
import useRedux from '@/hooks/useRedux';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

function Page() {
	const { appSelector } = useRedux();
	const { avatar } = appSelector((s) => s.auth);
	return (
		<View style={{ backgroundColor: 'white' }}>
			<Stack.Screen
				options={{
					header: () => <HomeHeader />,
				}}
			/>
			<ScrollView overScrollMode="never">
				<View style={styles.story_tray}>
					<View style={styles.current_user_story}>
						<View style={{ position: 'relative' }}>
							<Image
								source={{ uri: avatar }}
								width={68}
								height={68}
								style={{
									borderRadius: 50,
								}}
							/>
							<AntDesign
								name="pluscircle"
								color={'#1FA1FF'}
								size={20}
								style={{
									position: 'absolute',
									bottom: 0,
									right: 0,
									backgroundColor: 'white',
									borderRadius: 50,
								}}
							/>
						</View>
						<Text
							style={{ fontSize: 12, textAlign: 'center', color: '#6e6e6e' }}
						>
							Your story
						</Text>
					</View>

					<StoryUser
						user_avatar="https://instagram.fsgn8-4.fna.fbcdn.net/v/t51.2885-19/290207040_734245747618713_2481228065974228808_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fsgn8-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=JEZx07c74f8AX-iOZE2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBpyQ79tF54EfvAswChHLu0lWvGGpBPMRjvPOdGvoMELA&oe=65C0E5D4&_nc_sid=8b3546"
						user_name="_ntt.hy_"
					/>
				</View>
				<Post {...data[0]} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	story_tray: {
		flexDirection: 'row',
		gap: 12,
		paddingLeft: 8,
	},

	current_user_story: {
		gap: 6,
	},
});

export default Page;
