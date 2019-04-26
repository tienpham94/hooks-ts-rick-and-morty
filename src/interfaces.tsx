export interface IState {
  episodes: IEpisode[];
  favourites: any[];
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IEpisode {
  airdate: string;
  airtime: string;
  airstamp: string;
  id: number;
  image: { medium: string; original: string };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}
