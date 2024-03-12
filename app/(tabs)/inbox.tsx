import ProfilePager from '@/components/ProfilePager';
import React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

const FirstRoute = () => <Text>1</Text>;

const SecondRoute = () => <Text>2</Text>;

const renderScene = SceneMap({
	first: FirstRoute,
	second: SecondRoute,
});

function Page() {
	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'first', title: 'First' },
		{ key: 'second', title: 'Second' },
	]);

	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={{ width: layout.width }}
		/>
	);
}

export default Page;
