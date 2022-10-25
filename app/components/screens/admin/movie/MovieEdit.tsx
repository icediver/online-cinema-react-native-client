import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';

import { useAdminActors } from '@/components/screens/admin/movie/useAdminActors';
import { useAdminGenres } from '@/components/screens/admin/movie/useAdminGenres';
import { useMovieEdit } from '@/components/screens/admin/movie/useMovieEdit';
import { Button, Field, Layout, Loader } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';
import Dropdown from '@/components/ui/form-elements/drop-down/Dropdown';
import SlugWrapper from '@/components/ui/form-elements/field/SlugWrapper';
import UploadField from '@/components/ui/form-elements/upload-field/UploadField';

import { IMovieEditInput } from '@/shared/types/movie.interface';

import { generateSlug } from '@/utils/generateSlug';

const MovieEdit: FC = () => {
	const { control, setValue, handleSubmit, getValues } =
		useForm<IMovieEditInput>({ mode: 'onChange' });
	const { isLoading, onSubmit } = useMovieEdit(setValue);

	const { isLoading: isGenresLoading, data: genres } = useAdminGenres();
	const { isLoading: isActorsLoading, data: actors } = useAdminActors();

	return (
		<Layout isHasPadding>
			<AdminNavigation title={'Edit Movie'} isBackButton />
			<View>
				{isLoading ? (
					<Loader />
				) : (
					<ScrollView showsVerticalScrollIndicator={false}>
						<Field<IMovieEditInput>
							control={control}
							name={'title'}
							placeholder={'Enter name'}
							rules={{
								required: 'Name is required'
							}}
						/>
						<SlugWrapper
							generate={() => {
								setValue('slug', generateSlug(getValues('title')));
							}}
						>
							<Field<IMovieEditInput>
								control={control}
								name={'slug'}
								placeholder={'Enter slug'}
								rules={{
									required: 'Name is required'
								}}
							/>
						</SlugWrapper>

						<Field
							control={control}
							name={'parameters.country'}
							placeholder={'Enter country'}
							rules={{ required: 'Coutry is requered!' }}
						/>
						<View className={'flex-row flex-wrap justify-between'}>
							<View style={{ width: '56%' }}>
								<Field<IMovieEditInput>
									placeholder={'Enter duration (min.)'}
									control={control}
									name={'parameters.duration'}
									rules={{ required: 'Duration required!' }}
								/>
							</View>
							<View style={{ width: '40%' }}>
								<Field<IMovieEditInput>
									control={control}
									name={'parameters.year'}
									placeholder={'Enter year'}
									rules={{ required: 'Year is required!' }}
									keyboardType={'number-pad'}
								/>
							</View>
						</View>
						<Controller
							control={control}
							name={'genres'}
							render={({ field, fieldState: { error } }) => (
								<Dropdown
									options={genres}
									field={field}
									isMulti
									error={error}
									style={{ zIndex: 11 }}
								/>
							)}
							rules={{
								required: 'Please select at least one genre!'
							}}
						/>

						<Controller
							name='actors'
							control={control}
							rules={{
								required: 'Please dropdown at least one actor!'
							}}
							render={({ field, fieldState: { error } }) => (
								<Dropdown
									field={field}
									options={actors}
									isMulti
									error={error}
								/>
							)}
						/>

						<Controller
							control={control}
							name={'poster'}
							defaultValue={''}
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<UploadField
									onChange={onChange}
									value={value}
									error={error}
									folder={'movies'}
									placeholder={'Poster'}
								/>
							)}
							rules={{
								required: 'Poster is required'
							}}
						/>
						<Controller
							control={control}
							name={'videoUrl'}
							defaultValue={''}
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<UploadField
									onChange={onChange}
									value={value}
									error={error}
									folder={'movies'}
									placeholder={'Video'}
									isNoImage
									gradient={['#4361A6', '#254584']}
								/>
							)}
							rules={{
								required: 'Video is required'
							}}
						/>

						<Button onPress={handleSubmit(onSubmit)} icon={'pen-tool'}>
							Update
						</Button>
					</ScrollView>
				)}
			</View>
		</Layout>
	);
};

export default MovieEdit;
