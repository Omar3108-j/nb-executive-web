import { empresa } from "../data/empresa"
import Reveal from "./Reveal"
import { Quote } from "lucide-react"

function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Testimonios
            </p>

            <h2 className="shine-line mt-3 text-4xl font-black text-slate-900 md:text-5xl">
              La confianza de nuestros clientes respalda cada servicio
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Cada traslado refleja nuestro compromiso con la puntualidad,
              la seguridad y una experiencia premium.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Más de 100 clientes satisfechos en Lima
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {empresa.testimonios.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <article className="card-premium rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <div className="star-glow flex text-yellow-400 text-xl">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Quote size={18} strokeWidth={2.2} />
                  </div>
                </div>

                <p className="text-slate-600 leading-7">
                  “{item.comentario}”
                </p>

                <div className="mt-6 h-px w-full bg-slate-200" />

                <div className="mt-6">
                  <p className="font-bold text-slate-900">{item.nombre}</p>
                  <p className="text-sm text-slate-500">{item.cargo}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials