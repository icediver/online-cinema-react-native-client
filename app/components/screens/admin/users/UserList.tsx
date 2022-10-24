import { FC } from 'react';

import { AdminTableHeader, Layout } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';
import AdminTable from '@/components/ui/admin/table/AdminTable';

import { useUsers } from './useUsers';

const UserList: FC = () => {
	const { control, isLoading, data, deleteAsync } = useUsers();
	return (
		<Layout isHasPadding>
			<AdminNavigation title={'Users'} />
			<AdminTableHeader control={control} />
			<AdminTable
				tableItems={data}
				isLoading={isLoading}
				headerItems={['Email', 'Date register']}
				removeHandler={deleteAsync}
			/>
		</Layout>
	);
};

export default UserList;
