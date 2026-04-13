export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <div className="mb-6">
            <img
              src="/logo-bailakoa.png"
              alt="Logo Bailakoa"
              className="h-32 w-auto md:h-40"
            />
          </div>

          <p className="text-sm uppercase tracking-[0.3em] text-pink-300">
            Grupo musical femenino
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-7xl text-pink-200">
            BAILAKOA
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Elegancia, feminidad y modernidad en un show musical creado para
            bodas, eventos empresariales, celebraciones privadas y grandes
            escenarios en Bogotá.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-pink-200">Sobre Bailakoa</h2>
            <p className="mt-4 leading-7 text-neutral-300">
              Bailakoa es una propuesta musical femenina con imagen elegante,
              moderna y profesional. Nuestro objetivo es transformar cada evento
              en una experiencia inolvidable con presencia escénica, repertorio
              versátil y una energía única.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-pink-200">Contrataciones</h2>

            <div className="mt-4 space-y-3 text-neutral-300">
              <p><strong>WhatsApp:</strong> +57 305 424 7369</p>
              <p><strong>Instagram:</strong> @bailakoa</p>
              <p><strong>Correo:</strong> bailakoa@gmail.com</p>
              <p><strong>Ciudad:</strong> Bogotá</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/573054247369"
                className="rounded-2xl bg-pink-300 px-5 py-3 font-semibold text-black"
              >
                Escribir por WhatsApp
              </a>

              <a
                href="https://instagram.com/bailakoa"
                className="rounded-2xl border border-white/20 px-5 py-3 font-semibold text-white"
              >
                Ver Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold text-pink-200">Repertorio</h2>

          <div className="mt-4 grid gap-3 text-neutral-300 md:grid-cols-3">
            <div className="rounded-2xl bg-black/30 p-4">Salsa</div>
            <div className="rounded-2xl bg-black/30 p-4">Merengue</div>
            <div className="rounded-2xl bg-black/30 p-4">Cumbia</div>
            <div className="rounded-2xl bg-black/30 p-4">Pop latino</div>
            <div className="rounded-2xl bg-black/30 p-4">Tropical</div>
            <div className="rounded-2xl bg-black/30 p-4">Música crossover</div>
          </div>
        </div>
      </section>
    </main>
  );
}