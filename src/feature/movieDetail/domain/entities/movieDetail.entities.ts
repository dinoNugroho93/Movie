export interface GenreWorkOrder {
 id:number;
 name:string;
}

export interface CompaniesWorkOrder {
    id:number;
    logo_path:string;
    name:string;
    origin_country:string
}

export interface CountriesWorkOrder {
    iso_3166_1:string;
    name:string;
}

export interface IMovieDetailOrderResponse {
    id: number;
    genres: GenreWorkOrder[];
    production_companies: CompaniesWorkOrder[];
    production_countries: CountriesWorkOrder[];
    release_date: string;
    runtime:number;
    tagline:string;
    title: string;
    backdrop_path: string;
    popularity:number;
    vote_count: number;
}