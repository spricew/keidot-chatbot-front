import Aurora from '@/app/components/ui/animated/Aurora';

export default function Home() {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-black">

      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#27ff84", "#10B981", "#06B6D4"]}
          amplitude={0.3}
          blend={1}
        />
      </div>

      <div className="w-1/2 h-full grid grid-rows-[3fr_1fr] z-10">

        <div className="flex flex-col gap-0.5 justify-center">
          <h1 className="text-white text-4xl tracking-tight">Bienvenido de vuelta</h1>
          <h2 className="text-white text-xl">¿Como puedo ayudarte hoy?</h2>
        </div>

        <div className="h-full flex pb-12">
          <input type="text" placeholder="Preguntarle a Keidot"
            className="flex items-center justify-center w-full h-14 py-2 px-6 rounded-full 
          bg-surface-container ring ring-white/20 self-end"
          />
        </div>

      </div>
    </div>
  );
}
