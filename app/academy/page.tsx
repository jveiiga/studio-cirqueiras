"use client";
import Image from "next/image";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import "./style.css";
import Link from "next/link";
import {
  GraduationCap,
  Presentation,
  UserCheck,
  Wrench,
  Video,
  FileText,
  PlayCircle,
  Users,
  Headset,
  Briefcase,
  RefreshCcw,
  Award,
  Sparkles,
} from "lucide-react";
import CardSlider2 from "../components/SwipperProducts";
import CardSlider3 from "../components/SwipperTestimony";

export default function Academy() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  return (
    <div>
      <header className="absolute top-0 left-0 w-full z-420 bg-transparent flex items-center justify-between px-6 py-4">
        <p className="text-2xl font-bold">
          <span className="b-letter text-5xl font-dynalight">B</span>
          <span className="font-poppins font-[400] text-[20px] ml-[-3px]">
            eauty & Academy
          </span>
        </p>
        <ul className="hidden lg:flex gap-10 text-black lg:text-sm">
          {[
            { label: "Quem Somos", href: "/about" },
            { label: "Procedimentos", href: "/procedures" },
            { label: "Beauty & Academy", href: "/academy" },
            { label: "Studio", href: "/studio" },
            { label: "Blog", href: "/blog" },
            { label: "Contato", href: "/contact" },
          ].map((item) => (
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

        <button className="hidden cursor-pointer lg:block lg:text-sm w-[130px] h-[40px] border-2 border-[#333] hover:bg-[#4c2a12] hover:text-white transition">
          Cursos
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>

        {open && (
          <div className="absolute top-full left-0 w-full z-50 bg-[url('/images/banner-academy.png')] bg-no-repeat lg:hidden">
            <ul className="flex flex-col items-center gap-6 py-6">
              {[
                { label: "Quem Somos", href: "/about" },
                { label: "Procedimentos", href: "/procedures" },
                { label: "Beauty & Academy", href: "/academy" },
                { label: "Studio", href: "/studio" },
                { label: "Blog", href: "/blog" },
                { label: "Contato", href: "/contact" },
              ].map((item) => (
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

      <section className="relative bg-[url('/images/banner-academy.png')]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex flex-col-reverse pt-5 justify-center lg:flex-row lg:items-end"
        >
          <div className="relative w-full h-[350px] sm:w-[500px] md:w-[600px] lg:h-[600px] xl:w-[700px]">
            <Image
              src="/images/meninas-academy.png"
              alt="Imagem meninas"
              fill
              className="object-contain object-bottom"
            />
          </div>

          <div className="p-4 mt-30 max-w-full flex flex-col items-center lg:flex lg:flex-col lg:justify-center text-black">
            <p className="text-black text-center lg:max-w-[500px]">
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl font-windsong">
                Há{" "}
              </span>
              <span className="text-[#4C2A12] text-4xl sm:text-7xl md:text-8xl lg:text-5xl font-windsong">
                Algo Extraordinário chegando.{" "}
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl font-windsong">
                E você não vai querer ficar de fora.
              </span>
            </p>

            <p className="text-sm text-center max-w-[300px] my-5 sm:text-base md:text-md lg:max-w-[350px] lg:my-5 lg:max-w-[400px] font-inter">
              Uma jornada que prepara você de verdade. Não só para saber fazer,
              mas para se destacar no mundo real.
            </p>

            <button
              type="button"
              className="mt-5 relative overflow-hidden w-[300] h-[50] lg:h-[50px]
                text-md text-black border-2 border-[#333]
                transition-all duration-300
                after:content-[''] after:absolute after:top-0 after:left-0
                after:w-0 after:h-full after:bg-black
                after:transition-all after:duration-300
                hover:text-white hover:border-white hover:after:w-full
                group cursor-pointer"
            >
              <span className="relative whitespace-nowrap z-10 uppercase tracking-wider flex items-center gap-1 justify-center h-full">
                Quero ser uma aluna
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
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-[#F5EEE4]" />
        </motion.div>
      </section>

      <div className="relative w-full leading-none -mt-[1px]">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-[250px]"
        >
          <path
            fill="#F5EEE4"
            d="M0,40 C240,80 480,0 720,20 960,40 1200,80 1440,40 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <section className="max-w-4xl mx-auto px-6">
        <p className="flex flex-col text-center mt-10">
          <span className="uppercase lg:text-2xl">Venha Conhecer a</span>
          <div className="mb-5">
            <span className="b-letter text-5xl font-dynalight lg:text-8xl ">
              B
            </span>
            <span className="font-poppins font-[400] text-[20px] ml-[-3px] lg:text-7xl">
              eauty & Academy
            </span>
          </div>
        </p>
        <div className="text-center px-5 lg:text-lg lg:max-w-2xl lg:mx-auto">
          <p>
            A Beauty & Academy{" "}
            <span className="font-bold">
              prepara profissionais para se posicionarem com autoridade em um
              dos mercados mais promissores da atualidade
            </span>
            . Nosso método foi criado para ir além da técnica, conectando
            conhecimento prático, visão estratégica e desenvolvimento pessoal.
          </p>

          <p className="my-5">
            Aqui, você não apenas aprende sobre beleza. Você entende como
            transformar habilidades em valor, estruturar seu negócio e{" "}
            <span className="font-bold">
              desenvolver uma mentalidade de crescimento
            </span>
            . O foco é autonomia, consistência e resultado.
          </p>

          <p>
            Você também passa a fazer parte do nosso ecossistema, onde o
            aprendizado é contínuo e o avanço coletivo fortalece o sucesso.
            <span className="font-bold">
              Troca, incentivo e inspiração fazem parte da jornada
            </span>
            . No final do processo, você estará preparada para conduzir sua
            carreira.
          </p>
          <button
            type="button"
            className="mt-5 relative overflow-hidden w-[300] h-[50] lg:h-[50px]
                text-md text-black border-2 border-[#333]
                transition-all duration-300
                after:content-[''] after:absolute after:top-0 after:left-0
                after:w-0 after:h-full after:bg-black
                after:transition-all after:duration-300
                hover:text-white hover:border-white hover:after:w-full
                group cursor-pointer"
          >
            <span className="relative whitespace-nowrap z-10 uppercase tracking-wider flex items-center gap-1 justify-center h-full">
              Pronta para evoluir?
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

        <div className="px-5 lg:px-0">
          <div className="flex justify-center mb-10 mt-15 relative">
            <div className="absolute w-16 h-16 bg-yellow-400/30 blur-xl rounded-full" />
            <Sparkles
              size={50}
              className="relative text-yellow-400 rotate-12"
            />
          </div>

          <p className="text-[#4C2A12] text-center text-4xl font-windsong mb-10">
            Uma jornada que te guiara
          </p>

          <ul className="flex flex-wrap gap-y-4 lg:grid lg:grid-cols-4 lg:gap-8">
            <li className="flex flex-col items-center gap-2 w-1/2 lg:w-auto text-gray-500">
              <GraduationCap size={44} />
              <span className="text-center font-bold">
                Cursos presenciais e online
              </span>
            </li>
            <li className="flex flex-col items-center gap-2 w-1/2 lg:w-auto text-gray-500">
              <Presentation size={44} />
              <span className="text-center font-bold">Seminários</span>
            </li>
            <li className="flex flex-col items-center gap-2 w-1/2 lg:w-auto text-gray-500">
              <UserCheck size={44} />
              <span className="font-bold">Mentoria individual</span>
            </li>
            <li className="flex flex-col items-center gap-2 w-1/2 lg:w-auto text-gray-500">
              <Wrench size={44} />
              <span className="font-bold">Workshops práticos</span>
            </li>
            <li className="flex flex-col items-center gap-2 w-1/2 lg:w-auto text-gray-500">
              <Video size={44} />
              <span className="font-bold">Aulas ao vivo</span>
            </li>
            <li className="flex flex-col items-center gap-2 w-1/2 lg:w-auto text-gray-500">
              <FileText size={44} />
              <span className="font-bold">Material de apoio</span>
            </li>
            <li className="flex flex-col items-center gap-2 w-1/2 lg:w-auto text-gray-500">
              <PlayCircle size={44} />
              <span className="text-center font-bold">Acesso às gravações</span>
            </li>
            <li className="flex flex-col items-center gap-2 w-1/2 lg:w-auto text-gray-500">
              <Users size={44} />
              <span className="text-center font-bold">
                Comunidade exclusiva
              </span>
            </li>
            <li className="flex flex-col items-center gap-2 w-1/2 lg:w-auto text-gray-500">
              <Headset size={44} />
              <span className="font-bold">Suporte contínuo</span>
            </li>
            <li className="flex flex-col items-center gap-2 w-1/2 lg:w-auto text-gray-500">
              <Briefcase size={44} />
              <span className="text-center font-bold">
                Estudos de caso reais
              </span>
            </li>
            <li className="flex flex-col items-center gap-2 w-1/2 lg:w-auto text-gray-500">
              <RefreshCcw size={44} />
              <span className="text-center font-bold">
                Atualizações de conteúdo
              </span>
            </li>
            <li className="flex flex-col items-center gap-2 w-1/2 lg:w-auto text-gray-500">
              <Award size={44} />
              <span className="font-bold">Certificado</span>
            </li>
          </ul>
        </div>
      </section>

      <div className="my-10 mx-[5%]">
        <motion.p
          className="text-sm lg:ml-[5%] uppercase text-gray-800"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          O que estamos preparando
        </motion.p>
        <motion.hr
          className="w-[90%] my-5 border-gray-800 lg:mx-auto border-t-1 lg:mt-10"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      <section>
        <CardSlider2 />
      </section>

      <div className="my-10 mx-[5%]">
        <motion.p
          className="text-sm lg:ml-[5%] uppercase text-gray-800"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          O que nossos alunos dizem
        </motion.p>
        <motion.hr
          className="w-[90%] my-5 border-gray-800 lg:mx-auto border-t-1 lg:mt-10"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      <section>
        <CardSlider3 />
      </section>

      <section className="w-full max-w-[500px] lg:max-w-4xl mx-auto lg:flex lg:flex-col lg:items-center lg:gap-16 lg:px-10 lg:py-16">
        <div className="relative w-full h-[400px] lg:h-[500px]">
          <Image
            src="/images/nosso_jeito_cirqueiras.png"
            alt="Jeito Cirqueira's"
            fill
            className="object-contain rounded-2xl"
          />
        </div>

        <div className="lg:flex-1">
          <h2 className="text-3xl lg:text-5xl text-center font-poppins mb-15">
            <span>Método </span>
            <br className="lg:hidden" />
            <span className="font-bold">Cirqueira&apos;s</span>
          </h2>

          <ul className="mt-2 mb-10 space-y-2 text-sm px-10 lg:px-0 lg:text-lg">
            <li className="mb-5">
              <span className="font-bold">Mente em fluxo</span> - o estado
              central de presença e aceitação do processo
            </li>
            <li className="mb-5">
              <span className="font-bold">Três pilares</span> - Essência, Força
              e Sonhos como bases do resgate interior
            </li>
            <li className="mb-5">
              <span className="font-bold">Resultados</span> - libertação de
              crenças limitantes, evolução humana e crescimento profissional
            </li>
            <li className="mb-5">
              <span className="font-bold">Transformação plena</span> - a síntese
              de tudo que o método propõe
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#f5e9ea]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm text-gray-500">😉</p>
          <h2 className="text-3xl font-bold text-[#b07a7f] mt-2">
            Perguntas frequentes
          </h2>
        </div>

        <div className="max-w-xl mx-auto mt-8 space-y-4">
          <button
            onClick={() => setActiveIndex(activeIndex === 0 ? null : 0)}
            className={`w-full text-left px-5 py-4 rounded-full border-2 transition ${
              activeIndex === 0
                ? "bg-[#c9898f] border-yellow-400 text-white"
                : "bg-white border-[#e5c9cc] text-gray-700"
            }`}
          >
            <div className="flex justify-between items-center">
              <span>Como a Beauty & Academy pode me ajudar?</span>
              <span>{activeIndex === 0 ? "—" : "+"}</span>
            </div>
          </button>

          {activeIndex === 0 && (
            <div className="p-6 rounded-2xl border border-[#d9a5a8] bg-[#f2e6e7] text-gray-800 leading-relaxed">
              Você vai fazer parte do nosso ecossistema. Te guiamos para
              alcançar o próximo nível da sua carreira, oferecendo uma formação
              completa para você se posicionar com autoridade no mercado de nail
              e lash. Com uma metodologia própria, você dominará técnicas{" "}
              <b>práticas</b>, estratégias de <b>negócio</b> e desenvolverá a{" "}
              <b>mentalidade</b> de crescimento necessária para transformar sua
              paixão em autonomia, consistência e um negócio lucrativo.
            </div>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-8 py-20">
        <Image
          src=""
          alt="Studio Cirqueira's — nossa missão"
          className="w-full aspect-video object-cover rounded mb-14"
        />

        <span className="text-xs font-medium tracking-widest uppercase text-amber-600">
          Nossa missão
        </span>

        <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-black-100 mt-5 mb-7 max-w-2xl">
          Existe um jeito novo de fazer{" "}
          <em className="italic text-amber-600">beleza acontecer.</em>
        </h2>

        <p className="text-base font-light leading-loose text-black-300 max-w-2xl mb-6">
          E ele já chegou. Por muito tempo, aprender beleza significou aprender
          apenas técnica: repetir movimentos, copiar resultados, seguir um
          manual. Mas o mercado mudou. As clientes mudaram. E quem ainda pensa
          só em técnica, fica para trás.
        </p>

        <p className="text-base font-light leading-loose text-black-300 max-w-2xl mb-14">
          No Studio Cirqueira&apos;s, a gente acredita em outra coisa. Educação de
          verdade é aquela que forma a mão, forma o olhar e forma a mente. É
          integrada. É sistêmica. É sem limites e sem barreiras entre o que você
          sabe fazer e o que você pode construir.
        </p>

        <h3 className="font-serif text-2xl md:text-3xl italic font-bold text-black-100 border-l-2 border-amber-600 pl-5 mb-5">
          O sucesso não é sorte. Não é dom. É decisão.
        </h3>

        <p className="text-sm font-light leading-loose text-black-400 max-w-2xl pl-5 mb-6">
          Aqui no Studio Cirqueira&apos;s, a gente não forma só profissionais que
          sabem fazer bonito. A gente forma{" "}
          <strong className="text-black-100 font-bold">
            empreendedoras visionárias
          </strong>
          , mulheres que entendem que técnica sem estratégia é talento
          desperdiçado. Mulheres que sabem precificar o próprio trabalho, que
          constroem marca, que atraem cliente certo e cobram o que valem.
        </p>

        <p className="text-sm font-light leading-loose text-black-400 max-w-2xl pl-5 mb-6">
          Você vai aprender a{" "}
          <strong className="text-black-100 font-bold">
            viver a beleza como negócio, como arte e como legado
          </strong>
          . Negócio, porque precisa sustentar sua vida. Arte, porque precisa
          fazer sentido pra você. Legado, porque vai além de você: é o que fica
          em cada cliente que você transforma, em cada profissional que você
          inspira.
        </p>

        <p className="text-sm font-light leading-loose text-black-400 max-w-2xl pl-5">
          Sem fórmula mágica. Sem atalho. Sem promessa vazia. Aqui é
          conhecimento aplicado, prática de verdade e resultado que você enxerga
          e sente, na sua mão, no seu bolso e na sua nova versão profissional.
        </p>
      </section>

      <section className="w-full flex justify-center py-10 bg-[#fdecda]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-xl text-center px-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-semibold mb-4 font-poppins"
          >
            As vagas não abrem para todos.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-md mb-10"
          >
            Entre na lista prioritária e seja avisada antes do público geral.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="WhatsApp"
              className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="E-mail"
              className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-black"
            />
            <motion.button
              whileHover={{ scale: 1.04 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-4 bg-black text-white py-3 font-medium"
            >
              Quero prioridade
            </motion.button>
            <p className="text-sm text-gray-600 mt-2">
              Seja avisada primeiro quando as vagas abrirem
            </p>
          </motion.form>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
