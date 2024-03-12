import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StoryUser from '../StoryUser';
import useRedux from '@/hooks/useRedux';

function HomeHeader() {
	const [isExpand, setIsExpand] = useState<boolean>(false);
	const handleExpand = () => setIsExpand(() => !isExpand);

	return (
		<SafeAreaView style={{ backgroundColor: 'white' }}>
			<View style={styles.container}>
				<Image source={require('../../assets/images/IG logo.png')}></Image>
				<TouchableOpacity onPress={handleExpand}>
					{isExpand ? (
						<Text>
							Collapse Stories <MaterialIcons name="expand-less" size={20} />
						</Text>
					) : (
						<Text>
							Expand Stories <MaterialIcons name="expand-more" size={20} />
						</Text>
					)}
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 13,
		paddingVertical: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export default HomeHeader;
