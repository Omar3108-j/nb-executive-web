import Reveal from "./Reveal"
import {
  CarFront,
  Plane,
  BriefcaseBusiness,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react"

import taxiEjecutivo from "../assets/taxi-ejecutivo.png"
import taxiAeropuerto from "../assets/taxi-aeropuerto.png"
import taxiCorporativo from "../assets/taxi-corporativo.png"
import servicioReserva from "../assets/servicio-reserva.png"

function Services() {
  const servicios = [
    {
      titulo: "Taxi Ejecutivo",
      descripcion:
        "Traslados cómodos, seguros y puntuales para clientes que buscan una experiencia profesional.",
      imagen: taxiEjecutivo,
      icono: CarFront,
      badge: "24/7",
    },
    {
      titulo: "Taxi Aeropuerto",
      descripcion:
        "Servicio puntual para llegadas y salidas al aeropuerto Jorge Chávez con atención personalizada.",
      imagen: taxiAeropuerto,
      icono: Plane,
      badge: "Aeropuerto",
    },
    {
      titulo: "Traslado Corporativo",
      descripcion:
        "Movilidad ejecutiva para empresas, reuniones y atención a clientes importantes.",
      imagen: taxiCorporativo,
      icono: BriefcaseBusiness,
      badge: "Empresas",
    },
    {
      titulo: "Servicio por Reserva",
      descripcion:
        "Agenda tu traslado con anticipación y garantiza puntualidad en cada servicio.",
      imagen: servicioReserva,
      icono: CalendarDays,
      badge: "Reserva",
    },
  ]

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-slate-50 py-24 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.6),rgba(248,250,252,1))]" />

      <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-slate-300/40 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-blue-100 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-blue-600 shadow-sm backdrop-blur-md">
              Servicios
            </p>

            <h2 className="shine-line mt-5 text-4xl font-black leading-tight text-slate-900 md:text-5xl md:leading-tight">
              Soluciones de transporte premium para cada necesidad
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Diseñamos una experiencia moderna, segura y puntual para clientes
              ejecutivos, corporativos y traslados programados.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {servicios.map((servicio, index) => {
            const Icon = servicio.icono

            return (
              <Reveal key={index} delay={index * 0.08}>
                <article
                  className="
                    card-premium group relative flex h-full overflow-hidden rounded-[32px]
                    border border-white/70 bg-white/65
                    backdrop-blur-xl
                    shadow-[0_12px_35px_rgba(15,23,42,0.07)]
                    transition-all duration-500
                    hover:-translate-y-3
                    hover:shadow-[0_24px_70px_rgba(37,99,235,0.16)]
                    hover:border-blue-200/80
                  "
                >
                  <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/55 via-white/10 to-transparent opacity-90" />
                  <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/70" />

                  <div className="pointer-events-none absolute -left-20 top-0 h-40 w-24 rotate-12 bg-white/20 blur-2xl opacity-0 transition-all duration-700 group-hover:left-[85%] group-hover:opacity-100" />

                  <div className="flex h-full w-full flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={servicio.imagen}
                        alt={servicio.titulo}
                        className="
                          h-full w-full object-cover
                          transition duration-700 ease-out
                          group-hover:scale-110
                          group-hover:brightness-[0.72]
                        "
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.20),transparent_30%)] opacity-80" />

                      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_45%)]" />

                      <div className="absolute left-5 top-5 z-10">
                        <span className="inline-flex rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-white/95 backdrop-blur-md">
                          {servicio.badge}
                        </span>
                      </div>

                      <div
                        className="
                          absolute bottom-5 left-5 z-10 flex h-14 w-14 items-center justify-center
                          rounded-2xl border border-white/40 bg-white/88 text-blue-600
                          shadow-[0_12px_30px_rgba(255,255,255,0.22)]
                          backdrop-blur-md
                          transition duration-500
                          group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-3
                        "
                      >
                        <Icon size={24} strokeWidth={2.2} />
                      </div>
                    </div>

                    <div className="relative flex flex-1 flex-col p-7">
                      <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                      <h3 className="min-h-[88px] text-[30px] font-black leading-[1.05] tracking-[-0.02em] text-slate-900 transition duration-300 group-hover:text-blue-700">
                        {servicio.titulo}
                      </h3>

                      <p className="mt-4 min-h-[150px] text-[15.5px] leading-8 text-slate-600">
                        {servicio.descripcion}
                      </p>

                      <div className="mt-auto pt-6">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                        <div className="mt-6 flex items-center justify-between gap-3">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                              Atención
                            </p>
                            <p className="mt-1 text-sm font-semibold text-slate-600">
                              Disponible inmediato
                            </p>
                          </div>

                          <a
                            href="#contacto"
                            className="
                              relative inline-flex items-center gap-2 overflow-hidden rounded-full
                              bg-blue-600 px-5 py-3 text-sm font-bold text-white
                              shadow-[0_12px_30px_rgba(37,99,235,0.28)]
                              transition-all duration-300
                              hover:scale-[1.04] hover:bg-blue-700
                              hover:shadow-[0_18px_40px_rgba(37,99,235,0.35)]
                            "
                          >
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
                            <span className="relative z-10">Reservar</span>
                            <ArrowUpRight
                              size={16}
                              className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent" />
                  </div>
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