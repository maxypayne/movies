export interface MovieInterface {
  id?: number;
  title?: string;
  name?: string;
  adult?: boolean
  backdrop_path?: string
  belongs_to_collection?: {
    id?: number,
    name?: string,
    poster_path?: string, 
    backdrop_path?: string
  }
  budge?: number
  genres?: [{id: string; name: string}];
  homepage?: string;
  images?: {
    backdrops?: [];
    logos?: [];
    posters?: []
  }
  imdb_id?: string
  original_language?: string
  original_title?: string
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: []
  production_countries?: []
  release_date?: string;
  first_air_date?: string;
  revenue?: number
  runtime?: number
  spoken_languages?: []
  status?: string;
  tagline?: string;
  video?: false;
  vote_average?: number;
  vote_count?: number;
}