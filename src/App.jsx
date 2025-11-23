import React, { useState } from 'react'
import { PRODUCTS } from './data/products' // Importa a lista de produtos

function DoacoesSection() {
  const [copied, setCopied] = useState(false)

  const pixKey = 'contatorodrigorodrigues@gmail.com'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch (err) {
      console.error('Não foi possível copiar a chave PIX', err)
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 flex flex-col lg:flex-row gap-8 items-start lg:items-center">
      <div className="space-y-4 flex-1">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Apoie o projeto Vida de Pai 💙
        </h2>
        <p className="text-sm text-slate-200 leading-relaxed">
          Se o conteúdo do <span className="font-semibold">Vida de Pai</span>{' '}
          te ajuda de alguma forma — com ideias, motivação, dicas ou apenas a
          sensação de que você não está sozinho nessa jornada — você pode apoiar
          o projeto com uma doação de qualquer valor.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Isso me ajuda a continuar produzindo conteúdo gratuito, testando
          produtos, estudando e compartilhando tudo com outros pais e mães.
        </p>
        <p className="text-xs text-slate-400">
          A ajuda é totalmente opcional. Se não puder doar, só de compartilhar
          o conteúdo ou indicar a página para um amigo, você já está contribuindo muito. 🙏
        </p>
      </div>

      <div className="w-full max-w-sm">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 sm:p-5 space-y-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Doar via PIX
          </p>

          <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-3 sm:p-4">
            <p className="text-xs text-slate-400 mb-1">
              Chave PIX (e-mail)
            </p>
            <p className="text-sm sm:text-base font-mono font-semibold break-all text-slate-50">
              {pixKey}
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-xl bg-sky-500 text-white hover:bg-sky-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 focus:ring-offset-slate-900"
          >
            {copied ? 'Chave PIX copiada! ✅' : 'Copiar chave PIX'}
          </button>

          <p className="text-[11px] text-slate-400 leading-relaxed">
            Você pode usar o e-mail acima como chave PIX em qualquer banco ou
            carteira digital. Se quiser, pode também salvar essa página e doar
            quando for melhor para você.
          </p>
        </div>
      </div>
    </div>
  )
}

