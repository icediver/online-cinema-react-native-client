import { FC } from 'react';
import { ScrollView } from 'react-native';

import Statistics from '@/components/screens/admin/home/statistics/Statistics';
import { Layout } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';

const Admin: FC = () => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title={'Statistics'} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Statistics />
			</ScrollView>
		</Layout>
	);
};

export default Admin;
