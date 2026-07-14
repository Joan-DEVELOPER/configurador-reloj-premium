import CTAButton from "../Component/CTAButton";
import { BOX_DATA, SPHERE_DATA, STRAP_DATA } from '../TS/data';

export default function LeftColumn(){
    return(
        <div className="w-[40%] h-[100vh] grid outline justify-center justify-items-center text-center pt-5 font-[Arial]">
            <h2 className="text-3xl font-bold">Opciones de configuración</h2>

            <div className="h-[80%] w-[100%]">
                <h1 className="text-2xl">Caja</h1>
                <div className="mt-[5px] w-full flex justify-center gap-7 text-lg outline">
                    {BOX_DATA.materials.map((material)=>(
                        <div>
                            <p>{material.name}</p>
                            <button className="w-5 h-5 outline rounded-full m-2" style={{backgroundColor: material.value}}></button>
                        </div>
                        
                    )
                    )}
                </div>      

                <h1 className="text-2xl mt-[25px]">Esfera</h1>
                <div className="mt-[5px] w-full flex justify-center gap-7 text-lg outline">
                    {SPHERE_DATA.colors.map((color)=>(
                        <div>
                            <h4>{color.name}</h4>
                            <button className="w-5 h-5 outline rounded-full m-2" style={{backgroundColor: color.value}}></button>
                        </div>
                        
                    )
                    )}
                </div>

                <h1 className="text-2xl mt-[25px]">Correa</h1>
                <div className="mt-[5px] w-full flex justify-center gap-7 text-lg outline">
                    {STRAP_DATA.materials.map((material)=>(
                        <div>
                            <h4>{material.name}</h4>
                            <button className="w-5 h-5 outline rounded-full m-2" style={{backgroundColor: material.value}}></button>
                        </div>                        
                    )
                    )}
                </div>                     
                
            </div>

            <div className="h-[10%]">
                <CTAButton label="Proceder a la compra" />
            </div>
            
        </div>
    );
}