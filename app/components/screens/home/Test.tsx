import axios from 'axios';
import { FC } from 'react';
import { Pressable, Text } from 'react-native';

import { API_URL } from '@/config/api.config';

const Test: FC = () => {
	const handlePress = () => {
		const response = axios
			.get(API_URL + '/movies')
			.then(res => console.log('response', JSON.stringify(res.data)))
			.catch(error => console.log('error', JSON.stringify(error.response)));
	};

	return (
		<Pressable onPress={handlePress}>
			<Text style={{ color: 'white' }}>Test</Text>
		</Pressable>
	);
};

export default Test;
