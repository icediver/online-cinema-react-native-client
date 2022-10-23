import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';

import Auth from '@/components/screens/auth/Auth';

import { useAuth } from '@/hooks/useAuth';

import { TypeRootStackParamList } from '@/navigation/navigation.types';
import { routes, userRoutes } from '@/navigation/user.routes';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const PrivateNavigator: FC = () => {
	const { user } = useAuth();
	// const user = { isAdmin: false };

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: '#090909'
				}
			}}
		>
			{user ? (
				user.isAdmin ? (
					routes.map(route => <Stack.Screen key={route.name} {...route} />)
				) : (
					userRoutes.map(route => <Stack.Screen key={route.name} {...route} />)
				)
			) : (
				<Stack.Screen component={Auth} name={'Auth'} />
			)}
		</Stack.Navigator>
	);
};

export default PrivateNavigator;
