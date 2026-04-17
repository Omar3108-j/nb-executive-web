import { empresa } from "../data/empresa"
import Reveal from "./Reveal"
import { Quote } from "lucide-react"

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.06),transparent_28%)]" />
      <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute right-[-80px] bottom-0 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-blue-100 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-blue-600 shadow-sm backdrop-blur-sm">
              Testimonios
            </p>

            <h2 className="shine-line mt-5 text-4xl font-black leading-tight text-slate-900 md:text-5xl md:leading-tight">
              La confianza de nuestros clientes respalda cada servicio
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Cada traslado refleja nuestro compromiso con la puntualidad,
              la seguridad y una experiencia premium.
            </p>

            <p className="mt-3 text-sm font-medium text-slate-500">
              Más de 100 clientes satisfechos en Lima
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {empresa.testimonios.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <article
                className="
                  card-premium group relative flex h-full overflow-hidden rounded-[30px]
                  border border-slate-200/80 bg-white/90
                  shadow-[0_10px_30px_rgba(15,23,42,0.06)]
                  backdrop-blur-sm
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-blue-200
                  hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]
                "
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -left-1/3 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-2xl animate-[fleetShine_1.8s_ease-in-out]" />
                </div>

                <div className="flex h-full w-full flex-col p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="star-glow flex gap-1 text-xl text-yellow-400">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>

                    <div
                      className="
                        flex h-12 w-12 items-center justify-center rounded-2xl
                        border border-slate-200 bg-blue-50 text-blue-600
                        shadow-sm transition-all duration-300
                        group-hover:scale-110 group-hover:-translate-y-1 group-hover:bg-blue-600 group-hover:text-white
                      "
                    >
                      <Quote size={20} strokeWidth={2.2} />
                    </div>
                  </div>

                  <p className="min-h-[170px] text-[15.5px] leading-8 text-slate-600">
                    “{item.comentario}”
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                    <div className="mt-6">
                      <p className="text-2xl font-black leading-tight text-slate-900 transition duration-300 group-hover:text-blue-600">
                        {item.nombre}
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-500">
                        {item.cargo}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-inset ring-white/40" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials