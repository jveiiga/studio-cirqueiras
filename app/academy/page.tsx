"use client";
import Image from "next/image";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
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
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const journeyItems = [
  { icon: <GraduationCap size={44} />, label: "Cursos presenciais e online" },
  { icon: <Presentation size={44} />, label: "Seminários" },
  { icon: <UserCheck size={44} />, label: "Mentoria individual" },
  { icon: <Wrench size={44} />, label: "Workshops práticos" },
  { icon: <Video size={44} />, label: "Aulas ao vivo" },
  { icon: <FileText size={44} />, label: "Material de apoio" },
  { icon: <PlayCircle size={44} />, label: "Acesso às gravações" },
  { icon: <Users size={44} />, label: "Comunidade exclusiva" },
  { icon: <Headset size={44} />, label: "Suporte contínuo" },
  { icon: <Briefcase size={44} />, label: "Estudos de caso reais" },
  { icon: <RefreshCcw size={44} />, label: "Atualizações de conteúdo" },
  { icon: <Award size={44} />, label: "Certificado" },
];

const faqItems = [
  {
    question: "Como a Beauty & Academy pode me ajudar?",
    answer:
      "Você vai fazer parte do nosso ecossistema. Te guiamos para alcançar o próximo nível da sua carreira, oferecendo uma formação completa para você se posicionar com autoridade no mercado de nail e lash. Com uma metodologia própria, você dominará técnicas práticas, estratégias de negócio e desenvolverá a mentalidade de crescimento necessária para transformar sua paixão em autonomia, consistência e um negócio lucrativo.",
  },
  {
    question: "Preciso ter experiência para começar?",
    answer:
      "Não. O método foi desenvolvido para iniciantes e também para profissionais que desejam se aperfeiçoar e aumentar seus resultados no mercado.",
  },
  {
    question: "Em quanto tempo posso começar a ter resultados?",
    answer:
      "Seguindo o método corretamente, muitos alunos já conseguem iniciar atendimentos e gerar renda nos primeiros meses.",
  },
];

