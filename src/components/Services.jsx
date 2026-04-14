import { empresa } from "../data/empresa"
import Reveal from "./Reveal"
import { Plane, BriefcaseBusiness, CarFront, CalendarDays } from "lucide-react"

function Services() {
  const icons = [Plane, BriefcaseBusiness, CarFront, CalendarDays]

  return (
    <section id="servicios" className="relative bg-slate-50 py-24">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-slate-200/40 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Servicios
            </p>

            <h2 className="shine-line mt-3 text-4xl font-black text-slate-900 md:text-5xl">
              Soluciones de transporte diseñadas para transmitir confianza
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Ofrecemos una experiencia moderna, segura y puntual, enfocada en la
              comodidad del cliente y en una imagen profesional de alto nivel.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {empresa.servicios.map((servicio, index) => {
            const Icon = icons[index]

            return (
              <Reveal key={index} delay={index * 0.08}>
                <article className="card-premium group rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-sm backdrop-blur-sm">
                  <div className="icon-premium glow-blue-soft flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={24} strokeWidth={2.1} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold leading-snug text-slate-900">
                    {servicio.titulo}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {servicio.descripcion}
                  </p>

                  <div className="mt-6 h-px w-full bg-slate-100" />

                  <p className="mt-5 text-sm font-semibold tracking-wide text-slate-900 transition group-hover:text-blue-600">
                    Atención profesional
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services