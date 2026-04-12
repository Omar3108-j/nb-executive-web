import { empresa } from "../data/empresa"
import Reveal from "./Reveal"

function Fleet() {
  return (
    <section id="flota" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Nuestra flota
            </p>
            <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
              Vehículos para cada necesidad
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-8">
              Contamos con unidades modernas que garantizan comodidad, seguridad y estilo.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {empresa.flota.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="rounded-3xl bg-slate-50 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-4 text-4xl">🚘</div>
                <h3 className="text-xl font-bold text-slate-900">
                  {item.tipo}
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

export default Fleet