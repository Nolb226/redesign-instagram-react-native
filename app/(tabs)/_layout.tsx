import { Tabs } from 'expo-router';
import React from 'react';
import {
	MaterialIcons,
	Octicons,
	Ionicons,
	FontAwesome6,
	MaterialCommunityIcons,
	FontAwesome5,
} from '@expo/vector-icons';
import useRedux from '@/hooks/useRedux';
import { Image, View } from 'react-native';

function Layout() {
	const { appSelector } = useRedux();
	const { avatar } = appSelector((s) => s.auth);
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveTintColor: '#000',
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<Ionicons
							name={focused ? 'home' : 'home-outline'}
							size={size - 4}
							color={color}
						/>
					),
				}}
			></Tabs.Screen>
			<Tabs.Screen
				name="explore"
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<Ionicons
							name={focused ? 'compass' : 'compass-outline'}
							size={size}
							color={color}
						/>
					),
				}}
			></Tabs.Screen>
			<Tabs.Screen
				name="addpost"
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome6 name="plus-square" size={size - 4} color={color} />
					),
				}}
			></Tabs.Screen>
			<Tabs.Screen
				name="inbox"
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<MaterialCommunityIcons
							name={focused ? 'inbox-arrow-down' : 'inbox-arrow-down-outline'}
							size={size}
							color={color}
						/>
					),
				}}
			></Tabs.Screen>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<View
							style={{
								...(focused && {
									borderColor: 'black',
									borderWidth: 2,
									borderRadius: 50,
								}),
							}}
						>
							<Image
								source={{
									uri: avatar,
								}}
								width={size}
								height={size}
								style={{
									borderRadius: 50,
									...(focused && {
										borderWidth: 1.5,
										borderColor: 'white',
									}),
								}}
							/>
						</View>
					),
				}}
			></Tabs.Screen>
		</Tabs>
	);
}

export default Layout;
