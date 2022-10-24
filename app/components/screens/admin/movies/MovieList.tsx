import { FC } from 'react';

import { AdminTableHeader, Layout } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';
import AdminTable from '@/components/ui/admin/table/AdminTable';

import { useMovies } from './useMovies';

const MovieList: FC = () => {
	const { control, isLoading, data, deleteAsync, createAsync } = useMovies();
	return (
		<Layout isHasPadding>
			<AdminNavigation title={'Movies'} />
			<AdminTableHeader control={control} onPress={createAsync} />
			<AdminTable
				tableItems={data}
				isLoading={isLoading}
				headerItems={['Title', 'Main genre', 'rating']}
				removeHandler={deleteAsync}
			/>
		</Layout>
	);
};

export default MovieList;
