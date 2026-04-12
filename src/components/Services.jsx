import { empresa } from "../data/empresa"
import Reveal from "./Reveal"

function Services() {
  return (
    <section id="servicios" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Servicios
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Soluciones de transporte diseñadas para transmitir confianza
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Ofrecemos una experiencia moderna, segura y puntual, enfocada en la
              comodidad del cliente y en una imagen profesional de alto nivel.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {empresa.servicios.map((servicio, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600">
                  🚕
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {servicio.titulo}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {servicio.descripcion}
                </p>

                <div className="mt-6 h-px w-full bg-slate-100" />

                <p className="mt-5 text-sm font-semibold text-slate-900 group-hover:text-blue-600">
                  Atención profesional
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services