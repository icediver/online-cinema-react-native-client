import { FC } from 'react';

import { AdminTableHeader, Layout } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';
import AdminTable from '@/components/ui/admin/table/AdminTable';

import { useGenres } from './useGenres';

const GenreList: FC = () => {
	const { control, isLoading, data, deleteAsync, createAsync } = useGenres();
	return (
		<Layout isHasPadding>
			<AdminNavigation title={'Genres'} />
			<AdminTableHeader control={control} onPress={createAsync} />
			<AdminTable
				tableItems={data}
				isLoading={isLoading}
				headerItems={['Name', 'Slug']}
				removeHandler={deleteAsync}
			/>
		</Layout>
	);
};

export default GenreList;
