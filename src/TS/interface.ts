import {type boxMaterial as BoxMaterial, type sphereMaterial as SphereMaterial, type strapMaterial as StrapMaterial} from '../types/type';

export interface WatchOption {
    id: BoxMaterial | SphereMaterial | StrapMaterial
    name: string
    value: string
    additionalPrice: number
}

export interface Category {
    title: string
    options: WatchOption[]
}

export interface WatchSelectState {
    box: BoxMaterial
    sphere: SphereMaterial
    strap: StrapMaterial
}

export interface BoxMaterialData {
    materials: {
        id: BoxMaterial;
        name: string;
        value: string;
        price: number;
    }[];
}

export interface SphereMaterialData {
    colors: {
        id: SphereMaterial;
        name: string;
        value: string;
        price: number;
    }[];
}

export interface StrapMaterialData {
    materials: {
        id: StrapMaterial;
        name: string;
        value: string;
        price: number;
    }[];
}