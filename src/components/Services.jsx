import Reveal from "./Reveal"
import {
  CarFront,
  Plane,
  BriefcaseBusiness,
  CalendarDays,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react"

import taxiEjecutivo from "../assets/taxi-ejecutivo.png"
import taxiAeropuerto from "../assets/taxi-aeropuerto.png"
import taxiCorporativo from "../assets/taxi-corporativo.png"
import servicioReserva from "../assets/servicio-reserva.png"

function Services() {
  const servicios = [
    {
      titulo: "Taxi Ejecutivo",
      descripcion: "Traslados cómodos, seguros y puntuales para clientes exigentes.",
      imagen: taxiEjecutivo,
      icono: CarFront,
      badge: "24/7",
      detalle: "Atención inmediata",
    },
    {
      titulo: "Taxi Aeropuerto",
      descripcion: "Llegadas y salidas al Jorge Chávez con coordinación profesional.",
      imagen: taxiAeropuerto,
      icono: Plane,
      badge: "Aeropuerto",
      detalle: "Puntualidad garantizada",
    },
    {
      titulo: "Corporativo",
      descripcion: "Movilidad ejecutiva para empresas, reuniones y clientes VIP.",
      imagen: taxiCorporativo,
      icono: BriefcaseBusiness,
      badge: "Empresas",
      detalle: "Imagen profesional",
    },
    {
      titulo: "Por Reserva",
      descripcion: "Agenda tu traslado con anticipación y viaja sin preocupaciones.",
      imagen: servicioReserva,
      icono: CalendarDays,
      badge: "Reserva",
      detalle: "Servicio programado",
    },
  ]

  return (
    <section id="servicios" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,64,175,0.20)_0%,rgba(59,130,246,0.08)_32%,rgba(255,255,255,0.92)_62%,rgba(255,255,255,1)_100%)]" />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center md:text-left">
            <p className="inline-flex rounded-full border border-blue-100 bg-white/90 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.28em] text-blue-600 shadow-sm backdrop-blur-md">
              Servicios premium
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Transporte ejecutivo para cada necesidad
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-7 text-slate-600 sm:text-lg sm:leading-8 md:mx-0">
              Diseñamos una experiencia segura, puntual y elegante para traslados al aeropuerto, servicios corporativos y reservas programadas.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {servicios.map((servicio, index) => {
            const Icon = servicio.icono

            return (
              <Reveal key={index} delay={index * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-[30px] border border-white/70 bg-white/80 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(37,99,235,0.18)]">
                  <div className="relative h-52 overflow-hidden sm:h-56">
                    <img
                      src={servicio.imagen}
                      alt={servicio.titulo}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/25 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.24),transparent_32%)]" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] text-white backdrop-blur-md">
                      {servicio.badge}
                    </span>

                    <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-white/90 text-blue-600 shadow-xl backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                      <Icon size={24} strokeWidth={2.2} />
                    </div>
                  </div>

                  <div className="relative p-5 sm:p-6">
                    <h3 className="text-2xl font-black tracking-[-0.03em] text-slate-950 transition group-hover:text-blue-700">
                      {servicio.titulo}
                    </h3>

                    <p className="mt-3 text-[14.5px] leading-7 text-slate-600">
                      {servicio.descripcion}
                    </p>

                    <div className="mt-5 flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3">
                      <CheckCircle2 size={17} className="text-blue-600" />
                      <span className="text-sm font-bold text-slate-700">
                        {servicio.detalle}
                      </span>
                    </div>

                    <a
                      href="#contacto"
                      className="mt-5 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-[0_14px_35px_rgba(37,99,235,0.30)] transition-all duration-300 hover:bg-blue-700"
                    >
                      Reservar servicio
                      <ArrowUpRight size={17} />
                    </a>
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