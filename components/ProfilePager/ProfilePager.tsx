import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

const Posts = () => <Text>1</Text>;

const SecondRoute = () => <Text>2</Text>;

const renderScene = SceneMap({
	posts: Posts,
	reels: SecondRoute,
	threads: SecondRoute,
	taggedPosts: SecondRoute,
});

const getTabBarIcon = (props: any) => {
	const { route } = props;
	switch (route.key) {
		case 'posts': {
			return <Icon name="grid-on" size={20} color={props.color} />;
		}
		case 'reels': {
			return <Icon name="movie" size={20} color={props.color} />;
		}
		case 'taggedPosts': {
			return <Octicons name="mention" size={20} color={props.color} />;
		}
		case 'threads': {
			return (
				<MaterialCommunityIcons
					name="text-box-outline"
					size={24}
					color={props.color}
				/>
			);
		}
	}
};

function ProfilePager() {
	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'posts' },
		{ key: 'reels' },
		{ key: 'threads' },
		{ key: 'taggedPosts' },
	]);

	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			renderTabBar={(props) => (
				<TabBar
					{...props}
					indicatorStyle={{ backgroundColor: 'black' }}
					tabStyle={styles.bubble}
					labelStyle={styles.label}
					renderIcon={(props) => {
						return getTabBarIcon(props);
					}}
					style={{
						backgroundColor: 'white',
					}}
					activeColor="black"
					inactiveColor="#C4C4C4"
					scrollEnabled={false}
					pressColor="transparent"
				/>
			)}
			onIndexChange={setIndex}
			initialLayout={{ width: layout.width }}
		/>
	);
}

const styles = StyleSheet.create({
	label: {
		backgroundColor: 'black',
	},
	bubble: {
		backgroundColor: 'transparent',
		// paddingHorizontal: 18,
		paddingTop: 14,
		// paddingVertical: 12,
	},
});

export default ProfilePager;
