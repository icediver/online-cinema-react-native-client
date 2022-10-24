import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';

import { useGenreEdit } from '@/components/screens/admin/genre/useGenreEdit';
import { Button, Field, Layout, Loader } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';
import SlugWrapper from '@/components/ui/form-elements/field/SlugWrapper';
import TextEditor from '@/components/ui/form-elements/text-editor/TextEditor';

import { IGenreEditInput } from '@/shared/types/genre.interface';

import { generateSlug } from '@/utils/generateSlug';

const GenreEdit: FC = () => {
	const { control, setValue, handleSubmit, getValues } =
		useForm<IGenreEditInput>({ mode: 'onChange' });
	const { isLoading, onSubmit } = useGenreEdit(setValue);
	return (
		<Layout isHasPadding>
			<AdminNavigation title={'Edit Genre'} isBackButton />
			<View>
				{isLoading ? (
					<Loader />
				) : (
					<ScrollView showsVerticalScrollIndicator={false}>
						<Field<IGenreEditInput>
							control={control}
							name={'name'}
							placeholder={'Enter name'}
							rules={{
								required: 'Name is required'
							}}
						/>
						<SlugWrapper
							generate={() => {
								setValue('slug', generateSlug(getValues('name')));
							}}
						>
							<Field<IGenreEditInput>
								control={control}
								name={'slug'}
								placeholder={'Enter slug'}
								rules={{
									required: 'Name is required'
								}}
							/>
						</SlugWrapper>
						<Controller
							control={control}
							name={'description'}
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<TextEditor
									onChange={onChange}
									value={value}
									error={error}
									placeholder={'Enter description here'}
								/>
							)}
							defaultValue={''}
							rules={{
								validate: {
									required: value => {
										const replaceHTML = value.replace(/<(.|\n)*?>/g, '').trim();
										const replaceWhiteSpace = replaceHTML
											.replace(/&nbsp;/g, '')
											.trim();
										return (
											replaceWhiteSpace.length > 0 || 'Description required!'
										);
									}
								}
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

export default GenreEdit;
