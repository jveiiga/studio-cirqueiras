"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardSlider1 from "../components/SwipperStudio";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function ClinicaPage() {
  return (
    <>
      <Header image="/images/logo_studio.png" />
      <main className="font-inter text-[#4C2A12] bg-[#FDECDA]">
        <section className="relative h-[80vh] w-full flex items-center px-3 lg:px-20">
          <Image
            src="/images/std-cirqueiras.png"
            alt=""
            fill
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#BC743A] via-[#BC743A]/60 to-transparent" />

          <div className="relative z-10 text-white">
            <h1 className="font-poppins text-6xl md:text-7xl lg:text-8xl leading-tight">
              Studio <br /> Cirqueira&apos;s
            </h1>

            <p className="mt-4 mb-10 max-w-md text-sm">
              Conheça o studio de atendimento e nossos procedimentos.
            </p>

            <button className="relative overflow-hidden uppercase cursor-pointer w-[150px] h-[50px] md:w-[250px] md:h-[50px] lg:w-[250px] lg:h-[50px] leading-[50px] text-black transition-all duration-300 group">
              <span className="absolute inset-0 bg-[#ffffff]/10 transition-all duration-300 group-hover:opacity-0 group-hover:scale-x-[0.1] z-0"></span>
              <span className="absolute inset-0 opacity-0 border-t border-b border-[#ffffff]/50 transition-all duration-300 scale-x-[0.1] group-hover:opacity-100 group-hover:scale-x-100 z-0"></span>
              <span className="text-sm relative text-sm z-10 transition-all duration-300 group-hover:tracking-widest">
                Saiba mais
              </span>
            </button>

            <p className="mt-20 text-sm opacity-80">CONHEÇA NOSSO STUDIO ↓</p>
          </div>
        </section>

        {/* CLINICA INTRO */}
        <section className="lg:py-16 text-center px-6">
          <h2 className="font-poppins text-3xl text-[#BC743A] lg:text-5xl mt-15 mb-5">
            Nosso Stúdio
          </h2>

          <p className="max-w-2xl mx-auto text-md mb-20 lg:text-lg">
            O Studio Cirqueira’s une técnicas avançadas com um atendimento
            personalizado, focado em resultados eficazes e na valorização da
            beleza individual.
          </p>

          <CardSlider1 />
        </section>
        <motion.hr
          className="w-[90%] mx-auto border-t-1 border-gray-400 mt-15 lg:my-20"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        {/* UNIDADE */}
        <section className="py-15 px-6 pb-30 text-center">
          <h2 className="font-poppins text-2xl mb-15 lg:text-5xl">
            Nossa <span className="text-[#BC743A]">Unidade</span>
          </h2>

          <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden h-[500px]">
            <Image
              src="/images/studio-com-placa.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-[500px] object-cover object-[50%_15%]"
            />

            <div className="absolute inset-0 bg-[#BC743A]/60 flex flex-col justify-center items-start pl-3 lg:p-8 text-white">
              <h3 className="text-3xl lg:text-4xl font-poppins mb-20">
                São Paulo - SP
              </h3>

              <div className="flex gap-3 mb-10 bor">
                <a
                  className="bg-[#25D366] text-white font-bold px-5 py-2 lg:px-10 lg:py-3 rounded-3xl text-sm flex items-center gap-2 cursor-pointer"
                  href="https://wa.me/5511932382035?text=Olá,%20gostaria%20de%20agendar%20um%20horário"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>

                <a
                  className="bg-[#E1306C] text-white font-bold px-5 py-2 lg:px-10 lg:py-3 rounded-3xl text-sm flex items-center gap-2"
                  href="https://www.instagram.com/studio.cirqueiras/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                  Instagram
                </a>
              </div>

              <p className="flex items-center gap-2">
                <FaMapMarkerAlt />
                Localização
              </p>
              <p className="text-xs text-start lg:text-sm my-3">
                Av. do Cursino, 3741 - Sala 2 - Vila Moraes, São Paulo - SP
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
