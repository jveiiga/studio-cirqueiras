import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mt-15 bg-[#4c2a12] text-white p-6 text-center">
            <div className="flex-col sm:flex-col md:flex-row flex justify-between align-center mt-15">

                <div className="w-full max-w-[600px]">
                    <div className="flex flex-col items-start">
                        <p className="text-xl mb-5">Cadastre-se para receber nossa Newsletter</p>
                        <p className="text-md text-left mb-5">Inscreva-se e seja o primeiro a saber sobre nossas últimas novidades, ofertas exclusivas e muito mais.</p>
                    </div>

                    <form className="mt-4 flex w-full gap-2 mb-15">
                        <input
                            type="email"
                            placeholder="Endereço de e-mail"
                            className="p-2 border flex-1"
                        />
                        <button
                            type="submit"
                            className="bg-[#e3b873] text-[#4c2a12] px-4 py-2 hover:bg-[#d1a15c] transition uppercase cursor-pointer"
                        >
                            Enviar
                        </button>
                    </form>

                    <div className="hidden sm:hidden md:flex md:flex-col">
                        <Image
                            src="/images/logo_studio.png"
                            alt="Newsletter"
                            width={200}
                            height={200}
                            className="mt-4"
                        />
                        <div className="flex flex-start">
                            <p>© 2026 Studio Cirqueira's. Todos os direitos reservados.</p>
                        </div>
                        <div className="flex flex-start items-center">
                            <p>Desenvolvido por:</p>
                            <a
                                target="_blank"
                                href="https://jveiga.dev">
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

                <div className="flex-col-reverse sm:flex-col-reverse md:flex-col flex">
                    <div className="block sm:mb-5 md:hidden">
                        <Image
                            src="/images/logo_studio.png"
                            alt="Newsletter"
                            width={200}
                            height={200}
                            className="mt-4"
                        />
                        <div className="flex flex-start">
                            <p>© 2026 Studio Cirqueira's. Todos os direitos reservados.</p>
                        </div>
                        <div className="flex flex-start items-center mt-4">
                            <p>Desenvolvido por:</p>
                            <a
                                target="_blank"
                                href="https://jveiga.dev">
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
                    
                    <div className="flex items-start flex-col">
                        <div className="flex justify-center items-center">
                            <p className="text-lg">Atendimento ao cliente</p>
                        </div>
                        <div className="flex">
                            <Image
                                src="/icons/whatsapp.svg"
                                alt="Atendimento ao cliente"
                                width={25}
                                height={20}
                                className="mx-auto mr-2 invert"
                            />
                            <p className="text-lg">+55 (11) 93238-2035 - Studio</p>
                        </div>
                        <div className="sm:mt-10 mt-20">
                            <p>Nos acompanhe nas redes</p>
                            <div className="flex">
                                <Image
                                    src="/icons/instagram.svg"
                                    alt="Atendimento ao cliente"
                                    width={30}
                                    height={30}
                                    className="mx-auto invert"
                                />
                                <Image
                                    src="/icons/tiktok.svg"
                                    alt="Atendimento ao cliente"
                                    width={30}
                                    height={30}
                                    className="mx-auto invert"
                                />
                                <Image
                                    src="/icons/youtube.svg"
                                    alt="Atendimento ao cliente"
                                    width={30}
                                    height={30}
                                    className="mx-auto invert"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <ul className="flex justify-center py-4 text-white">
                    <li className="relative px-4 before:absolute before:left-0 before:text-[#bc743a]">
                        <a className="relative tracking-wider inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#bc743a] after:transition-all after:duration-300 hover:after:w-full">
                            Quem Somos
                        </a>
                    </li>

                    <li className="relative px-4 before:content-['|'] before:absolute before:left-0 before:text-[#bc743a]">
                        <a className="relative tracking-wider inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#bc743a] after:transition-all after:duration-300 hover:after:w-full">
                            Procedimentos
                        </a>
                    </li>


                    <li className="relative px-4 before:content-['|'] before:absolute before:left-0 before:text-[#bc743a]">
                        <a className="relative tracking-wider inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#bc743a] after:transition-all after:duration-300 hover:after:w-full">
                            Academy
                        </a>
                    </li>

                    <li className="relative px-4 before:content-['|'] before:absolute before:left-0 before:text-[#bc743a]">
                        <a className="relative tracking-wider inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#bc743a] after:transition-all after:duration-300 hover:after:w-full">
                            Studio
                        </a>
                    </li>

                    <li className="relative px-4 before:content-['|'] before:absolute before:left-0 before:text-[#bc743a]">
                        <a className="relative tracking-wider inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#bc743a] after:transition-all after:duration-300 hover:after:w-full">
                            Blog
                        </a>
                    </li>

                    <li className="relative px-4 before:content-['|'] before:absolute before:left-0 before:text-[#bc743a]">
                        <a className="relative tracking-wider inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#bc743a] after:transition-all after:duration-300 hover:after:w-full">
                            Contato
                        </a>
                    </li>
                </ul>

            </div>
        </footer >
    );
}