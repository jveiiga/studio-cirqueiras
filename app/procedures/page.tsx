"use client";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

type ProcedureItemProps = {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    imageClass?: string;
    textSize?: string;
  };

const Divider = () => (
  <motion.hr
    className="w-[90%] my-10 border-gray-800 mx-auto border-t-1 lg:mb-10 xl:my-20"
    initial={{ x: 80, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  />
);

const ProcedureItem = ({
  image,
  title,
  description,
  buttonText,
  imageClass = "",
  textSize = "text-sm",
}: ProcedureItemProps) => (
  <div className="px-5 md:flex md:flex-col-reverse lg:max-w-[600px] xl:max-w-full xl:flex xl:flex-row-reverse xl:justify-between xl:mb-40 2xl:justify-evenly">
    <div>
      <Image
        src={image}
        alt="Procedures Banner"
        width={1920}
        height={600}
        className={`w-full h-[250px] object-cover rounded-2xl sm:h-[350px] xl:w-[600px] ${imageClass}`}
      />
    </div>

    <div className="flex flex-col justify-start">
      <p className="text-3xl mt-5 xl:text-5xl">{title}</p>
      <p className="my-5 text-sm md:max-w-[400px] lg:max-w-[450px] xl:text-lg">
        {description}
      </p>

      <button
        type="button"
        className="mt-5 mb-8 relative overflow-hidden w-[230] h-[40] lg:h-[40px] md:mt-5
                   text-md text-black border-2 border-[#333]
                   transition-all duration-300
                   after:content-[''] after:absolute after:top-0 after:left-0
                   after:w-0 after:h-full after:bg-black
                   after:transition-all after:duration-300
                   hover:text-white hover:border-white hover:after:w-full
                   group cursor-pointer"
      >
        <span
          className={`relative ${textSize} whitespace-nowrap z-10 uppercase tracking-wider flex items-center gap-1 justify-center h-full`}
        >
          {buttonText}
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
);

export default function Procedures() {
  return (
    <div>
      <Header />

      <section className="bg-[#fdecda]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative min-h-[900px] flex flex-col-reverse bg-[url('/images/mega-fox-bg.png')] bg-no-repeat bg-bottom bg-cover md:min-h-[800px] mb-30 lg:bg-fill md:bg-[position:90%_20%] lg:bg-[position:90%_30%]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#fdecda]/30 to-[#fdecda]/100" />

          <div className="relative flex flex-col justify-end z-10 p-4 max-w-full min-h-[500px] lg:flex lg:flex-col lg:justify-center text-black">
            <div className="lg:pl-[5%]">
              <h1 className="lg:max-w-[500px]">
                <span className="text-5xl sm:text-7xl font-inter">
                  Procedimentos
                </span>
              </h1>

              <p className="text-sm max-w-[500px] mt-5 sm:text-base lg:max-w-[500px] xl:text-lg font-inter">
                Cada detalhe é planejado com precisão para proporcionar uma experiência singular, alinhada às suas necessidades e expectativas.
                Nosso espaço exclusivo foi concebido para oferecer cuidado, conforto e bem-estar em um momento verdadeiramente especial.
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
                  Saiba Mais
                </span>
              </button>
            </div>

            <motion.p
              className="text-sm lg:my-5 lg:ml-[5%] uppercase text-gray-800"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              Conheça nossos procedimentos
            </motion.p>

            <motion.hr
              className="w-[90%] my-5 border-gray-800 lg:mx-auto border-t-1 xl:my-20"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </section>

      <section>
        <ProcedureItem
          image="/images/nail-art.jpg"
          title="Nail Art"
          description="Unhas sem destaque deixam de ser um problema com a Nail Art. Cada detalhe é pensado para valorizar suas mãos, trazendo estilo, personalidade e acabamento impecável."
          buttonText="Destaque suas unhas"
        />
        <Divider />

        <ProcedureItem
          image="/images/banho-de-gel.jpg"
          title="Banho de Gel"
          description="Unhas frágeis e quebradiças deixam de ser um problema com o banho de gel. O procedimento fortalece, protege e garante um acabamento elegante e duradouro."
          buttonText="Sinta essa Mudança"
        />
        <Divider />

        <ProcedureItem
          image="/images/brow-lamination.jpg"
          title="Brow Lamination"
          description="O brow lamination realça o desenho natural das sobrancelhas, proporcionando fios alinhados, aparência mais cheia e um acabamento elegante que transforma o olhar."
          buttonText="Realce seu olhar"
          imageClass="object-[70%_20%] sm:object-[90%_20%]"
        />
        <Divider />

        <ProcedureItem
          image="/images/design-simples.jpg"
          title="Design Simples"
          description="O design simples valoriza o formato natural das sobrancelhas, trazendo harmonia ao rosto com um resultado limpo, delicado e bem definido."
          buttonText="Sinta essa transformação"
          textSize="text-[12px]"
          imageClass="sm:object-[70%_70%]"
        />
        <Divider />

        <ProcedureItem
          image="/images/design-com-henna.jpg"
          title="Design com Henna"
          description="Henna aplicada para criar sobrancelhas mais expressivas, com efeito alinhado, sofisticado e personalizado ao seu rosto."
          buttonText="Defina seu olhar"
          imageClass="object-[70%_20%] sm:object-[70%_10%]"
        />
        <Divider />

        <ProcedureItem
          image="/images/lash-lifiting.jpg"
          title="Lash Lifiting"
          description="Cílios curvados e definidos que abrem o olhar e destacam sua expressão com um efeito natural e sofisticado."
          buttonText="Descubra essa experiência"
          textSize="text-[12px]"
          imageClass="object-[70%_20%] sm:object-[70%_36%]"
        />
        <Divider />

        <ProcedureItem
          image="/images/fox-eyes.jpg"
          title="Fox eyes"
          description="Fox Eyes cria um efeito lifting no olhar, alongando e elevando a expressão para um resultado elegante, definido e atual."
          buttonText="Explore esse novo olhar"
          textSize="text-[12px]"
          imageClass="object-[70%_20%] sm:object-[70%_28%]"
        />
        <Divider />

        <ProcedureItem
          image="/images/mega-fox-bg.png"
          title="Mega Fox"
          description="Mega Fox entrega um olhar intenso e impactante, com alongamento extremo e efeito lifting que transforma a expressão."
          buttonText="Viva essa versão"
          imageClass="object-[70%_20%] sm:object-[70%_10%]"
        />
      </section>

      <Footer />
    </div>
  );
}
