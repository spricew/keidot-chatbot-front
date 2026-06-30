import Aurora from '@/app/components/ui/animated/Aurora';
import DarkVeil from '@/app/components/ui/animated/DarkVeil';

import { IconArrowUp, IconMicrophone, IconSparkles } from '@tabler/icons-react';

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

      <div className="w-full lg:px-96 md:px-40 px-10 h-full grid grid-rows-[6fr_4rem] py-10 z-10">

        <div className="flex flex-col gap-0.5 justify-center">
          <h1 className="text-white text-4xl tracking-tight">Bienvenido de vuelta</h1>
          <h2 className="text-white text-xl">¿Como puedo ayudarte hoy?</h2>
        </div>

        {/* Master Input Container */}
        <div className="relative flex items-center h-full w-full gap-x-2 p-2 rounded-full 
        bg-white/10 backdrop-blur-3xl ring ring-inset ring-white/10 transition-all">

          <div className="pl-3 text-white/60">
            <IconSparkles className="size-6" />
          </div>

          <input
            type="text"
            placeholder="Preguntarle a Keidot"
            className="flex-1 h-full bg-transparent border-none outline-none px-2
            text-white placeholder-white/60"
          />

          <button
            title="enviar"
            className="flex items-center justify-center h-full aspect-square
              rounded-full ring ring-inset ring-white/10
              bg-transparent backdrop-blur-3xl 
              hover:bg-white/10 active:scale-95
              ease-out duration-100 transition-all"
          >
            {/* <IconMicrophone stroke={2} className="h-full" /> */}
            <IconArrowUp stroke={2.5} className="size-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
