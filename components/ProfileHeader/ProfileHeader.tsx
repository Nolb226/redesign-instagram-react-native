import useRedux from '@/hooks/useRedux';
import { Entypo, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function ProfileHeader() {
	const { appSelector } = useRedux();
	const { name } = appSelector((s) => s.auth);

	return (
		<SafeAreaView style={{ backgroundColor: '#fff' }}>
			<View style={styles.container}>
				<Text style={styles.profile_name}>
					{name} <FontAwesome5 name="chevron-down" size={16} />
				</Text>
				<View
					style={{
						flexDirection: 'row',
						gap: 16,
					}}
				>
					<Feather name="bookmark" size={24} />
					<Feather name="menu" size={24} />
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 14,
		flexDirection: 'row',
	},
	profile_name: {
		fontSize: 20,
		lineHeight: 40,
		fontWeight: 'bold',
	},
});

export default ProfileHeader;
