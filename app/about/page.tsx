"use client";
import Image from "next/image";
import Header from "../components/Header";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

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
          className="relative min-h-[700px] flex flex-col-reverse lg:pt-5 lg:flex-row-reverse xl:justify-center bg-[url('/images/meninas-3.png')] bg-no-repeat bg-cover bg-bottom">
          {/* overlay gradiente */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#fdecda]/30 to-[#fdecda]/100" />
          <div className="relative flex flex-col justify-end z-10 p-4 max-w-full min-h-[500px] lg:flex lg:flex-col lg:justify-center text-black">
            <p className="lg:max-w-[500px]">
              <span className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-inter">
                Quem somos?
              </span>
            </p>

            <p className="text-sm max-w-[500px] mt-5 sm:text-base lg:max-w-[400px] xl:text-lg font-inter">
              Conheça nossa trajetória, os caminhos percorridos até aqui e o propósito que nos guia.
            </p>

            <button
              onClick={() =>
                document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative my-10 overflow-hidden uppercase cursor-pointer w-[150px] h-[50px] md:w-[250px] leading-[50px] text-black transition-all duration-300 group"
            >
              <span className="absolute inset-0 bg-[#4c2a12]/20 transition-all duration-300 group-hover:opacity-0 group-hover:scale-x-[0.1] z-0"></span>
              <span className="absolute inset-0 opacity-0 border-t border-b border-[#4c2a12]/50 transition-all duration-300 scale-x-[0.1] group-hover:opacity-100 group-hover:scale-x-100 z-0"></span>
              <span className="relative z-10 text-sm transition-all duration-300 group-hover:tracking-widest">
                Continue lendo
              </span>
            </button>
            <motion.p
              className="text-sm lg:my-5 lg:ml-[5%] uppercase text-gray-800"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >Nos conheça um poco mais</motion.p>
            <motion.hr
              className="w-[90%] my-5 border-gray-800 lg:mx-auto border-t-1 lg:mb-10"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </section>

      <section id="sobre">
        <div className="px-5 mb-20">
          <p className="text-2xl font-inter text-[#c9964d] my-5 sm:text-4xl md:text-5xl xl:text-6xl">
            <span>Mariana </span>
            <span className="text-black">Cirqueira</span>
          </p>
          <p>Ela sempre foi movida pelo universo da beleza e fez das unhas o seu propósito de vida.
            Empreendedora e instrutora Nails, transformou uma decisão tomada aos 16 anos em uma carreira sólida,
            construída com coragem, aprendizado contínuo e visão de futuro. Hoje, vive o extraordinário através das
            unhas, impactando vidas e elevando a autoestima de cada cliente.
            Com uma trajetória marcada por desafios e evolução constante, tornou-se referência não apenas pela técnica,
            mas pela mentalidade empreendedora. Acredito que seu diferencial está na consistência: aprender todos os dias e nunca se acomodar.
            <span className="font-bold"> Mais do que formar profissionais, ela forma mulheres confiantes</span>. Seu trabalho vai além do ensino técnico,
            inspira alunas a acreditarem em si mesmas e a enxergarem no mercado Nails uma oportunidade real
            de transformação pessoal e profissional. Uma história construída do zero, com propósito e ambição clara de crescimento.
          </p>
          <div className="mt-10 md:flex md:flex-col md:items-center md:justify-center">
            <Image
              className="w-full lg:w-full xl:w-[600px] rounded-lg"
              src="/images/maria-1.jpg"
              alt="Imagem procedimentos"
              width={460}
              height={600}
            />
            <div className="flex gap-3 mt-5">
              <Image
                className="w-[49%] sm:w-full md:w-[110px] lg:w-[165px] xl:w-[235px] rounded-lg"
                src="/images/maria-2.jpg"
                alt="Imagem procedimentos"
                width={200}
                height={300}
              />
              <Image
                className="w-[49%] sm:w-full md:w-[110px] lg:w-[165px] xl:w-[235px] rounded-lg"
                src="/images/maria-3.jpg"
                alt="Imagem procedimentos"
                width={200}
                height={300}
              />
            </div>
            <Image
              className="mt-5 w-full lg:w-full xl:w-[600px] rounded-lg"
              src="/images/maria-4.jpg"
              alt="Imagem procedimentos"
              width={460}
              height={600}
            />
          </div>
          <div>
          </div>
          <motion.hr
            className="w-[90%] my-10 border-gray-800 lg:mx-auto border-t-1 lg:mb-10"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <p className="text-2xl font-inter text-black my-5 sm:text-4xl md:text-5xl xl:text-6xl">
            <span>Raquel </span>
            <span className="text-[#c9964d]">Cirqueira</span>
          </p>
          <p>
            Guiada pela paixão e pela beleza, ela encontrou no design de sobrancelhas o seu verdadeiro propósito.
            Aos 18 anos, iniciou sua trajetória atendendo a domicílio, transformando o que era apenas um hobby
            em uma carreira sólida, construída com dedicação, estudo e visão de crescimento.
            Profissionalizada desde 2020, enfrentou os desafios da pandemia com determinação e, na minha opinião,
            foi esse cenário que impulsionou sua evolução. Seu trabalho passou a ser reconhecido, fortalecendo sua
            autoridade e consolidando sua confiança como profissional.
            Hoje, atua como designer de sobrancelhas e mentora, com o objetivo de transformar a autoestima das
            pessoas e formar novas profissionais. <span className="font-bold">
              Ela entrega mais do que procedimentos, entrega técnica, cuidado e valorização
              da beleza individual
            </span>.
            Começou do zero e construiu sua trajetória com constância, tornando-se referência para mulheres que
            desejam crescer na área da beleza com propósito, profissionalismo e resultados reais.
          </p>
          <div className="my-10 md:flex md:flex-col md:items-center md:justify-center">
            <Image
              className="w-full lg:w-full xl:w-[600px] rounded-lg"
              src="/images/quel-1.jpg"
              alt="Imagem procedimentos"
              width={460}
              height={600}
            />
            <div className="flex gap-3 mt-5">
              <Image
                className="w-[49%] sm:w-full md:w-[110px] lg:w-[165px] xl:w-[235px] rounded-lg"
                src="/images/quel-2.jpg"
                alt="Imagem procedimentos"
                width={200}
                height={300}
              />
              <Image
                className="w-[49%] sm:w-full md:w-[110px] lg:w-[165px] xl:w-[235px] rounded-lg"
                src="/images/quel-3.jpg"
                alt="Imagem procedimentos"
                width={200}
                height={300}
              />
            </div>
            <Image
              className="mt-5 w-full lg:w-full xl:w-[600px] rounded-lg"
              src="/images/quel-4.jpg"
              alt="Imagem procedimentos"
              width={460}
              height={600}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}