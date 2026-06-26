"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://formsubmit.co/ajax/b1ec62769bc29c7c5cb3e758960017c3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      toast.success("Obrigado por se inscrever 🤎");
      setEmail("");
    } catch (err) {
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <footer className="text-md lg:pt-15 bg-[#4c2a12] text-white p-6">
      <div className=" flex flex-col justify-around align-center mt-15 lg:flex-row">
        <div className="w-full max-w-[600px]">
          <div className="flex flex-col items-start">
            <p className="text-xl mb-5">
              Cadastre-se para receber nossa Newsletter
            </p>
            <p className="text-sm text-left mb-5">
              Inscreva-se e seja o primeiro a saber sobre nossas últimas
              novidades, ofertas exclusivas e muito mais.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-4 flex w-full gap-2 mb-10"
          >
            <input
              type="email"
              placeholder="Endereço de e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 border flex-1"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#e3b873] text-[#4c2a12] px-4 py-2 hover:bg-[#d1a15c] transition uppercase cursor-pointer flex items-center gap-2"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Enviar"
              )}
            </button>
          </form>

          <div className="hidden lg:flex lg:flex-col">
            <Link href="/">
              <Image
                src="/images/logo_studio.png"
                alt="Newsletter"
                width={200}
                height={200}
                className="mt-4"
              />
            </Link>
            <div className="flex flex-start">
              <p>
                © 2026 Studio Cirqueira&apos;s. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex flex-start items-center">
              <p>Desenvolvido por:</p>
              <a target="_blank" href="https://jveiga.dev">
                <Image
                  src="/images/logo-jveiga.png"
                  alt="Newsletter"
                  width={100}
                  height={200}
                  className="ml-2 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse">
          <div className="block sm:mb-5 lg:hidden">
            <Link href="/">
              <Image
                src="/images/logo_studio.png"
                alt="Newsletter"
                width={100}
                height={200}
                className="mt-4"
              />
            </Link>
            <div className="flex flex-start text-sm">
              <p>
                © 2026 Studio Cirqueira&apos;s. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex flex-start items-center mt-4">
              <p>Desenvolvido por:</p>
              <a target="_blank" href="https://jveiga.dev">
                <Image
                  src="/images/logo-jveiga.png"
                  alt="Newsletter"
                  width={100}
                  height={200}
                  className="ml-2 cursor-pointer"
                />
              </a>
            </div>
          </div>

          <div className="flex items-start flex-col lg:h-full">
            <div className="flex justify-center items-center">
              <p className="text-sm lg:text-lg">Atendimento ao cliente</p>
            </div>
            <div className="flex">
              <Image
                src="/icons/whatsapp.svg"
                alt="Atendimento ao cliente"
                width={15}
                height={20}
                className="mx-auto mr-2 invert"
              />
              <a
                href="https://wa.me/5511932382035?text=Olá,%20gostaria%20de%20ser%20atendida(o)"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-sm">+55 (11) 93238-2035 - Studio</p>
              </a>
            </div>
            <div className="sm:mt-10 mt-5">
              <p className="text-sm">Nos acompanhe nas redes</p>
              <div className="flex">
                <a
                  href="https://www.instagram.com/studio.cirqueiras/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={30}
                    className="mx-auto mr-10 invert"
                  />
                </a>

                <a
                  href="https://www.tiktok.com/@raqulldesigner?_r=1&_t=ZS-97Vw7yrGaQe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/icons/tiktok.svg"
                    alt="TikTok"
                    width={20}
                    height={30}
                    className="mx-auto mr-10 invert"
                  />
                </a>

                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/icons/youtube.svg"
                    alt="YouTube"
                    width={20}
                    height={30}
                    className="mx-auto invert"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ul className="flex flex-wrap justify-center gap-3 py-4 text-white sm:flex-nowrap">
          <li className="relative px-4">
            <a
              href="/about"
              className="relative text-sm tracking-wider inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#bc743a] after:transition-all after:duration-300 hover:after:w-full"
            >
              Quem Somos
            </a>
          </li>

          <li className="relative px-4 before:content-['|'] before:absolute before:left-0 before:text-[#bc743a]">
            <a
              href="/procedures"
              className="relative text-sm tracking-wider inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#bc743a] after:transition-all after:duration-300 hover:after:w-full"
            >
              Procedimentos
            </a>
          </li>

          <li className="relative px-4 before:content-['|'] before:absolute before:left-0 before:text-[#bc743a]">
            <a
              href="/academy"
              className="relative text-sm tracking-wider inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#bc743a] after:transition-all after:duration-300 hover:after:w-full"
            >
              Academy
            </a>
          </li>

          <li className="relative px-4 before:content-['|'] before:absolute before:left-0 before:text-[#bc743a]">
            <a
              href="/studio"
              className="relative text-sm tracking-wider inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#bc743a] after:transition-all after:duration-300 hover:after:w-full"
            >
              Studio
            </a>
          </li>

          <li className="relative px-4 before:content-['|'] before:absolute before:left-0 before:text-[#bc743a]">
            <Link
              href="/blog"
              className="relative text-sm tracking-wider inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#bc743a] after:transition-all after:duration-300 hover:after:w-full"
            >
              Blog
            </Link>
          </li>

          <li className="relative px-4 before:content-['|'] before:absolute before:left-0 before:text-[#bc743a]">
            <a
              href="/contact"
              className="relative text-sm tracking-wider inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#bc743a] after:transition-all after:duration-300 hover:after:w-full"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