function YouTubeSection() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 lg:py-14 grid lg:grid-cols-[1.3fr,1fr] gap-8 items-center">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Conheça o canal Vida de Pai 🎥
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          No YouTube, compartilho vídeos sobre paternidade, carreira,
          equilíbrio emocional, tecnologia e tudo o que aprendo na jornada de
          ser pai, marido e pessoa real tentando melhorar todos os dias.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Meu objetivo é ajudar outros pais e mães com conteúdos sinceros,
          práticos e cheios de histórias reais da vida em família.
        </p>

        <a
          href="https://www.youtube.com/@VidadePaiOficial/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-xl bg-red-600 text-white hover:bg-red-700 transition shadow"
        >
          Acessar canal no YouTube
        </a>

        <p className="text-xs text-slate-400">
          Dicas, reflexões de pai, tecnologia e conteúdos motivacionais.
        </p>
      </div>

      <div className="lg:justify-self-end">
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/videoseries?list=PLnYvYYBwMkU3Nw5Tx1Kbbv76PGPwGj08i"
            title="Vídeos do canal Vida de Pai"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar simples */}
      <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-vpPrimary/10 flex items-center justify-center">
              <span className="text-vpPrimary font-black text-lg">VP</span>
            </div>
            <div>
              <p className="font-semibold text-slate-900 leading-tight">
                Vida de Pai
              </p>
              <p className="text-xs text-slate-500 leading-tight">
                Recomendações reais de um pai de verdade
              </p>
            </div>
          </div>

          <nav className="hidden sm:flex gap-4 text-sm text-slate-600">
            <a href="#produtos" className="hover:text-vpPrimary">
              Produtos
            </a>
            <a href="#sobre" className="hover:text-vpPrimary">
              Sobre
            </a>
            <a href="#doacoes" className="hover:text-vpPrimary">
              Doações
            </a>
            <a href="#cta" className="hover:text-vpPrimary">
              Comece aqui
            </a>
            <a href="#youtube" className="hover:text-vpPrimary">
              YouTube
            </a>
          </nav>


          </div>
          </header>

      {/* Conteúdo */}
      <main className="flex-1">
        {/* HERO */}
        <section className="bg-gradient-to-b from-sky-50 via-white to-sky-50">
          <div className="max-w-5xl mx-auto px-4 py-12 lg:py-16 grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 text-xs font-medium px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                Dicas práticas para o dia a dia em família
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Produtos que eu realmente uso
                <span className="block text-sky-600">
                  e indicaria para qualquer pai.
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Aqui você encontra uma seleção de itens que me ajudaram na rotina
                com os meus filhos — desde organização da casa até momentos de
                lazer. Nada de propaganda vazia, apenas recomendações sinceras
                de pai para pai.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#produtos"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-xl bg-vpPrimary text-white shadow-sm hover:bg-blue-700 transition"
                >
                  Ver produtos recomendados
                </a>
                <a
                  href="#sobre"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
                >
                  Entenda como escolho cada item
                </a>
              </div>

              <p className="text-xs text-slate-500 max-w-md">
                Alguns links desta página são de afiliado. Isso significa que
                posso receber uma pequena comissão, sem custo extra para você,
                caso faça uma compra por eles. Assim você apoia o Vida de Pai 💙
              </p>
            </div>

            <div className="lg:justify-self-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-sky-200/40 rounded-3xl blur-2xl" />
                <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 p-4 sm:p-5 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-sky-500/10 flex items-center justify-center">
                      <span className="text-xl">👨‍👧‍👦</span>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
                        Vida de Pai • Recomenda
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        Rotina mais leve para você e seus filhos
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex gap-2">
                      <span className="mt-1 text-sky-500">•</span>
                      Itens que eu uso no dia a dia com a minha família.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-sky-500">•</span>
                      Comentários focados na vida real, não só ficha técnica.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-sky-500">•</span>
                      Mistura de custo-benefício e qualidade que aguenta rotina
                      de pai e mãe.
                    </li>
                  </ul>

                  <div className="grid grid-cols-3 gap-2 text-xs text-slate-500">
                    <div className="bg-slate-50 rounded-xl p-2">
                      <p className="font-semibold text-slate-800">Bebê</p>
                      <p>Conforto e segurança</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-2">
                      <p className="font-semibold text-slate-800">Casa</p>
                      <p>Menos bagunça</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-2">
                      <p className="font-semibold text-slate-800">Rotina</p>
                      <p>Mais presença</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUTOS */}
        <section id="produtos" className="py-10 lg:py-14">
          <div className="max-w-5xl mx-auto px-4 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Produtos recomendados
                </h2>
                <p className="text-sm text-slate-600 mt-1 max-w-xl">
                  Cada item aqui passou pelo teste mais difícil de todos:
                  <span className="font-semibold">
                    {' '}
                    o dia a dia de um pai cansado, mas que não desiste.
                  </span>
                </p>
              </div>

              <div className="text-xs text-slate-500 bg-slate-100 rounded-full px-4 py-1 inline-flex items-center self-start">
                Atualizado por{' '}
                <span className="ml-1 font-semibold text-slate-700">
                  Rodrigo – Vida de Pai
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
              {PRODUCTS.map((product) => (
                <article
                  key={product.id}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-44 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/90 text-sky-700 border border-sky-100">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-900/80 text-slate-50">
                        {product.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 flex-1">
                      {product.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between gap-2">
                      <a
                        href={product.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center flex-1 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-vpSecondary text-white hover:bg-orange-500 transition"
                      >
                        Ver detalhes e preço
                      </a>
                      <span className="text-[10px] text-slate-400">
                        Link de afiliado
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-10 border-t bg-white">
          <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-[1.3fr,1fr] gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">
                Quem está por trás do Vida de Pai?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Meu nome é Rodrigo, pai, marido e apaixonado por tecnologia e
                educação. Criei o Vida de Pai para compartilhar o que aprendo na
                prática: como equilibrar trabalho, família, estudos e ainda ter
                um tempo de qualidade com os filhos.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Os produtos que indico aqui não são escolhidos só por ficha
                técnica. Levo em conta a rotina real de uma família: preço,
                durabilidade, praticidade e o quanto simplificam o nosso dia.
              </p>
              <p className="text-xs text-slate-500">
                Se um item está nesta página, é porque eu realmente acredito
                que ele pode ajudar outros pais e mães a terem uma vida um
                pouco mais leve.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <div className="bg-slate-900 text-slate-50 rounded-2xl p-4 sm:p-5 space-y-3 shadow-lg">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Transparência
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">Importante:</span> ao comprar
                  por algum link desta página, você não paga nada a mais. A
                  plataforma (como Amazon ou Mercado Livre) repassa uma pequena
                  comissão ao Vida de Pai, o que me ajuda a continuar produzindo
                  conteúdo gratuito.
                </p>
                <p className="text-xs text-slate-400">
                  Obrigado por apoiar este projeto e, principalmente, por
                  investir tempo em ser um pai ou mãe mais presente. 💙
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* YOUTUBE */}
        <section id="youtube" className="bg-white border-t">
          <YouTubeSection />
        </section>


        {/* CTA FINAL */}
        <section
          id="cta"
          className="py-10 bg-gradient-to-r from-sky-600 to-vpPrimary text-white"
        >
          <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Quer acompanhar mais dicas do Vida de Pai?
              </h2>
              <p className="text-sm text-sky-100 mt-1 max-w-xl">
                Salve esta página, compartilhe com outros pais e acompanhe o
                conteúdo em <span className="font-semibold">vidadepai.com.br</span> e nas redes sociais.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href="https://vidadepai.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-xl bg-white text-sky-700 hover:bg-sky-50 transition"
              >
                Acessar site principal
              </a>
              {/* Você pode trocar esse botão por Instagram/YouTube */}
              <a
                href="#produtos"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-xl border border-white/70 text-white hover:bg-white/10 transition"
              >
                Ver produtos novamente
              </a>
            </div>
          </div>
        </section>

        {/* DOAÇÕES */}
        <section
          id="doacoes"
          className="py-12 bg-slate-900 text-slate-50 border-t border-slate-800"
        >
          <DoacoesSection />
        </section>

      </main>


      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Vida de Pai. Todos os direitos reservados.</p>
          <p>
            Construído com 💻 por Rodrigo •{' '}
            <span className="text-slate-700 font-medium">vidadepai.com.br</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
