export interface IActor {
	_id: string;
	photo: string;
	countryMovies: number;
	name: string;
	slug: string;
}

export interface IActorEditInput extends Omit<IActor, '_id'> {}
