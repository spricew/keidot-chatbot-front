'use client'
import { useState, useRef, useEffect } from 'react';
import DarkVeil from '@/app/components/ui/animated/DarkVeil';
import { IconArrowUp, IconMicrophone, IconSparkles } from '@tabler/icons-react';

type Message = {
  id: number;
  text: string;
  isChatbot: boolean;
  funcionEjecutada?: string;
};

export default function Home() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([

  ]);

  // Referencia para hacer scroll automático al final del chat
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!text.trim() || isLoading) return;

    const userText = text;
    setText(""); // input clean up

    const newUserMessage: Message = {
      id: Date.now(),
      text: userText,
      isChatbot: false,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mensaje: userText }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const newBotMessage: Message = {
        id: Date.now() + 1,
        text: data.mensaje_ia,
        isChatbot: true,
        funcionEjecutada: data.tipo === "accion_bd" ? data.funcion_ejecutada : undefined
      };

      setMessages((prev) => [...prev, newBotMessage]);

    } catch (error) {
      console.error("Error al contactar al backend:", error);
      setMessages((prev) => [...prev, {
        id: Date.now() + 1,
        text: "Error al comunicarse con el servidor.",
        isChatbot: true,
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Permite enviar el mensaje al presionar "Enter"
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex w-full h-screen justify-center items-center bg-black relative">

      <div className="absolute inset-0 z-0 w-screen h-screen overflow-hidden">
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

      <div className="w-full lg:px-96 md:px-40 px-10 h-full flex flex-col py-10 z-10">

        {/* Contenedor de Mensajes */}
        <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2">

          {messages.length === 0 && (
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-white text-4xl tracking-tight">Bienvenido de vuelta</h1>
              <h2 className="text-white text-xl">¿Cómo puedo ayudarte hoy?</h2>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={`
                max-w-[75%] w-fit p-4 rounded-3xl
                backdrop-blur-3xl ring ring-inset ring-white/10
                ${message.isChatbot
                  ? "bg-green-950/30 self-start text-white/90"
                  : "bg-white/10 self-end text-white"
                }
              `}
            >
              <p>{message.text}</p>

              {message.funcionEjecutada && (
                <div className="mt-2 text-xs font-mono bg-green-900/50 text-green-300 px-2 py-1 rounded-md w-fit ring ring-inset ring-green-500/20">
                  🛠️ {message.funcionEjecutada}
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="max-w-[75%] w-fit p-4 rounded-3xl backdrop-blur-3xl ring ring-inset ring-white/10 bg-green-950/30 self-start text-white/60 animate-pulse">
              Keidot está escribiendo...
            </div>
          )}

          {/* Div invisible para forzar el scroll hasta abajo */}
          <div ref={messagesEndRef} />
        </div>

        {/* Master Input Container */}
        <div className="relative flex items-center h-16 w-full gap-x-2 p-2 rounded-full bg-white/10 backdrop-blur-3xl ring ring-inset ring-white/10 transition-all shrink-0">

          <div className="pl-3 text-white/60">
            <IconSparkles className="size-6" />
          </div>

          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            type="text"
            placeholder={isLoading ? "Procesando..." : "Preguntarle a Keidot"}
            className="flex-1 h-full bg-transparent border-none outline-none px-2 text-white placeholder-white/60 disabled:opacity-50"
          />

          <button
            onClick={handleSendMessage}
            disabled={isLoading}
            title="enviar"
            className="flex items-center justify-center h-full aspect-square rounded-full ring ring-inset ring-white/10 bg-transparent backdrop-blur-3xl hover:bg-white/20 active:scale-95 ease-out duration-100 transition-all disabled:opacity-50 disabled:hover:bg-transparent"
          >
            {text === "" ? (
              <IconMicrophone stroke={2} className="size-5 text-white" />
            ) : (
              <IconArrowUp stroke={2.5} className="size-5 text-white" />
            )}
          </button>
        </div>

      </div>
    </div>
  );
}