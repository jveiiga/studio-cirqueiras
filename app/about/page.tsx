"use client";
import Image from "next/image";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div>
            <Header />
            <section
                className="bg-[#fdecda]"
            >
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="
    relative flex flex-col-reverse pt-5 lg:flex-row-reverse xl:justify-center
    bg-[url('/images/meninas-3.png')] bg-no-repeat bg-cover bg-center
  "
>
  {/* overlay gradiente */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-b
      from-black/20
      via-[#fdecda]/30
      to-[#fdecda]/60
    "
  />

  <div className="relative flex flex-col justify-end z-10 p-4 max-w-full min-h-[500px] lg:flex lg:flex-col lg:justify-center text-black">
    <p className="lg:max-w-[500px]">
      <span className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-inter">
        Quem somos?
      </span>
    </p>

    <p className="text-sm max-w-[500px] my-5 sm:text-base lg:max-w-[400px] xl:text-lg font-inter">
      Questionamos padrões e valorizamos o que é real, entregando resultados que vão além do esperado.
    </p>

    <button className="relative overflow-hidden uppercase cursor-pointer w-[150px] h-[50px] md:w-[250px] leading-[50px] text-black transition-all duration-300 group">
      <span className="absolute inset-0 bg-[#4c2a12]/20 transition-all duration-300 group-hover:opacity-0 group-hover:scale-x-[0.1] z-0"></span>
      <span className="absolute inset-0 opacity-0 border-t border-b border-[#4c2a12]/50 transition-all duration-300 scale-x-[0.1] group-hover:opacity-100 group-hover:scale-x-100 z-0"></span>
      <span className="relative z-10 text-sm transition-all duration-300 group-hover:tracking-widest">
        Continue lendo
      </span>
    </button>
  </div>
</motion.div>


            </section>
        </div>
    )
}