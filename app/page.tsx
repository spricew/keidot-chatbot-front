import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-black">
      <div className="w-1/2 h-full flex flex-col justify-center p-4">
        <h1 className="text-white text-4xl tracking-tight">Bienvenido de vuelta</h1>
        <h1 className="text-white text-2xl">¿Como puedo ayudarte hoy?</h1>
        
        <input type="text" placeholder="Buscar"
         className="flex items-center justify-center w-full h-16 rounded-full bg-surface-container ring ring-white/20" />
      </div>

    </div>
  );
}
