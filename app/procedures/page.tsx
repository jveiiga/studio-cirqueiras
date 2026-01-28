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
      <Header image="/images/logo_studio.png" />
      <section className="bg-[#fdecda] bg-[url('/images/bg-procedures.png')] bg-no-repeat">
        <motion.div
          className="
      relative
      flex flex-col mb-30 md:mb-20 lg:mb-30
      h-[85vh]
      lg:h-[1000px] 
      sm:h-auto
      sm:flex-row-reverse sm:justify-center
      xl:h-[800px] xl:justify-around
    "
        >
          {/* Container da imagem */}
          <div className="relative z-0 w-full h-full sm:w-1/2 sm:h-auto">
            <Image
              src="/images/meninas-procedures.png"
              alt="Procedimentos"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Overlay de gradiente — MOBILE ORIGINAL */}
          {/* <div
            className="
        pointer-events-none
        absolute inset-0 z-10
        bg-gradient-to-b
        from-black/40 via-[#fdecda]/50 to-[#fdecda]
        sm:hidden
      "
          /> */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-126 bg-gradient-to-b from-transparent to-[#fdecda]" />

          {/* Overlay de gradiente — DESKTOP */}
          <div
            className="
        pointer-events-none
        absolute inset-0 z-10
        hidden sm:block
        bg-gradient-to-b
        from-black/30 via-[#fdecda]/40 to-[#fdecda]
      "
          />

          {/* Container do conteúdo */}
          <div
            className="
        absolute bottom-0 left-0 right-0
        z-20
        w-full
        flex flex-col justify-end
        p-4 min-h-[500px]
        bg-transparent
        sm:static sm:w-1/2 sm:bg-transparent
        xl:justify-center
      "
          >
            <div className="lg:pl-[5%]">
              <h1 className="lg:max-w-[500px]">
                <span className="font-inter text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  Procedimentos
                </span>
              </h1>

              <p className="text-sm max-w-[400px] mt-5 md:text-lg lg:leading-8 xl:text-2xl xl:max-w-[700px] font-inter">
                Cada detalhe é planejado com precisão para proporcionar uma
                experiência singular, alinhada às suas necessidades e
                expectativas.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("sobre")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="my-10 uppercase w-[150px] h-[50px] text-black border border-[#4c2a12]/50 xl:w-[250px] xl:h-[60px]"
              >
                Saiba Mais
              </button>
            </div>

            <motion.p
              className="text-sm lg:ml-[5%] uppercase text-gray-800"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Conheça nossos procedimentos
            </motion.p>

            <motion.hr
              className="w-[90%] my-5 border-gray-800 lg:mx-auto"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </section>

      <section className="mb-30">
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
