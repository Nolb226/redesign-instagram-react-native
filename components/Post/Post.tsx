import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PostProps } from './Post.type';
import { LinearGradient } from 'expo-linear-gradient';
import {
	Entypo,
	Feather,
	FontAwesome6,
	MaterialCommunityIcons,
} from '@expo/vector-icons';

function Post({
	id,
	user_id,
	user_image,
	user_name,
	comments,
	images,
	total_of_likes,
	created_at,
	description,
}: PostProps) {
	return (
		<View style={styles.container}>
			<View style={styles.user_headers}>
				<View style={styles.avatar_info}>
					<LinearGradient
						colors={['#CA1D7E', '#E35157', '#F2703F']}
						start={{ x: 0.0, y: 1.0 }}
						end={{ x: 1.0, y: 1.0 }}
						style={styles.avatar_wrapper}
					>
						<Image source={{ uri: user_image }} style={styles.avatar} />
					</LinearGradient>
					<Text style={styles.username}>{user_name}</Text>
				</View>
				<View>
					<Entypo name="dots-three-horizontal" size={20} color="black" />
				</View>
			</View>
			<View style={styles.post_wrapper}>
				<Image
					source={require(`../../assets/images/gaixinh.jpg`)}
					style={styles.post}
				/>
				<View style={styles.post_info}>
					<View style={styles.icons}>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								gap: 6,
							}}
						>
							<MaterialCommunityIcons name="cards-heart-outline" size={28} />
							<Feather
								name="message-circle"
								size={26}
								style={{
									transform: 'scaleX(-1)',
								}}
							/>
							<FontAwesome6 name="paper-plane" size={24} />
						</View>
						<Feather name="bookmark" size={29} />
					</View>
					<View style={styles.post_description}>
						<Text
							style={{
								fontSize: 14,
								fontWeight: 'bold',
							}}
						>
							{total_of_likes} Likes
						</Text>
						<Text style={{ flexDirection: 'row' }}>
							<Text style={styles.username}>{user_name}</Text>{' '}
							<Text>{description}</Text>
						</Text>
						<Text style={styles.post_time}>{created_at}</Text>
						<View style={styles.comment_wrapper}>
							{comments?.map((comment, i) => (
								<Text style={{ flexDirection: 'row' }}>
									<Text style={styles.username}>{comment.user_name}</Text>{' '}
									<Text>{comment.description}</Text>
								</Text>
							))}
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		paddingBottom: 24,
	},
	user_headers: {
		paddingHorizontal: 16,
		paddingVertical: 7,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	avatar_info: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	avatar_wrapper: {
		height: 45,
		width: 45,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 82 / 2,
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 75 / 2,
		alignSelf: 'center',
		borderColor: '#fff',
		borderWidth: 2,
	},
	username: {
		fontWeight: 'bold',
		fontSize: 14,
	},
	post_wrapper: {},
	post: {
		resizeMode: 'contain',
		alignSelf: 'center',
		height: 400,
		backgroundColor: 'black',
	},
	post_info: {
		paddingLeft: 13,
		paddingRight: 16,
		paddingVertical: 12,
	},
	icons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	post_description: {
		gap: 6,
	},
	post_time: {
		fontSize: 12,
		color: '#6E6E6E',
	},
	comment_wrapper: {
		backgroundColor: 'rgba(0,0,0,0.07)',
		padding: 10,
		borderRadius: 10,
	},
});

export default Post;
