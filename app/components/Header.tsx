"use client";
import { useState } from "react"
import Image from "next/image"
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-gradient-to-l from-[#4c2a12]/50 to-[#4c2a12]/0 flex items-center justify-between px-6 py-4 relative">

      <Link href="/">
        <Image
          src="/images/logo_studio.png"
          alt="Logo Studio Cirqueira's"
          width={150}
          height={200}
          className="cursor-pointer"
        />
      </Link>

      {/* Menu desktop */}
      <ul className="hidden lg:flex gap-10 text-black lg:text-sm">
        {[
          { label: "Quem Somos", href: "/about" },
          { label: "Procedimentos", href: "/procedures" },
          { label: "Academy", href: "/academy" },
          { label: "Studio", href: "/studio" },
          { label: "Blog", href: "/blog" },
          { label: "Contato", href: "/contact" },
        ].map(item => (
          <li key={item.label} className="relative">
            <Link
              href={item.href}
              className="tracking-wider inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#bc743a] after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>


      {/* Botão desktop */}
      <button className="hidden cursor-pointer lg:block lg:text-sm w-[130px] h-[40px] border-2 border-[#333] hover:bg-[#4c2a12] hover:text-white transition">
        Cursos
      </button>

      {/* Botão hamburguer */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden flex flex-col gap-1"
      >
        <span className="w-6 h-[2px] bg-black"></span>
        <span className="w-6 h-[2px] bg-black"></span>
        <span className="w-6 h-[2px] bg-black"></span>
      </button>

      {/* Menu mobile */}
      {open && (
        <div className="absolute top-full left-0 w-full z-50 bg-[#fdecda] lg:hidden">
          <ul className="flex flex-col items-center gap-6 py-6">
            {[
              { label: "Quem Somos", href: "/about" },
              { label: "Procedimentos", href: "/procedures" },
              { label: "Academy", href: "/academy" },
              { label: "Studio", href: "/studio" },
              { label: "Blog", href: "/blog" },
              { label: "Contato", href: "/contact" },
            ].map(item => (
              <li key={item.label} className="text-lg">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}

            <Link href="/cursos">
              <button className="w-[130px] h-[40px] border-2 border-[#333]">
                Cursos
              </button>
            </Link>
          </ul>
        </div>

      )}
    </header>
  )
}
