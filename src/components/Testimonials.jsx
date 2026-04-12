import { empresa } from "../data/empresa"
import Reveal from "./Reveal"

function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Testimonios
            </p>
            <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
              La confianza de nuestros clientes respalda cada servicio
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Cada traslado refleja nuestro compromiso con la puntualidad,
              la seguridad y una experiencia premium.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {empresa.testimonios.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-5 flex text-yellow-400 text-xl">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p className="text-slate-600 leading-7">
                  “{item.comentario}”
                </p>

                <div className="mt-6 h-px w-full bg-slate-100" />

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