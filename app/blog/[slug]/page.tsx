import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "design-sobrancelha") {
    return (
      <div>
        <Header image="/images/logo_studio.png" />
        <div className="relative flex justify-center items-center">
          <Image
            src="/images/design-sobrancelha-blog.png"
            alt="Design de Sobrancelhas"
            width={1900}
            height={600}
            className="w-full"
          />

          <a
            href="/blog"
            className="absolute top-1/2 left-3 lg:left-8 -translate-y-1/2
              w-[80px] sm:w-[300px] lg:w-[220px] h-[30px] lg:h-[50px]
              text-xs lg:text-md text-white border-2 border-white
              transition-all duration-300
              after:content-[''] after:absolute after:top-0 after:left-0
              after:w-0 after:h-full after:bg-white
              after:transition-all after:duration-300
              hover:text-[#BC743A] hover:after:w-full
              group cursor-pointer flex items-center justify-center"
          >
            <span className="relative whitespace-nowrap z-10 uppercase tracking-wider flex items-center gap-1 justify-center h-full">
              ← Voltar
            </span>
          </a>
        </div>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <p className="text-sm text-gray-500 mb-4">
            junho 25, 2026 | Sobrancelhas
          </p>

          <h1 className="text-5xl font-light mb-8">
            Design de Sobrancelhas: tudo o que você precisa saber
          </h1>

          <p className="mb-4">
            O design de sobrancelhas é um dos procedimentos estéticos mais
            procurados atualmente. Muito além da remoção de pelos, ele tem como
            objetivo valorizar os traços do rosto, proporcionar harmonia facial
            e destacar a beleza natural de cada pessoa.
          </p>

          <p className="mb-4">
            Quando realizado por uma profissional qualificada, o procedimento
            respeita características individuais como formato do rosto,
            expressão facial e densidade dos fios, criando um resultado
            personalizado e equilibrado.
          </p>

          <p className="mb-10">
            Neste conteúdo, você vai entender como funciona o design de
            sobrancelhas, quais são seus benefícios e os cuidados necessários
            para manter o resultado bonito por mais tempo.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            O que é o design de sobrancelhas?
          </h2>

          <p className="mb-4">
            O design de sobrancelhas é uma técnica que busca identificar o
            formato ideal para cada rosto. Através de medições, análise facial e
            estudo das proporções, a profissional cria um desenho capaz de
            realçar a beleza natural sem perder a personalidade da cliente.
          </p>

          <p className="mb-10">
            Diferente da simples retirada de pelos, o design trabalha a
            arquitetura das sobrancelhas, respeitando o crescimento natural dos
            fios e corrigindo pequenas assimetrias quando necessário.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Quais são os benefícios do procedimento?
          </h2>

          <p className="mb-4">
            Um dos principais benefícios é a valorização do olhar. Sobrancelhas
            bem desenhadas transmitem mais expressão, rejuvenescem a aparência e
            ajudam a destacar os olhos.
          </p>

          <p className="mb-4">
            O procedimento também proporciona praticidade para o dia a dia, já
            que os fios passam a crescer de maneira mais organizada, facilitando
            a manutenção e reduzindo a necessidade de correções frequentes.
          </p>

          <p className="mb-10">
            Além disso, o design pode corrigir falhas visuais, equilibrar
            formatos e devolver harmonia ao conjunto facial sem a necessidade de
            procedimentos invasivos.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Como é realizado o design de sobrancelhas?
          </h2>

          <p className="mb-4">
            O atendimento começa com uma avaliação individual. Nesse momento,
            são analisados aspectos como formato do rosto, distância entre os
            olhos, estrutura óssea e características dos fios.
          </p>

          <p className="mb-4">
            Após essa análise, é feito o mapeamento facial para definir pontos
            estratégicos de início, arco e término das sobrancelhas. Somente
            depois dessa etapa é realizada a remoção dos pelos excedentes.
          </p>

          <p className="mb-10">
            Dependendo da necessidade da cliente, podem ser utilizados recursos
            complementares como henna, coloração dos fios ou alinhamento para um
            acabamento ainda mais refinado.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Com que frequência devo fazer manutenção?
          </h2>

          <p className="mb-4">
            A frequência varia de acordo com o crescimento dos fios de cada
            pessoa. Em média, a manutenção é recomendada entre 15 e 30 dias após
            o procedimento.
          </p>

          <p className="mb-10">
            Respeitar esse intervalo ajuda a preservar o desenho original e
            evita a retirada excessiva de pelos, garantindo um resultado mais
            bonito e duradouro.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Cuidados após o procedimento
          </h2>

          <p className="mb-4">
            Após o design, recomenda-se evitar manipular excessivamente a região
            e seguir as orientações fornecidas pela profissional. Em casos de
            aplicação de henna ou coloração, alguns cuidados específicos podem
            ser necessários para ampliar a durabilidade.
          </p>

          <p className="mb-10">
            Também é importante evitar retirar pelos em casa entre as
            manutenções, preservando o formato criado durante o atendimento.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Realce sua beleza com segurança
          </h2>

          <p className="mb-4">
            O design de sobrancelhas é um procedimento capaz de transformar a
            expressão facial de forma delicada e natural. Quando realizado por
            profissionais experientes, proporciona mais harmonia, autoestima e
            confiança.
          </p>

          <p>
            Se você deseja valorizar seu olhar e descobrir o formato ideal para
            suas sobrancelhas, agende uma avaliação com nossa equipe e conheça
            as técnicas exclusivas do Studio Cirqueiras.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  if (slug === "micropigmentacao") {
    return (
      <div>
        <Header image="/images/logo_studio.png" />
        <div className="relative flex justify-center items-center">
          <Image
            src="/images/micro-blog.png"
            alt="Design de Sobrancelhas"
            width={1900}
            height={600}
            className="w-full"
          />

          <a
            href="/blog"
            className="absolute top-1/2 left-3 lg:left-8 -translate-y-1/2
                w-[80px] sm:w-[300px] lg:w-[220px] h-[30px] lg:h-[50px]
                text-xs lg:text-md text-white border-2 border-white
                transition-all duration-300
                after:content-[''] after:absolute after:top-0 after:left-0
                after:w-0 after:h-full after:bg-white
                after:transition-all after:duration-300
                hover:text-[#BC743A] hover:after:w-full
                group cursor-pointer flex items-center justify-center"
          >
            <span className="relative whitespace-nowrap z-10 uppercase tracking-wider flex items-center gap-1 justify-center h-full">
              ← Voltar
            </span>
          </a>
        </div>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <p className="text-sm text-gray-500 mb-4">
            junho 25, 2026 | Sobrancelhas
          </p>

          <h1 className="text-5xl font-light mb-8">
            10 hábitos essenciais para prolongar a micropigmentação
          </h1>

          <p className="mb-4">
            A micropigmentação é um procedimento estético que realça traços e
            proporciona praticidade no dia a dia, mas sua durabilidade depende
            diretamente dos cuidados adotados após a realização.
          </p>

          <p className="mb-4">
            Pequenos hábitos diários podem influenciar significativamente a
            retenção do pigmento na pele, mantendo o resultado mais bonito e
            uniforme por mais tempo.
          </p>

          <p className="mb-10">
            Neste conteúdo, você vai conhecer 10 práticas fundamentais para
            preservar a micropigmentação e evitar o desbotamento precoce.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Evite exposição solar excessiva
          </h2>

          <p className="mb-4">
            A radiação solar é um dos principais fatores que aceleram o
            desbotamento do pigmento. O uso de proteção adequada ajuda a
            preservar a cor.
          </p>

          <p className="mb-10">
            Sempre que possível, evite exposição direta ao sol nos primeiros
            dias após o procedimento.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Mantenha a pele hidratada
          </h2>

          <p className="mb-4">
            A hidratação adequada da pele contribui para a fixação do pigmento e
            melhora a aparência geral da região pigmentada.
          </p>

          <p className="mb-10">
            Produtos recomendados pela profissional devem ser priorizados para
            evitar irritações.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Evite coçar ou esfregar a região
          </h2>

          <p className="mb-4">
            O atrito excessivo pode comprometer a fixação do pigmento e causar
            falhas no resultado final.
          </p>

          <p className="mb-10">
            O processo de cicatrização deve ocorrer naturalmente, sem
            interferências.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Não utilize produtos agressivos
          </h2>

          <p className="mb-4">
            Ácidos, esfoliantes e produtos com alto poder de renovação celular
            podem acelerar o desbotamento da micropigmentação.
          </p>

          <p className="mb-10">
            O ideal é seguir as orientações da profissional responsável pelo
            procedimento.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Evite piscinas e mar nos primeiros dias
          </h2>

          <p className="mb-4">
            O contato com cloro e água salgada pode interferir na cicatrização e
            na fixação do pigmento.
          </p>

          <p className="mb-10">
            O recomendado é aguardar a liberação profissional antes de retomar
            essas atividades.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Respeite o processo de cicatrização
          </h2>

          <p className="mb-4">
            Cada pele reage de forma diferente ao procedimento, e o tempo de
            cicatrização deve ser respeitado integralmente.
          </p>

          <p className="mb-10">
            Interferências nesse período podem comprometer o resultado final.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Evite maquiagem na região recém-pigmentada
          </h2>

          <p className="mb-4">
            A aplicação de maquiagem pode obstruir os poros e interferir na
            fixação do pigmento.
          </p>

          <p className="mb-10">
            O ideal é aguardar a liberação para voltar ao uso de cosméticos.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Siga corretamente os cuidados pós-procedimento
          </h2>

          <p className="mb-4">
            As orientações fornecidas pela profissional são essenciais para
            garantir um bom resultado e maior durabilidade.
          </p>

          <p className="mb-10">
            O descumprimento dessas recomendações pode afetar diretamente o
            resultado final.
          </p>

          <h2 className="text-3xl font-semibold mb-4">Evite calor excessivo</h2>

          <p className="mb-4">
            Sauna, vapor e fontes intensas de calor podem acelerar a perda de
            pigmento.
          </p>

          <p className="mb-10">
            O ideal é evitar esse tipo de exposição durante o período inicial.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Faça retoques quando necessário
          </h2>

          <p className="mb-4">
            O retoque é uma etapa importante para ajustar possíveis falhas e
            reforçar a cor da micropigmentação.
          </p>

          <p className="mb-10">
            Ele garante um resultado mais uniforme e duradouro ao longo do
            tempo.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Preserve o resultado com acompanhamento profissional
          </h2>

          <p className="mb-4">
            O acompanhamento periódico permite avaliar a necessidade de
            manutenção e garantir a integridade do procedimento.
          </p>

          <p>
            Seguir corretamente os cuidados recomendados é o principal fator
            para manter a micropigmentação bonita e bem definida por mais tempo.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  if (slug === "unhas-cuidados") {
    return (
      <div>
        <Header image="/images/logo_studio.png" />
        <div className="relative flex justify-center items-center">
          <Image
            src="/images/unhas-blog.png"
            alt="Design de Sobrancelhas"
            width={1900}
            height={600}
            className="w-full"
          />

          <a
            href="/blog"
            className="absolute top-1/2 left-3 lg:left-8 -translate-y-1/2
                  w-[80px] sm:w-[300px] lg:w-[220px] h-[30px] lg:h-[50px]
                  text-xs lg:text-md text-white border-2 border-white
                  transition-all duration-300
                  after:content-[''] after:absolute after:top-0 after:left-0
                  after:w-0 after:h-full after:bg-white
                  after:transition-all after:duration-300
                  hover:text-[#BC743A] hover:after:w-full
                  group cursor-pointer flex items-center justify-center"
          >
            <span className="relative whitespace-nowrap z-10 uppercase tracking-wider flex items-center gap-1 justify-center h-full">
              ← Voltar
            </span>
          </a>
        </div>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <p className="text-sm text-gray-500 mb-4">
            junho 25, 2026 | Sobrancelhas
          </p>

          <h1 className="text-5xl font-light mb-8">
            Quais cuidados especiais suas unhas devem ter?
          </h1>

          <p className="mb-4">
            As unhas fazem parte da estética e também da saúde das mãos,
            exigindo atenção constante para se manterem fortes, bonitas e livres
            de problemas.
          </p>

          <p className="mb-4">
            Pequenos cuidados diários podem evitar quebras, descamações e
            infecções, além de prolongar a durabilidade de procedimentos como
            esmaltação e alongamentos.
          </p>

          <p className="mb-10">
            Neste conteúdo, você vai entender quais práticas são essenciais para
            manter suas unhas sempre bem cuidadas e protegidas.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Mantenha as unhas sempre limpas e secas
          </h2>

          <p className="mb-4">
            A higienização correta evita o acúmulo de bactérias e fungos,
            reduzindo riscos de infecções na região.
          </p>

          <p className="mb-10">
            Evitar umidade excessiva também ajuda a manter a estrutura da unha
            mais resistente.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Evite retirar as cutículas em excesso
          </h2>

          <p className="mb-4">
            As cutículas funcionam como uma barreira de proteção natural contra
            microrganismos.
          </p>

          <p className="mb-10">
            Sua remoção exagerada pode deixar a região mais sensível e propensa
            a inflamações.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Hidrate unhas e cutículas regularmente
          </h2>

          <p className="mb-4">
            A hidratação contribui para a flexibilidade das unhas e evita o
            ressecamento.
          </p>

          <p className="mb-10">
            Óleos e cremes específicos ajudam a manter a saúde da região ao
            longo do tempo.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Evite o uso excessivo de produtos químicos
          </h2>

          <p className="mb-4">
            Produtos de limpeza agressivos podem enfraquecer as unhas e causar
            descamação.
          </p>

          <p className="mb-10">
            O uso de luvas durante tarefas domésticas é uma medida simples e
            eficaz de proteção.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Não utilize as unhas como ferramenta
          </h2>

          <p className="mb-4">
            Abrir embalagens ou raspar superfícies com as unhas aumenta o risco
            de quebra.
          </p>

          <p className="mb-10">
            Esse hábito compromete a integridade da lâmina ungueal e deve ser
            evitado.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Mantenha uma alimentação equilibrada
          </h2>

          <p className="mb-4">
            Nutrientes como biotina, ferro e proteínas são fundamentais para o
            crescimento saudável das unhas.
          </p>

          <p className="mb-10">
            A deficiência nutricional pode refletir diretamente na fragilidade e
            no crescimento lento.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Respeite o intervalo entre procedimentos estéticos
          </h2>

          <p className="mb-4">
            Aplicações constantes de esmaltes, gel ou alongamentos exigem pausas
            para recuperação da unha natural.
          </p>

          <p className="mb-10">
            Esse intervalo ajuda a evitar enfraquecimento e danos estruturais.
          </p>

          <h2 className="text-3xl font-semibold mb-4">Evite roer as unhas</h2>

          <p className="mb-4">
            O hábito de roer unhas compromete não apenas a estética, mas também
            a saúde da região.
          </p>

          <p className="mb-10">
            Além disso, aumenta o risco de infecções e deformações na lâmina
            ungueal.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Faça manutenção regular
          </h2>

          <p className="mb-4">
            A manutenção periódica garante que as unhas permaneçam bem cuidadas
            e com aspecto saudável.
          </p>

          <p className="mb-10">
            Esse acompanhamento também permite identificar precocemente qualquer
            alteração.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Procure sempre um profissional qualificado
          </h2>

          <p className="mb-4">
            Procedimentos realizados por profissionais garantem maior segurança
            e resultados mais duradouros.
          </p>

          <p>
            O cuidado especializado reduz riscos e contribui para a saúde e
            estética das unhas.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return <div>Post não encontrado</div>;
}
