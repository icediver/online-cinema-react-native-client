import Favorites from '@/components/screens/favorites/Favorites';
import Home from '@/components/screens/home/Home';
import Profile from '@/components/screens/profile/Profile';
import Search from '@/components/screens/search/Search';
import Trending from '@/components/screens/trending/Trending';

import { IRoute } from './navigation.types';
import { adminRoutes } from '@/navigation/admin.routes';

export const userRoutes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Favorites',
		component: Favorites
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Trending',
		component: Trending
	},
	{
		name: 'Search',
		component: Search
	}
];

export const routes = [...userRoutes, ...adminRoutes];