export default function Academy() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("whatsapp", form.whatsapp);
      data.append("email", form.email);

      await fetch(
        "https://formsubmit.co/ajax/b1ec62769bc29c7c5cb3e758960017c3",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: data,
        }
      );

      toast.success("Obrigada pelo interesse em participar da próxima turma. Em breve, entraremos em contato 🤎");

      setForm({
        name: "",
        whatsapp: "",
        email: "",
      });
    } catch {
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="overflow-x-hidden">
      {/* HEADER */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full z-420 bg-transparent flex items-center justify-between px-6 py-4"
      >
        <Link href="/" className="text-2xl font-bold">
          <span className="b-letter text-5xl font-dynalight">B</span>
          <span className="font-poppins font-[400] text-[20px] ml-[-3px]">
            eauty & Academy
          </span>
        </Link>
        <ul className="hidden lg:flex gap-10 text-black lg:text-sm">
          {[
            { label: "Quem Somos", href: "/about" },
            { label: "Procedimentos", href: "/procedures" },
            { label: "Beauty & Academy", href: "/academy" },
            { label: "Studio", href: "/studio" },
            { label: "Blog", href: "/blog" },
            { label: "Contato", href: "/contact" },
          ].map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
              className="relative"
            >
              <Link
                href={item.href}
                className="tracking-wider inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#bc743a] after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <Link href="academy">
            <button className="hidden cursor-pointer lg:block lg:text-sm w-[130px] h-[40px] border-2 border-[#333] hover:bg-[#4c2a12] hover:text-white transition">
              Cursos
            </button>
          </Link>
        </motion.div>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full z-50 bg-[url('/images/banner-academy.png')] bg-no-repeat lg:hidden"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* HERO SECTION */}
      <section className="relative bg-[url('/images/banner-academy.png')]">
        <div className="relative flex flex-col-reverse pt-5 justify-center lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative w-full h-[350px] sm:w-[500px] md:w-[600px] lg:h-[600px] xl:w-[700px]"
          >
            <Image
              src="/images/meninas-academy.png"
              alt="Imagem meninas"
              fill
              className="object-contain object-bottom"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            className="p-4 mt-30 max-w-full flex flex-col items-center lg:flex lg:flex-col lg:justify-center text-black"
          >
            <p className="text-black text-center lg:max-w-[500px]">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl font-windsong"
              >
                Há{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
                className="text-[#4C2A12] text-4xl sm:text-7xl md:text-8xl lg:text-5xl font-windsong"
              >
                Algo Extraordinário chegando.{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl font-windsong"
              >
                E você não vai querer ficar de fora.
              </motion.span>
            </p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.5 }}
              className="text-sm text-center max-w-[300px] my-5 sm:text-base md:text-md lg:max-w-[350px] lg:my-5 lg:max-w-[400px] font-inter"
            >
              Uma jornada que prepara você de verdade. Não só para saber fazer,
              mas para se destacar no mundo real.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              href="https://wa.me/5511932382035?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20cursos"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 relative overflow-hidden w-[300px] h-[50px] lg:h-[50px]
               text-md text-black border-2 border-[#333]
               transition-all duration-300
               after:content-[''] after:absolute after:top-0 after:left-0
               after:w-0 after:h-full after:bg-black
               after:transition-all after:duration-300
               hover:text-white hover:border-white hover:after:w-full
               group cursor-pointer inline-block"
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
            </motion.a>
          </motion.div>
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-[#F5EEE4]" />
        </div>
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

      {/* ABOUT SECTION */}
      <section className="max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col text-center mt-10"
        >
          <span className="uppercase lg:text-2xl">Venha Conhecer a</span>
          <div className="mb-5">
            <span className="b-letter text-5xl font-dynalight lg:text-8xl">
              B
            </span>
            <span className="font-poppins font-[400] text-[20px] ml-[-3px] lg:text-7xl">
              eauty & Academy
            </span>
          </div>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center px-5 lg:text-lg lg:max-w-2xl lg:mx-auto"
        >
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
          <motion.a
            whileHover={{ scale: 1.03 }}
            href="https://wa.me/5511932382035?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20cursos"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 relative overflow-hidden w-[300px] h-[50px] lg:h-[50px]
             text-md text-black border-2 border-[#333]
             transition-all duration-300
             after:content-[''] after:absolute after:top-0 after:left-0
             after:w-0 after:h-full after:bg-black
             after:transition-all after:duration-300
             hover:text-white hover:border-white hover:after:w-full
             group cursor-pointer inline-block"
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
          </motion.a>
        </motion.div>

        {/* JOURNEY ICONS */}
        <div className="px-5 lg:px-0">
          <div className="flex justify-center mb-10 mt-15 relative">
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-16 h-16 bg-yellow-400/30 blur-xl rounded-full"
            />
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles
                size={50}
                className="relative text-yellow-400 rotate-12"
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[#4C2A12] text-center text-4xl lg:text-5xl font-windsong mb-10"
          >
            Uma jornada que te guiara
          </motion.p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
            className="flex flex-wrap gap-y-4 lg:grid lg:grid-cols-4 lg:gap-8"
          >
            {journeyItems.map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                }}
                whileHover={{ scale: 1.08, color: "#bc743a" }}
                className="flex flex-col items-center gap-2 w-1/2 lg:w-auto text-gray-500 cursor-default"
              >
                {item.icon}
                <span className="text-center font-bold">{item.label}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* DIVIDER */}
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

      {/* TESTIMONIALS */}
      <section>
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
        <div className="flex">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pt-40 pl-[10%] w-[400px] flex-shrink-0 hidden lg:block"
          >
            <p className="text-3xl">Isso que nos move.</p>
            <p className="font-poppins text-3xl font-bold text-[#4c2a12]">
              Porque sabemos que estamos no caminho certo.
            </p>
          </motion.div>
          <div className="flex-1 min-w-0">
            <CardSlider3 />
          </div>
        </div>
      </section>

      {/* MÉTODO CIRQUEIRA'S */}
      <section
        className="
        relative w-full mx-auto
        lg:flex lg:flex-col lg:items-center lg:gap-16 lg:px-10 lg:py-16
        overflow-hidden
      "
      >
        <div className="absolute inset-0 bg-[url('/images/banner-beauty&academy.png')] bg-cover bg-center bg-no-repeat z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#BC743A]/5 z-10" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative lg:flex-1 z-20"
        >
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <Image
              src="/images/nosso_jeito_cirqueiras.png"
              alt="Jeito Cirqueira's"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl text-center text-black font-poppins lg:mt-30 mb-15"
          >
            <span>Método </span>
            <br className="lg:hidden" />
            <span className="font-bold">Cirqueira&apos;s</span>
          </motion.h2>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="mt-2 mb-10 space-y-2 text-sm px-10 lg:px-0 lg:text-lg"
          >
            {[
              {
                bold: "Mente em fluxo",
                text: "- o estado central de presença e aceitação do processo",
              },
              {
                bold: "Três pilares",
                text: "- Essência, Força e Sonhos como bases do resgate interior",
              },
              {
                bold: "Resultados",
                text: "- libertação de crenças limitantes, evolução humana e crescimento profissional",
              },
              {
                bold: "Transformação plena",
                text: "- a síntese de tudo que o método propõe",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                className="mb-5"
              >
                <span className="font-bold">{item.bold}</span> {item.text}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 px-4 bg-[#BC743A] pb-50 lg:pb-60">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-sm text-gray-500">🙂 </p>
          <h2 className="text-3xl font-bold text-[#FDECDA] mt-2">
            Perguntas frequentes
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="max-w-xl mx-auto mt-8 space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="space-y-2"
            >
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className={`w-full text-left px-5 py-4 rounded-full border-2 transition ${
                  activeIndex === index
                    ? "bg-[#c9964d] border-[#fdecda] text-white"
                    : "bg-[#fdecda] border-[#c9964d] text-gray-700"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{item.question}</span>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-xl font-light"
                  >
                    +
                  </motion.span>
                </div>
              </motion.button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 rounded-2xl border border-[#c9964d] bg-[#fdecda] text-gray-800 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute bottom-[-30] left-0 w-full h-40 bg-gradient-to-b from-transparent via-[#fff]/50 to-[#fff]/100" />
        <div className="pointer-events-none absolute bottom-[-30] left-0 w-full h-40 bg-gradient-to-b from-transparent via-[#fff]/50 to-[#fff]/100" />
        <div className="pointer-events-none absolute bottom-[-30] left-0 w-full h-40 bg-gradient-to-b from-transparent via-[#fff]/50 to-[#fff]/100" />
      </section>

      {/* MISSION SECTION */}
      <section className="mx-auto">
        <div className="flex flex-col lg:flex-row relative">
          <div className="relative">
            <div className="pointer-events-none absolute bottom-0 z-10 left-0 w-full h-30 lg:h-10 bg-gradient-to-b from-transparent via-[#fff]/50 to-[#fff]/100" />
            <div className="pointer-events-none absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-[#fff]/100 via-[#fff]/50 to-transparent" />
            <motion.div
              initial={{ opacity: 0, scale: 1.03 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full lg:w-[100%]"
            >
              <Image
                src="/images/meninas-missao-2.png"
                alt="Studio Cirqueira's — nossa missão"
                width={1500}
                height={500}
                className="h-[80vw] lg:h-[900px] w-full object-cover mb-14 lg:mb-0"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="px-3 lg:px-0 lg:absolute lg:right-10 lg:top-1/2 lg:-translate-y-1/2 lg:w-[35%] bg-white/80 lg:bg-transparent p-6 lg:p-0"
          >
            <span className="text-xs lg:text-sm font-medium tracking-widest uppercase text-[#bc743a] lg:text-[#4c2a12]">
              Nossa missão
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-black-100 mt-5 mb-7">
              Existe um jeito novo de fazer{" "}
              <em className="italic text-[#bc743a] lg:text-[#4c2a12]">
                beleza acontecer.
              </em>
            </h2>
            <p className="text-base font-light leading-loose text-black mb-6 lg:drop-shadow-[0_8px_6px_rgba(0,0,0,0.7)]">
              E ele já chegou. Por muito tempo, aprender beleza significou
              aprender apenas técnica...
            </p>
            <p className="text-base font-light leading-loose text-black lg:drop-shadow-[0_8px_6px_rgba(0,0,0,0.7)]">
              No Studio Cirqueira&apos;s, a gente acredita em outra coisa...
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-3 pb-20 lg:my-30"
        >
          <h3 className="font-serif text-2xl md:text-3xl italic font-bold text-black-100 border-l-2 border-[#bc743a] pl-5 mb-5">
            O sucesso não é sorte. Não é dom. É decisão.
          </h3>
          <p className="text-md lg:text-base font-light leading-loose text-black-400 max-w-2xl pl-5 mb-6">
            Aqui no Studio Cirqueira&apos;s, a gente não forma só profissionais
            que sabem fazer bonito. A gente forma{" "}
            <strong className="text-black-100 font-bold">
              empreendedoras visionárias
            </strong>
            , mulheres que entendem que técnica sem estratégia é talento
            desperdiçado. Mulheres que sabem precificar o próprio trabalho, que
            constroem marca, que atraem cliente certo e cobram o que valem.
          </p>
          <p className="text-md lg:text-base font-light leading-loose text-black-400 max-w-2xl pl-5 mb-6">
            Você vai aprender a{" "}
            <strong className="text-black-100 font-bold">
              viver a beleza como negócio, como arte e como legado
            </strong>
            . Negócio, porque precisa sustentar sua vida. Arte, porque precisa
            fazer sentido pra você. Legado, porque vai além de você: é o que
            fica em cada cliente que você transforma, em cada profissional que
            você inspira.
          </p>
          <p className="text-md lg:text-base font-light leading-loose text-black-400 max-w-2xl pl-5">
            Sem fórmula mágica. Sem atalho. Sem promessa vazia. Aqui é
            conhecimento aplicado, prática de verdade e resultado que você
            enxerga e sente, na sua mão, no seu bolso e na sua nova versão
            profissional.
          </p>
        </motion.div>
      </section>

      {/* WAITLIST FORM */}
      <section className="w-full flex justify-center py-20 lg:py-30 bg-[#fdecda]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-xl text-center px-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-4 font-poppins"
          >
            As vagas não abrem para todos.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-md mb-10"
          >
            Entre na lista prioritária e seja avisada antes do público geral.
          </motion.p>

          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {[
                { name: "name", placeholder: "Seu nome" },
                { name: "whatsapp", placeholder: "WhatsApp" },
                { name: "email", placeholder: "E-mail" },
              ].map((field, i) => (
                <motion.input
                  key={field.name}
                  name={field.name}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileFocus={{ scale: 1.01, borderColor: "#bc743a" }}
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-black"
                />
              ))}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.04, backgroundColor: "#4c2a12" }}
                whileTap={{ scale: 0.97 }}
                animate={!loading ? { scale: [1, 1.03, 1] } : {}}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-4 bg-black text-white py-3 font-medium cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Quero prioridade"
                )}
              </motion.button>

              <p className="text-sm text-gray-600 mt-2">
                Seja avisada primeiro quando as vagas abrirem
              </p>
            </motion.div>
          </form>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
