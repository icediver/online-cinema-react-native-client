import { FC } from 'react';
import { Control } from 'react-hook-form';
import { View } from 'react-native';

import { ISearchFormData } from '@/components/screens/search/search.interface';
import AdminCreateButton from '@/components/ui/admin/table-header/AdminCreateButton';

import Field from '../../../ui/form-elements/field/Field';

interface IAdminHeader {
	onPress?: () => void;
	control: Control<ISearchFormData>;
}

const AdminHeader: FC<IAdminHeader> = ({ control, onPress }) => {
	return (
		<View className={'flex-row items-center justify-between mb-3'}>
			<View
				style={{
					width: onPress ? '82%' : '100%'
				}}
			>
				<Field<ISearchFormData>
					placeholder={'Type something...'}
					control={control}
					name={'searchTerm'}
					keyboardType={'web-search'}
				/>
			</View>
			{onPress && <AdminCreateButton onPress={onPress} />}
		</View>
	);
};

export default AdminHeader;
