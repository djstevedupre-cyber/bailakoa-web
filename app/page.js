export default function BailakoaWebLanding() {
  const services = [
    {
      title: "Bodas y celebraciones",
      text: "Un show femenino, elegante y poderoso para crear momentos memorables y elevar la experiencia de tus invitados.",
    },
    {
      title: "Eventos empresariales",
      text: "Presentación moderna, sofisticada y visualmente impactante para marcas, lanzamientos y celebraciones corporativas.",
    },
    {
      title: "Ferias y tarimas",
      text: "Energía escénica, imagen premium y repertorio versátil para festivales, eventos públicos y grandes escenarios.",
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
    "Estética premium tipo artista",
    "Show ideal para eventos sociales y corporativos",
    "Atención a contrataciones en toda Colombia",
  ];

  const reasons = [
    "Presencia escénica profesional",
    "Estilo premium y femenino",
    "Conexión con el público",
    "Formato adaptable a distintos eventos",
  ];

  const galleryImages = [
    "/foto1.jpg",
    "/foto2.jpg",
    "/foto3.jpg",
    "/foto4.jpg",
    "/foto5.jpg",
    "/foto6.jpg",
  ];

  return (
    <div className="min-h-screen bg-[#040404] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/logo-bailakoa.png"
              alt="Logo Bailakoa"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-white/10"
            />
            <div>
              <p className="text-lg font-black tracking-[0.22em] text-pink-200">
                BAILAKOA
              </p>
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/55">
                Grupo musical femenino
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
            <a href="#inicio" className="transition hover:text-pink-200">
              Inicio
            </a>
            <a href="#nosotras" className="transition hover:text-pink-200">
              Nosotras
            </a>
            <a href="#servicios" className="transition hover:text-pink-200">
              Servicios
            </a>
            <a href="#repertorio" className="transition hover:text-pink-200">
              Repertorio
            </a>
            <a href="#galeria" className="transition hover:text-pink-200">
              Galería
            </a>
            <a href="#videos" className="transition hover:text-pink-200">
              Videos
            </a>
            <a href="#contacto" className="transition hover:text-pink-200">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="relative mx-auto mt-6 max-w-7xl overflow-hidden rounded-[2.8rem] px-6 pb-20 pt-14 md:px-10 md:pb-24 md:pt-20"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: "url('/grupo-bailakoa.jpg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.62),rgba(0,0,0,0.82))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.10),transparent_22%)]" />

          <div className="relative z-10">
            <div className="mb-12 flex justify-center">
              <img
                src="/logo-bailakoa.png"
                alt="Logo Bailakoa"
                className="h-52 w-auto drop-shadow-[0_0_35px_rgba(244,114,182,0.28)] md:h-72"
              />
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                  <span className="inline-flex rounded-full border border-pink-300/20 bg-pink-300/10 px-4 py-1 text-sm text-pink-200 backdrop-blur-sm">
                    Elegancia femenina en escena
                  </span>
                </div>

                <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.92] text-white md:text-7xl">
                  Bailakoa convierte cada evento en una experiencia con brillo,
                  presencia y emoción.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
                  Grupo musical femenino con una propuesta escénica elegante,
                  moderna y bailable, ideal para bodas, celebraciones privadas,
                  eventos empresariales y escenarios de alto impacto en Bogotá y
                  toda Colombia.
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
                    className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-pink-300 hover:text-pink-200"
                  >
                    Ver contacto
                  </a>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-sm text-white/80 shadow-xl shadow-black/20 backdrop-blur-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-pink-300/15 via-transparent to-amber-300/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/50 backdrop-blur-xl">
                  <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] p-6">
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
                          Femenino, elegante y moderno
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-sm text-white/45">Cobertura</p>
                        <p className="mt-1 font-semibold text-white">
                          Bogotá y toda Colombia
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-sm text-white/45">Ideal para</p>
                        <p className="mt-1 font-semibold text-white">
                          Bodas, marcas y grandes fiestas
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
                      Una propuesta artística creada para clientes que quieren
                      una presentación con presencia, glamour, energía y conexión
                      real con el público.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="nosotras" className="mx-auto max-w-7xl px-6 py-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 md:p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-pink-200">
                Sobre Bailakoa
              </p>
              <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                Una propuesta musical femenina con imagen premium y presencia
                escénica.
              </h3>
              <p className="mt-6 text-lg leading-8 text-white/72">
                Bailakoa nace para ofrecer un show profesional que combine
                elegancia, feminidad, modernidad y conexión con el público. Cada
                presentación está diseñada para elevar el nivel del evento y
                dejar una impresión memorable.
              </p>
              <p className="mt-4 text-lg leading-8 text-white/72">
                No es solo música en vivo. Es imagen, atmósfera, presencia,
                energía y repertorio pensado para que tu celebración se sienta
                especial, distinguida y completamente inolvidable.
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
              Adaptamos la experiencia del show según la ocasión, conservando
              siempre una estética femenina, profesional y visualmente
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
                  Música para crear emoción, ambiente y fiesta.
                </h3>
                <p className="mt-4 text-lg leading-8 text-white/72">
                  El repertorio de Bailakoa está pensado para conectar con
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

        <section id="galeria" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-pink-200">
              Galería
            </p>
            <h3 className="mt-4 text-3xl font-bold md:text-4xl">
              La imagen de Bailakoa en escena.
            </h3>
            <p className="mt-4 text-lg leading-8 text-white/72">
              Una selección visual del grupo para mostrar presencia, estilo,
              energía y la identidad artística de Bailakoa.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={image}
                className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/25"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={image}
                    alt={`Bailakoa foto ${index + 1}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="videos" className="mx-auto max-w-7xl px-6 py-8 md:py-12">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-pink-200">
              Videos
            </p>
            <h3 className="mt-4 text-3xl font-bold md:text-4xl">
              Bailakoa en movimiento y en escena.
            </h3>
            <p className="mt-4 text-lg leading-8 text-white/72">
              Una muestra en video para ver la energía, presencia y estilo del
              grupo en presentación.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-black/20">
            <video
              controls
              preload="metadata"
              className="h-auto w-full rounded-[1.5rem]"
            >
              <source src="/videos/video1.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
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
                  <p>
                    <span className="text-white/45">WhatsApp:</span> +57 305 424 7369
                  </p>
                  <p>
                    <span className="text-white/45">Instagram:</span> @bailakoa
                  </p>
                  <p>
                    <span className="text-white/45">Correo:</span> bailakoa@gmail.com
                  </p>
                  <p>
                    <span className="text-white/45">Ciudad:</span> Bogotá y toda Colombia
                  </p>
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