import { IActor } from '@/shared/types/actor.interface';
import { IGenre } from '@/shared/types/genre.interface';

export interface IParamerers {
	year: number;
	duration: number;
	country: string;
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
