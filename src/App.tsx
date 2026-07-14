import { useState } from 'react';
// 1. Importamos el componente desde su archivo independiente en la carpeta UI
import { WatchViewer } from './UI/WatchViewer'; 
import type { WatchConfiguration } from './UI/WatchViewer'; 

export default function ConfiguratorPage() {
  // 2. Declaramos el estado de la configuración actual del reloj
  const [config, setConfig] = useState<WatchConfiguration>({
    caja: 'acero_inoxidable', // Valor inicial por defecto
    esfera: 'negro_onyx',
    correa: 'metalico',
  });

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white text-black">
      
      {/* PANEL IZQUIERDO: Opciones de configuración */}
      <div className="w-1/2 border-r border-neutral-200 p-12 flex flex-col justify-between overflow-y-auto">
        <div>
          <h1 className="text-3xl font-light tracking-tight text-center mb-12">
            Opciones de configuración
          </h1>

          {/* === SECCIÓN CAJA === */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-center mb-3">Caja</h2>
            <div className="flex justify-center gap-6 p-4 border border-neutral-300 rounded-md">
              <button 
                onClick={() => setConfig(prev => ({ ...prev, caja: 'acero_inoxidable' }))}
                className={`flex flex-col items-center gap-2 p-2 rounded transition ${config.caja === 'acero_inoxidable' ? 'bg-neutral-100 font-semibold' : ''}`}
              >
                <span className="text-sm">Acero Inoxidable</span>
                <span className="w-6 h-6 rounded-full bg-zinc-400 border border-neutral-400 shadow-sm" />
              </button>
              <button 
                onClick={() => setConfig(prev => ({ ...prev, caja: 'oro_rosa' }))}
                className={`flex flex-col items-center gap-2 p-2 rounded transition ${config.caja === 'oro_rosa' ? 'bg-neutral-100 font-semibold' : ''}`}
              >
                <span className="text-sm">Oro Rosa</span>
                <span className="w-6 h-6 rounded-full bg-orange-200 border border-neutral-400 shadow-sm" />
              </button>
              <button 
                onClick={() => setConfig(prev => ({ ...prev, caja: 'titanio_mate' }))}
                className={`flex flex-col items-center gap-2 p-2 rounded transition ${config.caja === 'titanio_mate' ? 'bg-neutral-100 font-semibold' : ''}`}
              >
                <span className="text-sm">Titanio Mate</span>
                <span className="w-6 h-6 rounded-full bg-slate-600 border border-neutral-400 shadow-sm" />
              </button>
            </div>
          </div>

          {/* === SECCIÓN ESFERA === */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-center mb-3">Esfera</h2>
            <div className="flex justify-center gap-6 p-4 border border-neutral-300 rounded-md">
              <button 
                onClick={() => setConfig(prev => ({ ...prev, esfera: 'negro_onyx' }))}
                className={`flex flex-col items-center gap-2 p-2 rounded transition ${config.esfera === 'negro_onyx' ? 'bg-neutral-100 font-semibold' : ''}`}
              >
                <span className="text-sm">Negro Onyx</span>
                <span className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-400 shadow-sm" />
              </button>
              <button 
                onClick={() => setConfig(prev => ({ ...prev, esfera: 'azul_marino' }))}
                className={`flex flex-col items-center gap-2 p-2 rounded transition ${config.esfera === 'azul_marino' ? 'bg-neutral-100 font-semibold' : ''}`}
              >
                <span className="text-sm">Azul Marino</span>
                <span className="w-6 h-6 rounded-full bg-blue-800 border border-neutral-400 shadow-sm" />
              </button>
              <button 
                onClick={() => setConfig(prev => ({ ...prev, esfera: 'verde_esmeralda' }))}
                className={`flex flex-col items-center gap-2 p-2 rounded transition ${config.esfera === 'verde_esmeralda' ? 'bg-neutral-100 font-semibold' : ''}`}
              >
                <span className="text-sm">Verde Esmeralda</span>
                <span className="w-6 h-6 rounded-full bg-emerald-600 border border-neutral-400 shadow-sm" />
              </button>
            </div>
          </div>

          {/* === SECCIÓN CORREA === */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-center mb-3">Correa</h2>
            <div className="flex justify-center gap-6 p-4 border border-neutral-300 rounded-md">
              <button 
                onClick={() => setConfig(prev => ({ ...prev, correa: 'metalico' }))}
                className={`flex flex-col items-center gap-2 p-2 rounded transition ${config.correa === 'metalico' ? 'bg-neutral-100 font-semibold' : ''}`}
              >
                <span className="text-sm">Eslabones Metálicos</span>
                <span className="w-6 h-6 rounded-full bg-zinc-300 border border-neutral-400 shadow-sm" />
              </button>
              <button 
                onClick={() => setConfig(prev => ({ ...prev, correa: 'cuero' }))}
                className={`flex flex-col items-center gap-2 p-2 rounded transition ${config.correa === 'cuero' ? 'bg-neutral-100 font-semibold' : ''}`}
              >
                <span className="text-sm">Cuero Italiano</span>
                <span className="w-6 h-6 rounded-full bg-amber-800 border border-neutral-400 shadow-sm" />
              </button>
              <button 
                onClick={() => setConfig(prev => ({ ...prev, correa: 'goma' }))}
                className={`flex flex-col items-center gap-2 p-2 rounded transition ${config.correa === 'goma' ? 'bg-neutral-100 font-semibold' : ''}`}
              >
                <span className="text-sm">Goma Deportiva</span>
                <span className="w-6 h-6 rounded-full bg-blue-900 border border-neutral-400 shadow-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PANEL DERECHO: Aquí es donde pintamos el componente importado, pasándole el estado */}
      <div className="w-1/2 h-full flex items-center justify-center p-12 bg-neutral-100">
        <WatchViewer config={config} />
      </div>

    </div>
  );
}