"use client"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-gradient-to-l from-[#4c2a12]/50 to-[#4c2a12]/0 flex items-center justify-between px-6 py-4 relative">
      
      <Image
        src="/images/logo_studio.png"
        alt="Logo Studio Cirqueira's"
        width={150}
        height={200}
      />

      {/* Menu desktop */}
      <ul className="hidden md:flex gap-10 text-black md:text-sm">
        {["Quem Somos", "Procedimentos", "Academy", "Studio", "Blog", "Contato"].map(item => (
          <li key={item} className="relative cursor-pointer">
            <a className="relative tracking-wider inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#bc743a] after:transition-all hover:after:w-full">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Botão desktop */}
      <button className="hidden md:block md:text-sm w-[130px] h-[40px] border-2 border-[#333] hover:bg-[#4c2a12] hover:text-white transition">
        Cursos
      </button>

      {/* Botão hamburguer */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1"
      >
        <span className="w-6 h-[2px] bg-black"></span>
        <span className="w-6 h-[2px] bg-black"></span>
        <span className="w-6 h-[2px] bg-black"></span>
      </button>

      {/* Menu mobile */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#fdecda] md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6">
            {["Quem Somos", "Procedimentos", "Academy", "Studio", "Blog", "Contato"].map(item => (
              <li key={item} className="text-lg">
                {item}
              </li>
            ))}
            <button className="w-[130px] h-[40px] border-2 border-[#333]">
              Cursos
            </button>
          </ul>
        </div>
      )}
    </header>
  )
}
