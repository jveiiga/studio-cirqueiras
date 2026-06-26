"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

// Variantes de animação reutilizáveis
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Contact() {
  const imageUrl = "/images/banner-contact.png";
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Serviço de interesse",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("phone", form.phone);
      data.append("service", form.service);

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

      toast.success("Agendamento enviado com sucesso 🤎");

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "Serviço de interesse",
      });
    } catch {
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="overflow-x-hidden">
      <section className="bg-[#FDECDA]">
        <Header image="/images/logo_studio.png" />

        {/* HERO / BANNER */}
        <section
          className="relative flex min-h-[700px] lg:h-[80vh] flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-8 text-white"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: "30% 50%",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#4C2A12]/20 via-[#4C2A12]/30 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </section>

        {/* INTRO / STUDIO CIRQUEIRA'S */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute bg-white" />

          <div className="relative max-w-7xl mx-auto px-5 lg:px-16 b-130 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.span
                variants={staggerItem}
                className="font-dynalight text-[#C9964D] text-4xl md:text-5xl"
              >
                Studio Cirqueira&apos;s
              </motion.span>

              <motion.h1
                variants={staggerItem}
                className="font-poppins text-[#4C2A12] text-5xl lg:text-7xl font-semibold leading-tight mt-3"
              >
                Beleza que transforma
                <span className="block font-windsong text-[#C9964D] text-6xl lg:text-8xl font-normal mt-2">
                  autoestima em confiança
                </span>
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="font-inter text-black/90 text-lg leading-8 max-w-xl mt-8"
              >
                Invista em um conceito de beleza pensado para mulheres que
                desejam viver experiências exclusivas, combinando sofisticação,
                acolhimento e resultados que encantam.
              </motion.p>

              <motion.a
                variants={staggerItem}
                href="https://wa.me/5511932382035?text=Olá,%20gostaria%20de%20agendar%20um%20horário"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
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
              </motion.a>
            </motion.div>

            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl">
                <motion.img
                  src="/images/studio-cirqueiras-hero.jpg"
                  alt=""
                  className="w-full h-[600px] object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* SOBRE */}
        <section className="mt-30 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
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
              <motion.a
                href="https://wa.me/5511932382035?text=Olá,%20gostaria%20de%20agendar%20um%20horário"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
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
              </motion.a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
            >
              <img
                src="/images/studio-cirqueiras.jpg"
                className="rounded-[40px] shadow-xl"
                alt=""
              />
            </motion.div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="py-20 bg-gradient-to-b from-[#FDECDA] to-[#ffffff]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <span className="font-dynalight text-[#BC743A] text-5xl">
                Experiência completa
              </span>

              <h2 className="font-poppins text-[#4C2A12] text-4xl mt-4">
                Cuidado em cada detalhe
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-4 gap-6 mt-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 30px -10px rgba(76,42,18,0.15)",
                }}
                className="bg-white rounded-3xl p-8 text-center shadow-sm"
              >
                <div className="text-[#BC743A] text-4xl mb-4">✦</div>
                <h3 className="font-poppins text-[#4C2A12] font-semibold">
                  Atendimento Premium
                </h3>
              </motion.div>

              <motion.div
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 30px -10px rgba(76,42,18,0.15)",
                }}
                className="bg-white rounded-3xl p-8 text-center shadow-sm"
              >
                <div className="text-[#BC743A] text-4xl mb-4">✦</div>
                <h3 className="font-poppins text-[#4C2A12] font-semibold">
                  Técnicas Atualizadas
                </h3>
              </motion.div>

              <motion.div
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 30px -10px rgba(76,42,18,0.15)",
                }}
                className="bg-white rounded-3xl p-8 text-center shadow-sm"
              >
                <div className="text-[#BC743A] text-4xl mb-4">✦</div>
                <h3 className="font-poppins text-[#4C2A12] font-semibold">
                  Ambiente Sofisticado
                </h3>
              </motion.div>

              <motion.div
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 30px -10px rgba(76,42,18,0.15)",
                }}
                className="bg-white rounded-3xl p-8 text-center shadow-sm"
              >
                <div className="text-[#BC743A] text-4xl mb-4">✦</div>
                <h3 className="font-poppins text-[#4C2A12] font-semibold">
                  Produtos Selecionados
                </h3>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section className="bg-[#BC743A] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
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
            </motion.div>

            <motion.div
              className="bg-[#FDECDA] p-5 lg:p-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
            >
              <form onSubmit={handleSubmit}>
                <motion.div
                  className="space-y-5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerContainer}
                >
                  <motion.input
                    variants={staggerItem}
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nome"
                    className="w-full h-14 px-6 border border-black outline-none"
                  />

                  <motion.input
                    variants={staggerItem}
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="E-mail"
                    className="w-full h-14 px-6 border border-black outline-none"
                  />

                  <motion.input
                    variants={staggerItem}
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Telefone"
                    className="w-full h-14 px-6 border border-black outline-none"
                  />

                  <motion.select
                    variants={staggerItem}
                    whileFocus={{ scale: 1.02 }}
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full h-14 px-6 border border-black outline-none"
                  >
                    <option>Serviço de interesse</option>
                    <option>Unhas</option>
                    <option>Sobrancelha</option>
                    <option>Cílios</option>
                    <option>Limpeza</option>
                  </motion.select>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    variants={staggerItem}
                    whileHover={{ scale: 1.04 }}
                    animate={!loading ? { scale: [1, 1.03, 1] } : {}}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-full mt-4 bg-black text-white py-3 font-medium flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      "Agendar atendimento"
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}
