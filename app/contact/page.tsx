"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function Contact() {
  const imageUrl = "/images/banner-contact.png";
  return (
    <>
      <section className="bg-[#FDECDA]">
        <Header image="/images/logo_studio.png" />
        <section
          className="relative flex min-h-[700px] lg:h-[80vh] flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-8 text-white"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: "30% 50%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4C2A12]/20 via-[#4C2A12]/30 to-transparent" />
        </section>

        <section className="relative overflow-hidden bg-white">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#4C2A12]/90 to-[#BC743A]/70" /> */}
          <div className="absolute bg-white" />

          <div className="relative max-w-7xl mx-auto px-5 lg:px-16 b-130 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="font-dynalight text-[#C9964D] text-4xl md:text-5xl">
                Studio Cirqueira&apos;s
              </span>

              <h1 className="font-poppins text-[#4C2A12] text-5xl lg:text-7xl font-semibold leading-tight mt-3">
                Beleza que transforma
                <span className="block font-windsong text-[#C9964D] text-6xl lg:text-8xl font-normal mt-2">
                  autoestima em confiança
                </span>
              </h1>

              <p className="font-inter text-black/90 text-lg leading-8 max-w-xl mt-8">
                Invista em um conceito de beleza pensado para mulheres que
                desejam viver experiências exclusivas, combinando sofisticação,
                acolhimento e resultados que encantam.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  src="/images/studio-cirqueiras-hero.jpg"
                  alt=""
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section className="mt-30 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="font-dynalight text-[#BC743A] text-4xl">
                Nossa essência
              </span>

              <h2 className="font-poppins text-[#4C2A12] text-4xl lg:text-5xl leading-tight mt-4">
                Um espaço criado para elevar a experiência da beleza.
              </h2>

              <p className="font-inter text-black/80 leading-8 mt-8">
                O Studio Cirqueira&apos;s nasceu com a proposta de unir
                atendimento personalizado, técnicas modernas e um ambiente
                acolhedor. Mais do que procedimentos, entregamos momentos de
                bem-estar e cuidado em cada detalhe.
              </p>

              <p className="font-inter text-black/80 leading-8 mt-6">
                Nossa missão é proporcionar resultados que valorizam a beleza
                natural, fortalecem a autoestima e criam experiências
                memoráveis.
              </p>
              <a
                href="https://wa.me/5511932382035?text=Olá,%20gostaria%20de%20agendar%20um%20horário"
                target="_blank"
                rel="noreferrer"
                className="mt-5 relative overflow-hidden w-[300px] h-[50px]
             text-md text-[#BC743A] border-2 border-[#BC743A]
             transition-all duration-300
             after:content-[''] after:absolute after:top-0 after:left-0
             after:w-0 after:h-full after:bg-[#BC743A]
             after:transition-all after:duration-300
             hover:text-white hover:border-[#BC743A] hover:after:w-full
             group cursor-pointer flex items-center justify-center"
              >
                <span className="relative whitespace-nowrap z-10 uppercase tracking-wider flex items-center gap-1 justify-center h-full">
                  Fale com uma de nós
                </span>
              </a>
            </div>

            <div>
              <img
                src="/images/studio-cirqueiras.jpg"
                className="rounded-[40px] shadow-xl"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="py-20 bg-gradient-to-b from-[#FDECDA] to-[#ffffff]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <span className="font-dynalight text-[#BC743A] text-5xl">
                Experiência completa
              </span>

              <h2 className="font-poppins text-[#4C2A12] text-4xl mt-4">
                Cuidado em cada detalhe
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-16">
              <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
                <div className="text-[#BC743A] text-4xl mb-4">✦</div>
                <h3 className="font-poppins text-[#4C2A12] font-semibold">
                  Atendimento Premium
                </h3>
              </div>

              <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
                <div className="text-[#BC743A] text-4xl mb-4">✦</div>
                <h3 className="font-poppins text-[#4C2A12] font-semibold">
                  Técnicas Atualizadas
                </h3>
              </div>

              <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
                <div className="text-[#BC743A] text-4xl mb-4">✦</div>
                <h3 className="font-poppins text-[#4C2A12] font-semibold">
                  Ambiente Sofisticado
                </h3>
              </div>

              <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
                <div className="text-[#BC743A] text-4xl mb-4">✦</div>
                <h3 className="font-poppins text-[#4C2A12] font-semibold">
                  Produtos Selecionados
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section className="bg-[#BC743A] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="font-dynalight text-[#FDECDA] text-5xl">
                Seu momento começa aqui
              </span>

              <h2 className="font-poppins text-white text-5xl leading-tight mt-4">
                Descubra uma nova forma de viver a beleza.
              </h2>

              <p className="font-inter text-white/90 leading-8 mt-8">
                Preencha o formulário e nossa equipe entrará em contato para
                apresentar todos os serviços e experiências disponíveis no
                Studio Cirqueira&apos;s.
              </p>
            </div>

            <div className="bg-[#FDECDA] p-5 lg:p-10">
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full h-14 px-6 border border-black outline-none"
                />

                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full h-14 px-6 border border-black outline-none"
                />

                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full h-14 px-6 border border-black outline-none"
                />

                <select className="w-full h-14 px-6 border border-black outline-none">
                  <option>Serviço de interesse</option>
                  <option>Unhas</option>
                  <option>Sobrancelha</option>
                  <option>Cilíos</option>
                  <option>Limpeza</option>
                </select>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full mt-4 bg-black text-white py-3 font-medium"
                >
                  Agendar atendimento
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
