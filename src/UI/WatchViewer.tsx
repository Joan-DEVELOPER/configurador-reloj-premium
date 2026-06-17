import React from 'react';
import type { boxMaterial, sphereMaterial, strapMaterial } from '../types/type.ts';

export interface WatchConfiguration {
  caja: boxMaterial;
  esfera: sphereMaterial;
  correa: strapMaterial;
}

const ASSETS: {
  caja: Record<boxMaterial, string>;
  esfera: Record<sphereMaterial, string>;
  correa: Record<strapMaterial, string>;
} = {
  caja: {
    acero_inoxidable: '/clock/box_steel.png',
    oro_rosa: '/clock/box_pink_gold.png',
    titanio_mate: '/clock/box_titanium.png',
  },
  esfera: {
    negro_onyx: '/clock/sphere_black.png',
    azul_marino: '/clock/sphere_blue.png',
    verde_esmeralda: '/clock/sphere_green.png',
  },
  correa: {
    metalico: '/clock/strap_metalic.png',
    cuero: '/clock/strap_leather.png',
    goma: '/clock/strap_rubber.png',
  },
};

interface WatchViewerProps {
  config: WatchConfiguration;
}

export const WatchViewer: React.FC<WatchViewerProps> = ({ config }) => {
  return (
    <div className="flex items-center justify-center items-center w-full h-full p-6 bg-neutral-50 rounded-2xl border border-neutral-200/50 shadow-inner">
      <div className="relative w-[450px] h-[450px] flex justify-center items-center select-none">
        
        {/* Capa 1: Correa */}
        <img 
          src={ASSETS.correa[config.correa]} 
          alt="" 
          className="absolute top-0 left-0 w-[450px] h-[450px] object-contain z-10 transition-all duration-300 ease-in-out" 
        />
        
        {/* Capa 2: Esfera */}
        <img 
          src={ASSETS.esfera[config.esfera]} 
          alt="" 
          className="absolute top-0 left-0 w-[25%] h-[25%] mt-[34%] ml-[37.5%] object-contain z-20 transition-all duration-300 ease-in-out justify-self-center" 
        />
        
        {/* Capa 3: Caja */}
        <img 
          src={ASSETS.caja[config.caja]} 
          alt="" 
          className="absolute top-0 left-0 w-[45%] h-[45%] ml-[27.5%] mt-[25%] object-contain z-30 transition-all duration-300 ease-in-out" 
        />
        
      </div>
    </div>
  );
};