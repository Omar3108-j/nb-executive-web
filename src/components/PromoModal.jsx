import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowUpRight, ShieldCheck, Clock3, BriefcaseBusiness } from "lucide-react"
import { empresa } from "../data/empresa"
import promoImg from "../assets/promo-executive.png"

function PromoModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const alreadyClosed = sessionStorage.getItem("promoClosed")
    if (!alreadyClosed) {
      const timer = setTimeout(() => {
        setOpen(true)
      }, 1800)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setOpen(false)
    sessionStorage.setItem("promoClosed", "true")
  }

  const mensaje =
    "Hola, quiero información sobre el servicio ejecutivo premium."
  const urlWhatsApp = `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensaje)}`

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* OVERLAY */}
          <motion.div
            className="fixed inset-0 z-[100] bg-slate-950/75 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* MODAL */}
          <motion.div
            className="fixed inset-0 z-[110] flex items-center justify-center px-4 py-6"
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="
                group relative w-full max-w-2xl overflow-hidden rounded-[32px]
                border border-white/40 bg-white/80
                shadow-[0_40px_120px_rgba(15,23,42,0.45)]
                backdrop-blur-2xl
              "
            >
              {/* GLOW BACKGROUND */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.15),transparent_30%),radial-gradient(circle_at_0%_100%,rgba(15,23,42,0.08),transparent_40%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/60" />

              {/* CLOSE */}
              <button
                onClick={handleClose}
                className="
                  absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center
                  rounded-full border border-white/20 bg-black/45 text-white
                  backdrop-blur-md transition duration-300
                  hover:scale-105 hover:bg-black/65
                "
              >
                <X size={20} />
              </button>

              {/* IMAGE SECTION */}
              <div className="relative h-64 w-full overflow-hidden sm:h-72">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={promoImg}
                    alt="Servicio ejecutivo premium"
                    className="
                      h-full w-full object-cover object-[50%_25%]
                      scale-[1.05] transition duration-[1200ms] ease-out
                      group-hover:scale-[1.1]
                    "
                  />

                  {/* OVERLAY PREMIUM */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

                  {/* LIGHT EFFECT */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_35%)]" />

                  {/* SHINE EFFECT */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                    <div className="absolute -inset-[200%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shine_2.5s_linear_infinite]" />
                  </div>
                </div>

                {/* BADGE */}
                <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                  <p className="inline-flex rounded-full border border-blue-300/20 bg-blue-500/15 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-blue-100 backdrop-blur-md sm:text-xs">
                    Atención premium
                  </p>
                </div>

                {/* TEXT */}
                <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
                  <div className="max-w-lg">
                    <h3 className="text-2xl font-black leading-tight text-white sm:text-4xl">
                      Traslado ejecutivo con imagen, puntualidad y confianza
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-white/80 sm:text-base">
                      Servicio ideal para aeropuerto, reuniones corporativas y atención de clientes importantes.
                    </p>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative px-6 py-7 sm:px-8 sm:py-8">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[ 
                    { icon: ShieldCheck, title: "Servicio seguro", desc: "Atención profesional" },
                    { icon: Clock3, title: "Puntualidad real", desc: "Disponibilidad inmediata" },
                    { icon: BriefcaseBusiness, title: "Perfil corporativo", desc: "Ideal para ejecutivos" }
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 backdrop-blur-sm transition hover:shadow-md">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                            <Icon size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">{item.title}</p>
                            <p className="text-xs text-slate-500">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <p className="mt-6 text-[15.5px] leading-7 text-slate-600 sm:text-base">
                  Reserva un servicio seguro, puntual y profesional para traslados
                  al aeropuerto, atención corporativa y viajes programados.
                </p>

                {/* CTA */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={urlWhatsApp}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group relative inline-flex items-center justify-center gap-2 overflow-hidden
                      rounded-full bg-blue-600 px-7 py-4 text-white font-bold
                      shadow-[0_18px_45px_rgba(37,99,235,0.35)]
                      transition-all duration-300
                      hover:scale-[1.03] hover:bg-blue-700
                    "
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-full" />
                    <span className="relative z-10">Reservar por WhatsApp</span>
                    <ArrowUpRight className="relative z-10 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={17} />
                  </a>

                  <button
                    onClick={handleClose}
                    className="
                      rounded-full border border-slate-200 bg-white px-6 py-4
                      font-semibold text-slate-700 transition duration-300
                      hover:border-slate-300 hover:bg-slate-50
                    "
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default PromoModal