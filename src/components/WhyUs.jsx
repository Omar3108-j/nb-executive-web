import { empresa } from "../data/empresa"
import Reveal from "./Reveal"

function WhyUs() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Por qué elegirnos
            </p>
            <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
              Más que un traslado, una experiencia de confianza
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-8">
              Nos enfocamos en brindar un servicio que combine puntualidad, seguridad,
              imagen profesional y atención personalizada para cada cliente.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {empresa.beneficios.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-4 text-3xl">⭐</div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-slate-600 leading-7">
                  {item.descripcion}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs