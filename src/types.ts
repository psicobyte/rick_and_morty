
export interface QueryData {
    key: string
    page?: string
}
export interface Location {
    name: string;
    url: string;
}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

export interface PaginationData {
    current: number
    max: number
    baseUrl: string
}
