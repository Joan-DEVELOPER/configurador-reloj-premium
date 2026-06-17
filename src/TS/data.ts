import type{ BoxMaterialData, SphereMaterialData, StrapMaterialData } from "./interface";

// Sets all the inner product data
export const BOX_DATA: BoxMaterialData = {
    materials: [
        { id: "acero_inoxidable", name: "Acero Inoxidable", value: "#8E8E8E", price: 20.00 },
        { id: "oro_rosa", name: "Oro Rosa", value: "#E7C1B8", price: 96.99 }, 
        { id: "titanio_mate", name: "Titanio Mate", value: "#52425A", price: 52.42 }                    
    ]    
};

export const SPHERE_DATA: SphereMaterialData ={
    colors: [
        {
            id: "negro_onyx",
            name: "Negro Onyx",
            value: "#353839",
            price: 20.00,
        },
        {
            id: "azul_marino",
            name: "Azul Marino",
            value: "#006994",
            price: 20.00,
        },
        {
            id: "verde_esmeralda",
            name: "Verde Esmeralda",
            value: "#50C878",
            price: 20.00,
        },      
    ]
}

export const STRAP_DATA: StrapMaterialData = {
    materials: [
        {
            id: "metalico",
            name: "Eslabones Metálicos",
            value: "#cccccc",
            price: 20.00,
        },
        {
            id: "cuero",
            name: "Cuero Italiano",
            value: "#8b4513",
            price: 20.00,
        },
        {
            id: "goma",
            name: "Goma Deportiva",
            value: "#004EA8",
            price: 20.00,
        },
    ]
}