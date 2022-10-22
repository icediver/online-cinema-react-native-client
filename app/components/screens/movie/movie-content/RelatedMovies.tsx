import { FC } from 'react';
import { ListRenderItemInfo, Text, View } from 'react-native';

import { useGetRelatedMovies } from '@/components/screens/movie/movie-content/useGetRelatedMovies';
import { Loader, MovieItem } from '@/components/ui';
import HorizontalList from '@/components/ui/blur-button/HorizontalList';

import { IMovie } from '@/shared/types/movie.interface';

interface IRelatedMovies {
	genresIds: string[];
	currentMovieId: string;
}

const RelatedMovies: FC<IRelatedMovies> = ({ currentMovieId, genresIds }) => {
	const { data, isLoading } = useGetRelatedMovies(genresIds, currentMovieId);
	if (isLoading) return <Loader />;
	if (!data?.length) return null;
	return (
		<View className={'my-8'}>
			<Text className={'text-white text-2xl font-semibold mb-5'}>
				RelatedMovie
			</Text>
			<HorizontalList
				snapToInterval={160}
				data={data}
				//@ts-ignore
				renderItem={({ item: movie, index }: ListRenderItemInfo<IMovie>) => (
					<MovieItem
						index={index}
						movie={movie}
						key={movie._id}
						style={{ width: 144, marginRight: 16 }}
					/>
				)}
			/>
		</View>
	);
};

export default RelatedMovies;
