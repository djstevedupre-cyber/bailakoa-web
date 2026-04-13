export default function BailakoaWebLanding() {
  const services = [
    {
      title: "Bodas y celebraciones",
      text: "Un show femenino, elegante y bailable para crear momentos memorables y elevar la experiencia de tus invitados.",
    },
    {
      title: "Eventos empresariales",
      text: "Presentación moderna y profesional para marcas, lanzamientos, cenas, aniversarios corporativos y activaciones.",
    },
    {
      title: "Ferias y tarimas",
      text: "Energía escénica, imagen impactante y repertorio versátil para eventos públicos, festivales y grandes escenarios.",
    },
  ];

  const repertoire = [
    "Salsa",
    "Merengue",
    "Cumbia",
    "Pop latino",
    "Tropical",
    "Plancha",
    "Música crossover",
    "Shows para bodas, eventos corporativos y fiestas privadas",
  ];

  const highlights = [
    "Imagen femenina, moderna y elegante",
    "Show ideal para eventos sociales y corporativos",
    "Repertorio versátil y altamente bailable",
    "Atención a contrataciones en toda Colombia",
  ];

  const reasons = [
    "Presencia escénica profesional",
    "Estética premium y femenina",
    "Conexión con el público",
    "Montaje ideal para distintos formatos de evento",
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <main>
        <section
          id="inicio"
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] px-6 pb-20 pt-14 md:pt-20"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/grupo-bailakoa.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10">
            <div className="mb-10 flex justify-center">
              <img
                src="/logo-bailakoa.png"
                alt="Logo Bailakoa"
                className="h-44 w-auto md:h-60"
              />
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="text-center lg:text-left">
                <span className="inline-flex rounded-full border border-pink-300/20 bg-pink-300/10 px-4 py-1 text-sm text-pink-200">
                  Elegancia femenina en escena
                </span>

                <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.96] text-white md:text-7xl">
                  Bailakoa lleva música, presencia y estilo a eventos que merecen
                  verse inolvidables.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl lg:max-w-2xl">
                  Grupo musical femenino con una propuesta elegante, moderna y
                  bailable, ideal para bodas, celebraciones privadas, eventos
                  empresariales y escenarios de alto impacto en Bogotá y el resto
                  de Colombia.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <a
                    href="https://wa.me/573054247369"
                    className="rounded-2xl bg-pink-300 px-6 py-3 font-semibold text-black shadow-lg shadow-pink-300/20 transition hover:scale-[1.02]"
                  >
                    Cotiza por WhatsApp
                  </a>
                  <a
                    href="#contacto"
                    className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-pink-300 hover:text-pink-200"
                  >
                    Ver contacto
                  </a>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/80 shadow-xl shadow-black/20"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-pink-300/15 via-transparent to-amber-300/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-black/40">
                  <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-pink-200">
                          Show Premium
                        </p>
                        <h2 className="mt-2 text-3xl font-bold">BAILAKOA</h2>
                      </div>
                      <img
                        src="/logo-bailakoa.png"
                        alt="Logo Bailakoa"
                        className="h-20 w-20 rounded-full object-cover ring-1 ring-white/10"
                      />
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-sm text-white/45">Estilo</p>
                        <p className="mt-1 font-semibold text-white">
                          Elegante, femenino y moderno
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-sm text-white/45">Cobertura</p>
                        <p className="mt-1 font-semibold text-white">
                          Bogotá y el resto de Colombia
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-sm text-white/45">Ideal para</p>
                        <p className="mt-1 font-semibold text-white">
                          Bodas, marcas y fiestas
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-sm text-white/45">Experiencia</p>
                        <p className="mt-1 font-semibold text-white">
                          Show visual y musical memorable
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-sm leading-7 text-white/65">
                      Una propuesta artística diseñada para clientes que buscan
                      una presentación con impacto visual, presencia escénica y
                      repertorio pensado para emocionar y hacer bailar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="nosotras" className="mx-auto max-w-7xl px-6 py-8 md:py-12">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 md:p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-pink-200">
                Sobre Bailakoa
              </p>
              <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                Una propuesta musical femenina con imagen premium y energía
                escénica.
              </h3>
              <p className="mt-6 text-lg leading-8 text-white/72">
                Bailakoa nace para ofrecer un show profesional que combine
                elegancia, feminidad, modernidad y conexión con el público. Cada
                presentación está pensada para elevar el nivel del evento y dejar
                una impresión memorable.
              </p>
              <p className="mt-4 text-lg leading-8 text-white/72">
                No es solo música en vivo: es imagen, atmósfera, presencia y
                repertorio seleccionado para que tu celebración se sienta
                especial, distinguida y completamente bailable.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-pink-300/15 bg-pink-300/10 p-7">
                <p className="text-sm uppercase tracking-[0.35em] text-pink-100">
                  Ideal para
                </p>
                <ul className="mt-4 space-y-3 text-white/90">
                  <li>• Matrimonios y aniversarios</li>
                  <li>• Eventos empresariales</li>
                  <li>• Fiestas privadas</li>
                  <li>• Lanzamientos y activaciones</li>
                  <li>• Ferias, tarimas y festivales</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7">
                <p className="text-sm uppercase tracking-[0.35em] text-pink-200">
                  ¿Por qué contratar a Bailakoa?
                </p>
                <div className="mt-4 grid gap-3">
                  {reasons.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/80"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-pink-200">
              Servicios
            </p>
            <h3 className="mt-4 text-3xl font-bold md:text-4xl">
              Formatos pensados para diferentes tipos de evento.
            </h3>
            <p className="mt-4 text-lg leading-8 text-white/72">
              Adaptamos la experiencia del show según la ocasión, manteniendo
              siempre una línea estética femenina, profesional y visualmente
              atractiva.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-pink-300/25"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-pink-300/15 bg-pink-300/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-pink-200">
                  Bailakoa
                </div>
                <h4 className="text-2xl font-semibold">{service.title}</h4>
                <p className="mt-4 leading-7 text-white/70">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="repertorio" className="mx-auto max-w-7xl px-6 py-8 md:py-12">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-pink-200">
                  Repertorio
                </p>
                <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                  Música para crear ambiente, emoción y fiesta.
                </h3>
                <p className="mt-4 text-lg leading-8 text-white/72">
                  El repertorio de Bailakoa está diseñado para conectar con
                  distintos públicos, elevar la atmósfera del evento y mantener
                  una experiencia dinámica y memorable.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {repertoire.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 text-white/85"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-pink-200">
                Galería
              </p>
              <h4 className="mt-3 text-2xl font-bold">Fotos profesionales</h4>
              <p className="mt-4 leading-7 text-white/70">
                Agrega aquí imágenes reales del grupo en tarima, sesiones
                fotográficas y momentos destacados.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-pink-200">
                Video
              </p>
              <h4 className="mt-3 text-2xl font-bold">Showreel o reel en vivo</h4>
              <p className="mt-4 leading-7 text-white/70">
                Un video corto con la energía del show hará que la página se vea
                mucho más profesional.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-pink-200">
                Testimonios
              </p>
              <h4 className="mt-3 text-2xl font-bold">Prueba social</h4>
              <p className="mt-4 leading-7 text-white/70">
                Incluye comentarios de clientes o empresas para dar más seguridad
                al contratar.
              </p>
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-6 pb-20 pt-6 md:pb-24">
          <div className="overflow-hidden rounded-[2rem] border border-pink-300/15 bg-gradient-to-br from-pink-300/10 via-white/[0.05] to-transparent p-8 shadow-2xl shadow-black/20 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-pink-200">
                  Contrataciones
                </p>
                <h3 className="mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
                  Haz que tu evento tenga una presentación musical con elegancia,
                  presencia y emoción.
                </h3>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                  Si buscas un grupo musical femenino con una imagen cuidada,
                  repertorio versátil y una puesta en escena moderna, Bailakoa
                  está lista para tu celebración.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-black/30 p-7 backdrop-blur-sm">
                <h4 className="text-2xl font-semibold">Datos de contacto</h4>
                <div className="mt-6 space-y-4 text-white/85">
                  <p><span className="text-white/45">WhatsApp:</span> +57 305 424 7369</p>
                  <p><span className="text-white/45">Instagram:</span> @bailakoa</p>
                  <p><span className="text-white/45">Correo:</span> bailakoa@gmail.com</p>
                  <p><span className="text-white/45">Ciudad:</span> Bogotá y el resto de Colombia</p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/573054247369"
                    className="rounded-2xl bg-pink-300 px-5 py-3 text-center font-semibold text-black transition hover:scale-[1.02]"
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href="https://instagram.com/bailakoa"
                    className="rounded-2xl border border-white/15 px-5 py-3 text-center font-semibold text-white transition hover:border-pink-300 hover:text-pink-200"
                  >
                    Ver Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/40">
        <p>© 2026 Bailakoa. Grupo musical femenino para eventos en toda Colombia.</p>
      </footer>
    </div>
  );
}