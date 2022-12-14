import { FC } from 'react';

import { useActor } from '@/components/screens/actor/useActor';
import { Layout, Loader, MovieCatalog } from '@/components/ui';
import NotFound from '@/components/ui/NotFound';

const Actor: FC = () => {
	const { isLoading, movies, actor } = useActor();
	if (isLoading) return <Loader />;
	return (
		<Layout isHasPadding>
			{actor ? (
				<MovieCatalog title={actor.name} movies={movies} isBackButton />
			) : (
				<NotFound />
			)}
		</Layout>
	);
};

export default Actor;
