import { empresa } from "../data/empresa"
import Reveal from "./Reveal"
import { CarFront, Plane, BriefcaseBusiness } from "lucide-react"

import sedanImg from "../assets/fleet-sedan.png"
import suvImg from "../assets/fleet-suv.png"
import vanImg from "../assets/fleet-van.png"

const imagenes = [sedanImg, suvImg, vanImg]
const badges = ["Ejecutivo", "Premium", "Grupal"]
const iconos = [CarFront, Plane, BriefcaseBusiness]

function Fleet() {
  return (
    <section
      id="flota"
      className="relative overflow-hidden bg-slate-50 py-24 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.06),transparent_28%)]" />
      <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute right-[-80px] bottom-0 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-blue-100 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-blue-600 backdrop-blur-sm shadow-sm">
              Nuestra flota
            </p>

            <h2 className="shine-line mt-5 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              Vehículos para cada necesidad
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Contamos con unidades modernas que garantizan comodidad,
              seguridad y una imagen ejecutiva impecable.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {empresa.flota.map((item, index) => {
            const Icon = iconos[index]

            return (
              <Reveal key={index} delay={index * 0.08}>
                <article
                  className="
                    card-premium group relative overflow-hidden rounded-[30px]
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

                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={imagenes[index]}
                      alt={item.tipo}
                      className="
                        h-full w-full object-cover
                        transition duration-700 ease-out
                        group-hover:scale-110
                        group-hover:brightness-[0.8]
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute left-5 top-5">
                      <span className="inline-flex rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-md transition duration-300 group-hover:bg-blue-600/80">
                        {badges[index]}
                      </span>
                    </div>

                    <div
                      className="
                        absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center
                        rounded-2xl border border-white/35 bg-white/90 text-blue-600
                        shadow-lg backdrop-blur-md
                        transition-all duration-500
                        group-hover:scale-110
                        group-hover:-translate-y-1
                        group-hover:rotate-3
                      "
                    >
                      <Icon size={24} strokeWidth={2.2} />
                    </div>
                  </div>

                  <div className="relative p-7">
                    <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                    <h3 className="text-2xl font-black text-slate-900 transition-all duration-300 group-hover:text-blue-600">
                      {item.tipo}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {item.descripcion}
                    </p>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-inset ring-white/40" />
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Fleet