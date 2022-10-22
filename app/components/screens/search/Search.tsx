import { FC } from 'react';
import { View } from 'react-native';

import { ISearchFormData } from '@/components/screens/search/search.interface';
import { useSearch } from '@/components/screens/search/useSearch';
import { Field, Heading, Layout, Loader, MovieCatalog } from '@/components/ui';

const Search: FC = () => {
	const { searchTerm, movies, isLoading, control } = useSearch();

	return (
		<Layout isHasPadding>
			<Heading title={'Search'} />
			<View className={'mt-3'}>
				<Field<ISearchFormData>
					placeholder={'Type something...'}
					control={control}
					name={'searchTerm'}
					keyboardType={'web-search'}
				/>
			</View>
			{!!searchTerm ? (
				<View className={'mt-3'}>
					{isLoading ? <Loader /> : <MovieCatalog title={''} movies={movies} />}
				</View>
			) : null}
		</Layout>
	);
};

export default Search;
