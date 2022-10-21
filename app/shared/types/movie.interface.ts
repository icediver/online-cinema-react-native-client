export interface IParamerers {
	year: number;
	duration: number;
	country: string;
}

export interface IGenre {
	_id: string;
	name: string;
	slug: string;
	description: string;
}

interface IActor {
	_id: string;
	photo: string;
	countryMovies: number;
	slug: string;
}

export interface IMovie {
	_id: string;
	poster: string;
	title: string;
	parameters: IParamerers;
	genres: IGenre[];
	actors: IActor[];
	countryOpened: number;
	videoUrl: string;
	rating: number;
	slug: string;
}

export interface IMovieEditInput extends Omit<IMovie, '_id'> {}
