import ActorList from '@/components/screens/actors/ActorList';
import ActorEdit from '@/components/screens/admin/actor/ActorEdit';
import GenreEdit from '@/components/screens/admin/genre/GenreEdit';
import Admin from '@/components/screens/admin/home/Admin';
import MovieEdit from '@/components/screens/admin/movie/MovieEdit';
import UserEdit from '@/components/screens/admin/user/UserEdit';
import GenreList from '@/components/screens/genres/GenreList';
import MovieList from '@/components/screens/movies/MovieList';
import UserList from '@/components/screens/users/UserList';

import { IRoute } from '@/navigation/navigation.types';

export const adminRoutes: IRoute[] = [
	{
		name: 'Admin',
		component: Admin,
		isAdmin: true
	},
	{
		name: 'ActorEdit',
		component: ActorEdit,
		isAdmin: true
	},
	{
		name: 'ActorList',
		component: ActorList,
		isAdmin: true
	},
	{
		name: 'GenreEdit',
		component: GenreEdit,
		isAdmin: true
	},
	{
		name: 'GenreList',
		component: GenreList,
		isAdmin: true
	},
	{
		name: 'MovieEdit',
		component: MovieEdit,
		isAdmin: true
	},
	{
		name: 'MovieList',
		component: MovieList,
		isAdmin: true
	},
	{
		name: 'UserEdit',
		component: UserEdit,
		isAdmin: true
	},
	{
		name: 'UserList',
		component: UserList,
		isAdmin: true
	}
];
