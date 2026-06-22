import Aurora from '@/app/components/ui/animated/Aurora';
import DarkVeil from '@/app/components/ui/animated/DarkVeil';

import { IconArrowUp } from '@tabler/icons-react';

export default function Home() {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-black">

      <div className="absolute inset-0 z-0 w-screen h-screen overflow-hidden">
        {/* <Aurora
          colorStops={["#27ff84", "#10B981", "#06B6D4"]}
          amplitude={0.3}
          blend={1}
        /> */}

        <DarkVeil
          hueShift={130}
          noiseIntensity={0}
          scanlineIntensity={1}
          speed={1.1}
          scanlineFrequency={0}
          warpAmount={1}
          resolutionScale={1.75}
        />
      </div>

      <div className="w-1/2 h-full grid grid-rows-[6fr_1fr] py-10 z-10">

        <div className="flex flex-col gap-0.5 justify-center">
          <h1 className="text-white text-4xl tracking-tight">Bienvenido de vuelta</h1>
          <h2 className="text-white text-xl">¿Como puedo ayudarte hoy?</h2>
        </div>

        <div className="flex items-center h-16 gap-x-1">
          <input type="text" placeholder="Preguntarle a Keidot"
            className="flex items-center justify-center w-full h-full py-2 px-6 rounded-full 
           bg-white/10 ring ring-inset ring-white/10 self-end
            backdrop-blur-3xl"
          />

          <button className='flex items-center justify-center bg-black/10 backdrop-blur-2xl ring ring-inset ring-white/10 rounded-full h-full aspect-square '>
            <IconArrowUp stroke={2} />
          </button>
        </div>

      </div>
    </div>
  );
}
