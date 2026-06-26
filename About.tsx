"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const, delay },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const, delay },
  }),
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <Header image="/images/logo_studio.png" />

      {/* Hero Section */}
      <section className="bg-[#fdecda]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative min-h-[700px] flex flex-col-reverse bg-[url('/images/meninas-about.png')] bg-no-repeat bg-bottom bg-cover md:min-h-[800px] lg:bg-fill lg:bg-[position:90%_30%] xl:bg-[position:90%_25%]"
        >
          {/* overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#fdecda]/30 to-[#fdecda]/100" />

          <div className="relative flex flex-col justify-end z-10 p-4 max-w-full min-h-[350px] lg:flex lg:flex-col lg:justify-center text-black">
            <div className="lg:pl-[5%]">
              <motion.p
                className="lg:max-w-[500px]"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0.1}
                viewport={{ once: true }}
              >
                <span className="text-5xl sm:text-7xl font-inter">
                  Quem somos?
                </span>
              </motion.p>

              <motion.p
                className="text-sm max-w-[500px] mt-5 sm:text-base lg:max-w-[500px] xl:text-lg font-inter"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0.25}
                viewport={{ once: true }}
              >
                Conheça nossa trajetória, os caminhos percorridos até aqui e o
                propósito que nos guia.
              </motion.p>

              <motion.button
                onClick={() =>
                  document
                    .getElementById("sobre")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="relative my-10 overflow-hidden uppercase cursor-pointer w-[150px] h-[50px] md:w-[250px] leading-[50px] text-black transition-all duration-300 group"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0.4}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="absolute inset-0 bg-[#4c2a12]/20 transition-all duration-300 group-hover:opacity-0 group-hover:scale-x-[0.1] z-0"></span>
                <span className="absolute inset-0 opacity-0 border-t border-b border-[#4c2a12]/50 transition-all duration-300 scale-x-[0.1] group-hover:opacity-100 group-hover:scale-x-100 z-0"></span>
                <span className="relative z-10 text-sm transition-all duration-300 group-hover:tracking-widest">
                  Continue lendo
                </span>
              </motion.button>
            </div>

            <motion.p
              className="text-sm my-5 lg:ml-[5%] lg:mt-10 uppercase text-gray-800"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              Conheça nossos procedimentos
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Sobre Section */}
      <section id="sobre">
        <div>
          {/* Mariana */}
          <div className="px-5 mb-20 lg:pl-10 lg:flex lg:justify-center lg:mt-30">
            <div className="lg:mr-20">
              <motion.p
                className="text-2xl font-inter text-[#c9964d] my-5 sm:text-4xl md:text-5xl lg:mb-10 lg:whitespace-nowrap xl:text-6xl"
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
              >
                <span>Mariana </span>
                <span className="text-black">Cirqueira</span>
              </motion.p>

              <motion.div
                className="max-w-[800px] lg:text-lg lg:max-w-[500px]"
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                custom={0.15}
                viewport={{ once: true }}
              >
                <div className="mb-5 lg:mb-10">
                  Ela sempre foi movida pelo universo da beleza e fez das unhas
                  o seu propósito de vida. Empreendedora e instrutora Nails,
                  transformou uma decisão tomada aos 16 anos em uma carreira
                  sólida, construída com coragem, aprendizado contínuo e visão
                  de futuro. Hoje, vive o extraordinário através das unhas,
                  impactando vidas e elevando a autoestima de cada cliente.
                </div>
                <div className="mb-5 lg:mb-10">
                  Com uma trajetória marcada por desafios e evolução constante,
                  tornou-se referência não apenas pela técnica, mas pela
                  mentalidade empreendedora. Acredito que seu diferencial está
                  na consistência: aprender todos os dias e nunca se acomodar.
                  <span className="font-bold">
                    {" "}
                    Mais do que formar profissionais, ela forma mulheres
                    confiantes
                  </span>
                  .
                </div>
                Seu trabalho vai além do ensino técnico, inspira alunas a
                acreditarem em si mesmas e a enxergarem no mercado Nails uma
                oportunidade real de transformação pessoal e profissional. Uma
                história construída do zero, com propósito e ambição clara de
                crescimento.
              </motion.div>
            </div>

            {/* Imagens Mariana */}
            <div className="flex flex-col mt-10 gap-5 sm:flex-row sm:justify-center sm:items-stretch md:flex-row md:justify-center md:items-stretch lg:max-w-[800px] overflow-hidden">
              <motion.div
                className="flex-1 overflow-hidden rounded-lg"
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                custom={0.1}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <Image
                  className="w-full h-full object-cover"
                  src="/images/maria-1.jpg"
                  alt="Imagem procedimentos"
                  width={460}
                  height={600}
                />
              </motion.div>

              <div className="flex gap-3 sm:flex-col sm:w-[200px] md:flex-col md:w-[200px] lg:justify-between overflow-hidden">
                <motion.div
                  className="h-[48%] overflow-hidden rounded-lg"
                  variants={imageReveal}
                  initial="hidden"
                  whileInView="visible"
                  custom={0.2}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Image
                    className="w-full h-full object-cover"
                    src="/images/maria-2.jpg"
                    alt="Imagem procedimentos"
                    width={200}
                    height={300}
                  />
                </motion.div>

                <motion.div
                  className="h-[48%] overflow-hidden rounded-lg"
                  variants={imageReveal}
                  initial="hidden"
                  whileInView="visible"
                  custom={0.3}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Image
                    className="w-full h-full object-cover"
                    src="/images/maria-3.jpg"
                    alt="Imagem procedimentos"
                    width={200}
                    height={300}
                  />
                </motion.div>
              </div>

              <motion.div
                className="flex-1 overflow-hidden rounded-lg"
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                custom={0.4}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  className="w-full h-full object-cover"
                  src="/images/maria-4.jpg"
                  alt="Imagem procedimentos"
                  width={460}
                  height={600}
                />
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <motion.hr
            className="w-[90%] my-10 border-gray-800 mx-auto border-t-1 lg:mb-10"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Raquel */}
          <div className="px-5 mt-15 mb-20 lg:pl-10 lg:flex lg:flex-row-reverse lg:justify-center lg:mt-30">
            <div className="lg:ml-20">
              <motion.p
                className="text-2xl font-inter text-black mb-5 sm:text-4xl md:text-5xl lg:mb-10 lg:whitespace-nowrap lg:mr-10 xl:text-6xl"
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
              >
                <span>Raquel </span>
                <span className="text-[#c9964d]">Cirqueira</span>
              </motion.p>

              <motion.div
                className="max-w-[800px] lg:text-lg lg:max-w-[600px]"
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                custom={0.15}
                viewport={{ once: true }}
              >
                <div className="mb-5 lg:mb-10">
                  Guiada pela paixão e pela beleza, ela encontrou no design de
                  sobrancelhas o seu verdadeiro propósito. Aos 18 anos, iniciou
                  sua trajetória atendendo a domicílio, transformando o que era
                  apenas um hobby em uma carreira sólida, construída com
                  dedicação, estudo e visão de crescimento. Profissionalizada
                  desde 2020, enfrentou os desafios da pandemia com determinação
                  e, na minha opinião, foi esse cenário que impulsionou sua
                  evolução.
                </div>
                <div className="mb-5 lg:mb-10">
                  Seu trabalho passou a ser reconhecido, fortalecendo sua
                  autoridade e consolidando sua confiança como profissional.
                  <span className="font-bold">
                    {" "}
                    Hoje, atua como lash designer, designer de sobrancelhas e
                    mentora, com o objetivo de transformar a autoestima das
                    pessoas e formar novas profissionais
                  </span>
                  .
                </div>
                Ela entrega mais do que procedimentos, entrega técnica, cuidado
                e valorização da beleza individua. Começou do zero e construiu
                sua trajetória com constância, tornando-se referência para
                mulheres que desejam crescer na área da beleza com propósito,
                profissionalismo e resultados reais.
              </motion.div>
            </div>

            {/* Imagens Raquel */}
            <div className="my-10 flex flex-col gap-5 sm:flex-row sm:justify-center sm:items-stretch md:flex-row md:justify-center md:items-stretch lg:my-0 lg:max-w-[800px] overflow-hidden">
              <motion.div
                className="flex-1 overflow-hidden rounded-lg"
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                custom={0.1}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  className="w-full h-full object-cover"
                  src="/images/quel-1.jpg"
                  alt="Imagem procedimentos"
                  width={460}
                  height={600}
                />
              </motion.div>

              <div className="flex gap-3 sm:flex-col sm:w-[200px] md:flex-col md:w-[200px] lg:justify-between overflow-hidden">
                <motion.div
                  className="h-[48%] overflow-hidden rounded-lg"
                  variants={imageReveal}
                  initial="hidden"
                  whileInView="visible"
                  custom={0.2}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Image
                    className="w-full h-full object-cover"
                    src="/images/quel-2.jpg"
                    alt="Imagem procedimentos"
                    width={200}
                    height={300}
                  />
                </motion.div>

                <motion.div
                  className="h-[48%] overflow-hidden rounded-lg"
                  variants={imageReveal}
                  initial="hidden"
                  whileInView="visible"
                  custom={0.3}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Image
                    className="w-full h-full object-cover"
                    src="/images/quel-3.jpg"
                    alt="Imagem procedimentos"
                    width={200}
                    height={300}
                  />
                </motion.div>
              </div>

              <motion.div
                className="flex-1 overflow-hidden rounded-lg"
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                custom={0.4}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  className="w-full h-full object-cover"
                  src="/images/quel-4.jpg"
                  alt="Imagem procedimentos"
                  width={460}
                  height={600}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
