"use client";
import Image from "next/image";
import Header from "./components/Header"
import Slider from "./components/Swipper";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <section
          className="flex justify-center items-center bg-[#fdecda]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col-reverse sm:flex-col-reverse md:flex-row justify-center items-center pt-5"
          >
            <Image
              className="w-[500px] sm:w-[500px] xl:w-[700px]"
              src="/images/meninas-studio.png"
              alt="Imagem meninas"
              width={700}
              height={900}
            />

            <div className="p-4 w-150 text-black">
              <p className="max-w-[400px] sm:w-[70%]">
                <span className="text-7xl sm:text-7xl md:text-8xl xl:text-9xl font-playfair font-bold">Essência real, </span>
                <span className="text-6xl sm:text-6xl md:text-7xl xl:text-8xl font-poppins italic">efeito duradouro.</span>
              </p>

              <p className="max-w-[450px] sm:w-[80%] sm:mt-10 md:text-md xl:text-lg font-inter my-10">
                Questionamos padrões e valorizamos o que é real, entregando resultados que vão além do esperado.
              </p>

              <button className="relative overflow-hidden uppercase cursor-pointer w-[250px] h-[50px] leading-[50px] text-black transition-all duration-300 group">
                <span className="absolute inset-0 bg-[#4c2a12]/10 transition-all duration-300 group-hover:opacity-0 group-hover:scale-x-[0.1] z-0"></span>
                <span className="absolute inset-0 opacity-0 border-t border-b border-[#4c2a12]/50 transition-all duration-300 scale-x-[0.1] group-hover:opacity-100 group-hover:scale-x-100 z-0"></span>
                <span className="relative z-10 transition-all duration-300 group-hover:tracking-widest">
                  Saiba mais
                </span>
              </button>
            </div>
          </motion.div>
        </section>

        <section className="mb-20">
          <motion.p
            className="my-15 ml-[5%] uppercase text-gray-500"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >Conheça melhor nossos serviços</motion.p>
          <motion.hr
            className="w-[90%] mx-auto border-t-1 border-gray-500 mb-15"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <div className="flex-col mx-[5%] sm:flex-col sm:items-start sm:mx-10 md:items-center lg:justify-around lg:items-center xl:justify-around xl:items-center flex">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-black mb-15">
              <span>Conheça o </span>
              <span className="text-[#c9964d]">Studio Cirqueira's</span>
            </h1>
            <p className="text-sm max-w-[500px] mb-15 sm:text-sm md:text-md md:max-w-[650px] lg:text-lg lg:max-w-[800px] xl:text-lg xl:max-w-[800px]">No nosso studio, o foco está em cuidados bem executados, com atenção aos detalhes e respeito à sua individualidade, para realçar o que há de melhor em você.</p>
          </div>

          <div className="flex items-stretch justify-center rounded-3xl">
            <div className="flex-col-reverse sm:flex-col-reverse sm:text-md md:flex-row lg:flex-row xl:flex-row flex mx-5 overflow-hidden rounded-3xl">

              <div className="relative w-full h-[500px] md:w-[500px] md:h-[500px] lg:w-[300px] lg:h-[500px] xl:w-[500px] xl:h-[500px]">

                <Image
                  src="/images/std-cirqueiras.png"
                  alt="Imagem meninas"
                  fill
                  className="sm:object-cover"
                />
              </div>

              <div className="bg-[#c9964d] flex flex-col justify-center items-start p-6">
                <p className="mt-20 text-1xl sm:text-2xl sm:mt-30 md:text-3xl lg:max-w-[500px] text-3xl max-w-xl mx-auto my-6">Valorizar o que é natural é uma escolha que reflete equilíbrio, autenticidade e bem-estar.</p>
                <p className="text-md mb-6">Conheça nosso local de atendimento.</p>
                <a
                  href="https://wa.me/5511932382035?text=Olá,%20gostaria%20de%20agendar%20um%20horário"
                  target="_blank"
                  className="sm:my-5 relative flex justify-center items-center overflow-hidden uppercase cursor-pointer w-[150px] h-[50px] leading-[50px] text-black text-sm transition-all duration-300 group">
                  <span className="absolute inset-0 bg-black/10 transition-all duration-300 group-hover:opacity-0 group-hover:scale-x-[0.1] z-0"></span>
                  <span className="absolute inset-0 opacity-0 border-t border-b border-black/50 transition-all duration-300 scale-x-[0.1] group-hover:opacity-100 group-hover:scale-x-100 z-0"></span>
                  <span className="relative z-10 transition-all duration-300 group-hover:tracking-widest">Atendimento</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        <section>
          <motion.p
            className="my-15 ml-auto mr-[5%] uppercase text-gray-500 w-fit"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Conheça nossa história
          </motion.p>
          <motion.hr
            className="w-[90%] mx-auto border-t border-gray-500 mb-15"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          />
          <div className="flex justify-center items-center bg-[url('/images/background-1.png')] bg-cover bg-center h-full px-10">
            <div className="flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row flex">
              <div className="mr-[10%]">
                <Image
                  className="sm:my-15 my-20"
                  src="/images/insta.png"
                  alt="Imagem procedimentos"
                  width={210}
                  height={200}
                />
                <div className="">
                  <p className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl lg:w-[500px] xl:w-[600px] xl:max-w-xl xl:text-7xl">
                    <span className="font-poppins mt-5 text-[#bc743a]">Onde </span>
                    <span className="font-poppins mt-5 text-[#4c2a12]">nasce o</span>
                  </p>
                  <h2 className=" mt-5 text-4xl sm:text-4xl md:text-4xl lg:text-5xl lg:w-full xl:text-6xl font-poppins">Studio Cirqueira's</h2>
                  <p className="mt-10 sm:mt-10 md:text-md md:max-w-[400px] lg:text-lg lg:max-w-[400px] lg:mt-15 xl:text-lg xl:mt-25 leading-loose">O studio nasceu da vontade de impactar pessoas de forma real, defendendo a liberdade de ser quem se é e valorizando a beleza sem imposições.</p>
                  <button className="my-10 sm:my-10 md:mb-10 md:mt-20 relative overflow-hidden uppercase cursor-pointer w-[150px] h-[50px] leading-[50px] text-black text-sm transition-all duration-300 group">
                    <span className="absolute inset-0 bg-[#4c2a12]/10 transition-all duration-300 group-hover:opacity-0 group-hover:scale-x-[0.1] z-0"></span>
                    <span className="absolute inset-0 opacity-0 border-t border-b border-[#4c2a12]/50 transition-all duration-300 scale-x-[0.1] group-hover:opacity-100 group-hover:scale-x-100 z-0"></span>
                    <span className="relative z-10 transition-all duration-300 group-hover:tracking-widest">
                      Saiba Mais
                    </span>
                  </button>
                </div>
              </div>

              <div className="">
                <Image
                  className="w-full sm:w-full md:w-[500px] lg:w-[550px] xl:w-[600px] rounded-lg"
                  src="/images/meninas-2.jpeg"
                  alt="Imagem procedimentos"
                  width={460}
                  height={600}
                />
                <div className="flex gap-3 mt-5">
                  <Image
                    className="w-full sm:w-full md:w-[220px] lg:w-[218px] xl:w-[235px] rounded-lg"
                    src="/images/raquel.jpg"
                    alt="Imagem procedimentos"
                    width={200}
                    height={300}
                  />
                  <Image
                    className="w-full sm:w-full md:w-[220px] lg:w-[218px] xl:w-[235px] rounded-lg"
                    src="/images/mariana.jpg"
                    alt="Imagem procedimentos"
                    width={200}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <motion.p
            className="my-15 ml-[5%] uppercase text-gray-500"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >Conheça nossos procedimentos
          </motion.p>
          <motion.hr
            className="w-[90%] mx-auto border-t-1 border-gray-500 mb-15"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <div>
            <h3 className="mb-15 ml-[5%] relative inline-block px-6 py-3 text-2xl font-semibold text-black bg-gradient-to-r from-[#f6efe9] via-[#efe2d6] to-[#f6efe9] animate-[pulse_3s_ease-in-out_infinite] after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[3px] after:w-2/3 after:-translate-x-1/2 after:bg-[#4c2a12] after:animate-[bounce_3s_ease-in-out_infinite]">
              Métodos
            </h3>
            <div>
              <Slider />
            </div>
          </div>
        </section>

        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.p
              className="mb-15 mt-40 ml-auto mr-[5%] uppercase text-gray-500 w-fit"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >Blog
            </motion.p>
            <motion.hr
              className="w-[90%] mx-auto border-t-1 border-gray-500 mb-15"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            />
            <h4 className="mb-15 text-3xl ml-[5%] sm:text-4xl md:text-5xl lg:text-6xl flex lg:justify-center lg:align-center lg:mb-25">
              <span className="sm:mr-3 mr-3">Conteúdos</span>
              <span className="text-[#c9964d]">para você</span>
            </h4>

            <div className="flex-col flex justify-center items-center gap-10 mx-5 mb-30 sm:flex-col md:flex-row lg:flex-row ">

              <div className="h-[550px] inline-block w-full rounded-2xl overflow-hidden bg-[#fdecda]">
                <div className="relative w-full h-[279px] md:h-[150px]">
                  <Image src="/images/sobrancelha.png" alt="Postagem do blog explicando tudo que você precisa saber sobre design de sobrancelhas" fill className="object-cover" />
                </div>
                <p className="md:text-md text-xl pt-5 px-5">Design de Sobrancelhas: tudo o que você precisa saber</p>
                <button
                  type="button"
                  className="mt-10 mb-8 ml-5 relative overflow-hidden w-[150px] h-[40px] md:mt-5 md:w-[130px]
                          text-md text-black border-2 border-[#333]
                          transition-all duration-300
                          after:content-[''] after:absolute after:top-0 after:left-0
                          after:w-0 after:h-full after:bg-black
                          after:transition-all after:duration-300
                          hover:text-white hover:border-white hover:after:w-full
                          group cursor-pointer"
                >
                  <span className="relative z-10 uppercase tracking-wider flex items-center gap-1 justify-center h-full md:text-sm">
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

              <div className="h-[550px] inline-block w-full rounded-2xl overflow-hidden bg-[#fdecda]">
                <div className=" md:h-[150px] relative w-full h-[279px]">
                  <Image src="/images/micro.png" alt="Design com Henna" fill className="object-cover" />
                </div>
                <p className="md:text-md text-xl pt-5 px-5">10 hábitos essenciais para prolongar a micropigmentação</p>
                <button
                  type="button"
                  className="mt-10 mb-8 ml-5 relative overflow-hidden w-[150px] h-[40px] md:mt-5 md:w-[130px]
                          text-md text-black border-2 border-[#333]
                          transition-all duration-300
                          after:content-[''] after:absolute after:top-0 after:left-0
                          after:w-0 after:h-full after:bg-black
                          after:transition-all after:duration-300
                          hover:text-white hover:border-white hover:after:w-full
                          group cursor-pointer"
                >
                  <span className="relative z-10 uppercase tracking-wider flex items-center gap-1 justify-center h-full md:text-sm">
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

              <div className="h-[550px] inline-block w-full rounded-2xl overflow-hidden bg-[#fdecda]">
                <div className="relative w-full h-[279px] md:h-[150px]">
                  <Image src="/images/nail.png" alt="Design com Henna" fill className="object-cover" />
                </div>
                <p className="md:text-md text-xl pt-5 px-5">Quais cuidados especiais suas unhas devem ter?</p>
                <button
                  type="button"
                  className="mt-10 mb-8 ml-5 relative overflow-hidden w-[150px] h-[40px] md:mt-5 md:w-[130px]
                          text-md text-black border-2 border-[#333]
                          transition-all duration-300
                          after:content-[''] after:absolute after:top-0 after:left-0
                          after:w-0 after:h-full after:bg-black
                          after:transition-all after:duration-300
                          hover:text-white hover:border-white hover:after:w-full
                          group cursor-pointer"
                >
                  <span className="relative z-10 uppercase tracking-wider flex items-center gap-1 justify-center h-full md:text-sm">
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
            </div>
          </motion.div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
