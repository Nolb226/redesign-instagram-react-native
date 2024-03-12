import Button from '@/components/Button';
import Link from '@/components/Link';
import ProfileHeader from '@/components/ProfileHeader';
import ProfilePager from '@/components/ProfilePager';
import useRedux from '@/hooks/useRedux';
import { Feather } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function Page() {
	const { appSelector } = useRedux();
	const { avatar, total_followers, total_followings, total_posts, username } =
		appSelector((s) => s.auth);
	return (
		<View style={{ backgroundColor: '#fff', flex: 1 }}>
			<Stack.Screen
				options={{
					header: () => <ProfileHeader />,
				}}
			/>
			<View style={styles.user_profile_data}>
				<Image
					source={{
						uri: avatar,
					}}
					style={styles.user_avatar}
				/>
				<View style={{ flexDirection: 'row', gap: 24 }}>
					<View style={styles.data}>
						<Text style={styles.data_number}>{total_posts}</Text>
						<Text style={styles.data_text}>Posts</Text>
					</View>
					<View style={styles.data}>
						<Text style={styles.data_number}>{total_followers}</Text>
						<Text style={styles.data_text}>Followers</Text>
					</View>
					<View style={styles.data}>
						<Text style={styles.data_number}>{total_followings}</Text>
						<Text style={styles.data_text}>Followings</Text>
					</View>
				</View>
			</View>
			<View style={styles.user_info}>
				<View>
					<Text style={styles.username}>{username}</Text>
					<Text style={styles.genre_text}>He/Him</Text>
					{/* <Text>Em yêu bồ em!!!</Text> */}
				</View>
				<View>
					<Link url="https://www.facebook.com/hon3123">
						www.facebook.com/hon3123
					</Link>
				</View>
				<View style={styles.buttons}>
					<Button style={{ flex: 2 }}>Edit Profile</Button>
					<Button style={{ paddingHorizontal: 7 }}>
						<Feather name="user-plus" size={20} />
					</Button>
				</View>
			</View>
			<ProfilePager />
		</View>
	);
}

const styles = StyleSheet.create({
	user_profile_data: {
		paddingHorizontal: 12,
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
	},
	user_avatar: {
		width: 84,
		height: 84,
		borderRadius: 50,
	},
	data: {},
	data_text: {},
	data_number: {
		fontWeight: 'bold',
		textAlign: 'center',
	},
	user_info: {
		paddingTop: 6,
		paddingBottom: 10,
		paddingHorizontal: 12,
		gap: 12,
	},
	username: {
		fontWeight: 'bold',
	},
	genre_text: {
		color: '#6e6e6e',
	},
	buttons: {
		// flex: 0,
		flexDirection: 'row',
		gap: 6,
	},
});

export default Page;
