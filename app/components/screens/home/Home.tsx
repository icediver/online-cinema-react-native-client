import { FC } from 'react';

import Carousel from '@/components/screens/home/carousel/Carousel';
import { useGetAllMovies } from '@/components/screens/home/useGetAllMovies';
import { Layout, Loader } from '@/components/ui';

const Home: FC = () => {
	const { movies, isLoading } = useGetAllMovies();
	return (
		<Layout>
			{isLoading ? <Loader /> : movies?.length && <Carousel movies={movies} />}
		</Layout>
	);
};

export default Home;
