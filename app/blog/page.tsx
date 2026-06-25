"use client";

import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <>
      <Header image="/images/logo_studio.png" />
      <main>
        <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh] overflow-hidden">
          <Image
            src="/images/banner-blog-2.png"
            alt=""
            fill
            className="object-cover"
          />

          {/* overlay leve da paleta */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdecda]/50 via-[#4C2A12]/30 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="px-6 sm:px-10 lg:px-20 max-w-[800px]">
              <h1 className="font-inter text-black text-4xl sm:text-5xl lg:text-8xl leading-tight">
                Blog Studio Cirqueira&apos;s
              </h1>

              <p className="mt-4 font-inter text-black text-sm sm:text-base">
                Realce sua beleza com os melhores cuidados. Aqui você descobre o
                cuidado que merece.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("blog")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="relative my-10 overflow-hidden uppercase cursor-pointer w-[150px] h-[50px] md:w-[250px] leading-[50px] text-black transition-all duration-300 group"
              >
                <span className="absolute inset-0 bg-[#4c2a12]/20 transition-all duration-300 group-hover:opacity-0 group-hover:scale-x-[0.1] z-0"></span>
                <span className="absolute inset-0 opacity-0 border-t border-b border-[#4c2a12]/50 transition-all duration-300 scale-x-[0.1] group-hover:opacity-100 group-hover:scale-x-100 z-0"></span>
                <span className="relative z-10 text-sm transition-all duration-300 group-hover:tracking-widest">
                  Continue lendo
                </span>
              </button>

              <p className="mt-4 text-md text-black font-inter">
                Saiba mais sobre nossos procedimentos
              </p>
            </div>
          </div>
        </section>
        <section id="blog">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="text-3xl mt-10 sm:text-4xl md:text-5xl lg:text-6xl flex justify-center lg:justify-start lg:ml-[5%] lg:mt-20 font-poppins">
              <span className="text-[#BC743A]">Blog</span>
            </h4>
            <motion.p
              className="my-10 lg:mb-15 mr-auto ml-[5%] uppercase text-gray-500 w-fit"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="mb-6 text-xs sm:text-sm uppercase text-gray-400 font-inter">
                Técnicas exclusivas, nossos procedimentos e muito mais
              </p>
            </motion.p>
            <motion.hr
              className="w-[90%] mx-auto border-t-1 border-gray-500 mb-10 lg:mb-15"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            />

            <div className="flex-col flex justify-center items-center gap-10 mx-5 mb-30 lg:flex-row ">
              <div className="h-[300px] md:h-[400px] lg:h-[300px] xl:h-[400px] inline-block w-full rounded-2xl overflow-hidden bg-[#fdecda]">
                <div className="relative w-full h-[150px] md:h-[200px] lg:h-[130px] xl:h-[230px]">
                  <Image
                    src="/images/sobrancelha.png"
                    alt="Postagem do blog explicando tudo que você precisa saber sobre design de sobrancelhas"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm md:text-lg lg:text-base xl:text-xl pt-5 px-5">
                  Design de Sobrancelhas: tudo o que você precisa saber
                </p>
                <button
                  type="button"
                  className="mt-5 mb-8 ml-5 relative overflow-hidden w-[130] h-[40] lg:w-[150px] lg:h-[40px] md:mt-5 md:w-[130px]
                          text-md text-black border-2 border-[#333]
                          transition-all duration-300
                          after:content-[''] after:absolute after:top-0 after:left-0
                          after:w-0 after:h-full after:bg-black
                          after:transition-all after:duration-300
                          hover:text-white hover:border-white hover:after:w-full
                          group cursor-pointer"
                >
                  <span className="relative text-sm z-10 uppercase tracking-wider flex items-center gap-1 justify-center h-full md:text-sm">
                    Ler Sobre
                    <Image
                      src="/images/seta-direita-preta.png"
                      alt="Seta para direita"
                      width={18}
                      height={18}
                      className="transition-all duration-300 group-hover:invert group-hover:translate-x-1"
                    />
                  </span>
                </button>
              </div>

              <div className="h-[300px] md:h-[400px] lg:h-[300px] xl:h-[400px] inline-block w-full rounded-2xl overflow-hidden bg-[#fdecda]">
                <div className=" md:h-[200px] lg:h-[130px] xl:h-[230px] relative w-full h-[150px]">
                  <Image
                    src="/images/micro.png"
                    alt="Design com Henna"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm md:text-lg lg:text-base xl:text-xl pt-5 px-5">
                  10 hábitos essenciais para prolongar a micropigmentação
                </p>
                <button
                  type="button"
                  className="mt-5 mb-8 ml-5 relative overflow-hidden w-[130] h-[40] lg:w-[150px] lg:h-[40px] md:mt-5 md:w-[130px]
                          text-md text-black border-2 border-[#333]
                          transition-all duration-300
                          after:content-[''] after:absolute after:top-0 after:left-0
                          after:w-0 after:h-full after:bg-black
                          after:transition-all after:duration-300
                          hover:text-white hover:border-white hover:after:w-full
                          group cursor-pointer"
                >
                  <span className="relative text-sm z-10 uppercase tracking-wider flex items-center gap-1 justify-center h-full md:text-sm">
                    Ler Sobre
                    <Image
                      src="/images/seta-direita-preta.png"
                      alt="Seta para direita"
                      width={18}
                      height={18}
                      className="transition-all duration-300 group-hover:invert group-hover:translate-x-1"
                    />
                  </span>
                </button>
              </div>

              <div className="h-[300px] md:h-[400px] lg:h-[300px] xl:h-[400px] inline-block w-full rounded-2xl overflow-hidden bg-[#fdecda]">
                <div className="relative w-full h-[150px] md:h-[200px] lg:h-[130px] xl:h-[230px]">
                  <Image
                    src="/images/nail.png"
                    alt="Design com Henna"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm md:text-lg lg:text-base xl:text-xl pt-5 px-5">
                  Quais cuidados especiais suas unhas devem ter?
                </p>
                <button
                  type="button"
                  className="mt-5 mb-8 ml-5 relative overflow-hidden w-[130] h-[40] lg:w-[150px] lg:h-[40px] md:mt-5 md:w-[130px]
                          text-md text-black border-2 border-[#333]
                          transition-all duration-300
                          after:content-[''] after:absolute after:top-0 after:left-0
                          after:w-0 after:h-full after:bg-black
                          after:transition-all after:duration-300
                          hover:text-white hover:border-white hover:after:w-full
                          group cursor-pointer"
                >
                  <span className="relative text-sm z-10 uppercase tracking-wider flex items-center gap-1 justify-center h-full md:text-sm">
                    Ler Sobre
                    <Image
                      src="/images/seta-direita-preta.png"
                      alt="Seta para direita"
                      width={18}
                      height={18}
                      className="transition-all duration-300 group-hover:invert group-hover:translate-x-1 md:object-contain"
                    />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
