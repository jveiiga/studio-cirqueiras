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

export default function Academy() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="absolute top-0 left-0 w-full z-420 bg-transparent flex items-center justify-between px-6 py-4">
        <p className="text-2xl font-bold">
          <span className="b-letter text-5xl font-dynalight">B</span>
          <span className="font-poppins font-[400] text-[20px] ml-[-3px]">
            eauty & Academy
          </span>
        </p>
        {/* Menu desktop */}
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
      <section className="relative bg-[url('/images/banner-academy.png')] bg-no-repeat">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex flex-col-reverse pt-5 lg:flex-row-reverse xl:justify-center"
        >
          <div className="relative mx-auto w-full h-[350px] sm:w-[500px] md:w-[600px] xl:w-[700px]">
            <Image
              src="/images/meninas-academy.png"
              alt="Imagem meninas"
              fill
              className="object-contain object-bottom"
            />
          </div>

          <div className="p-4 mt-30 max-w-full flex flex-col items-center lg:flex lg:flex-col lg:justify-center text-black">
            <p className="text-black text-center lg:max-w-[500px]">
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl font-windsong">
                Há{" "}
              </span>
              <span className="text-[#4C2A12] text-4xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-windsong">
                Algo Extraordinário chegando.{" "}
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl font-windsong">
                E você não vai querer ficar de fora.
              </span>
            </p>

            <p className="text-sm text-center max-w-[300px] my-5 sm:text-base md:text-md lg:max-w-[350px] lg:my-10 lg:max-w-[400px] xl:text-lg font-inter">
              Uma jornada que prepara você de verdade. Não só para saber fazer,
              mas para se destacar no mundo real.
            </p>

            <button
              type="button"
              className="mt-5 relative overflow-hidden w-[300] h-[50] lg:h-[40px]
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
        </motion.div>
      </section>

      <section>
        <p className="flex flex-col text-center mt-10">
          <span className="uppercase">Venha Conhecer a</span>
          <div className="mb-5">
            <span className="b-letter text-5xl font-dynalight">B</span>
            <span className="font-poppins font-[400] text-[20px] ml-[-3px]">
              eauty & Academy
            </span>
          </div>
        </p>
        <div className="text-center px-5">
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
            className="mt-5 relative overflow-hidden w-[300] h-[50] lg:h-[40px]
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
        <div className="px-5">
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
          <ul className="flex flex-wrap gap-y-4">
            <li className="flex flex-col items-center gap-2 w-1/2 text-gray-500">
              <GraduationCap size={44} />
              <span className="text-center font-bold">
                Cursos presenciais e online
              </span>
            </li>

            <li className="flex flex-col items-center gap-2 w-1/2 text-gray-500">
              <Presentation size={44} />
              <span className="text-center font-bold">Seminários</span>
            </li>

            <li className="flex flex-col items-center gap-2 w-1/2 text-gray-500">
              <UserCheck size={44} />
              <span className="font-bold">Mentoria individual</span>
            </li>

            <li className="flex flex-col items-center gap-2 w-1/2 text-gray-500">
              <Wrench size={44} />
              <span className="font-bold">Workshops práticos</span>
            </li>

            <li className="flex flex-col items-center gap-2 w-1/2 text-gray-500">
              <Video size={44} />
              <span className="font-bold">Aulas ao vivo</span>
            </li>

            <li className="flex flex-col items-center gap-2 w-1/2 text-gray-500">
              <FileText size={44} />
              <span className="font-bold">Material de apoio</span>
            </li>

            <li className="flex flex-col items-center gap-2 w-1/2 text-gray-500">
              <PlayCircle size={44} />
              <span className="text-center font-bold">Acesso às gravações</span>
            </li>

            <li className="flex flex-col items-center gap-2 w-1/2 text-gray-500">
              <Users size={44} />
              <span className="text-center font-bold">
                Comunidade exclusiva
              </span>
            </li>

            <li className="flex flex-col items-center gap-2 w-1/2 text-gray-500">
              <Headset size={44} />
              <span className="font-bold">Suporte contínuo</span>
            </li>

            <li className="flex flex-col items-center gap-2 w-1/2 text-gray-500">
              <Briefcase size={44} />
              <span className="text-center font-bold">
                Estudos de caso reais
              </span>
            </li>

            <li className="flex flex-col items-center gap-2 w-1/2 text-gray-500">
              <RefreshCcw size={44} />
              <span className="text-center font-bold">
                Atualizações de conteúdo
              </span>
            </li>

            <li className="flex flex-col items-center gap-2 w-1/2 text-gray-500">
              <Award size={44} />
              <span className="font-bold">Certificado</span>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
