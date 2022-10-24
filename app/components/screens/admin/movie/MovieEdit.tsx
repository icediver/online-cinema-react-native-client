import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import { useMovieEdit } from '@/components/screens/admin/movie/useMovieEdit';
import { Button, Layout, Loader } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';

import { IMovieEditInput } from '@/shared/types/movie.interface';

const MovieEdit: FC = () => {
	const { control, setValue, handleSubmit, getValues } =
		useForm<IMovieEditInput>({ mode: 'onChange' });
	const { isLoading, onSubmit } = useMovieEdit(setValue);
	return (
		<Layout isHasPadding>
			<AdminNavigation title={'Edit Movie'} isBackButton />
			<View>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<Button onPress={handleSubmit(onSubmit)} icon={'pen-tool'}>
							Update
						</Button>
					</>
				)}
			</View>
		</Layout>
	);
};

export default MovieEdit;
