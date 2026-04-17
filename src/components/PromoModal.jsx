import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  ArrowUpRight,
  ShieldCheck,
  Clock3,
  BriefcaseBusiness,
} from "lucide-react"
import { empresa } from "../data/empresa"
import promoImg from "../assets/promo-executive.png"

function PromoModal() {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkViewport()
    window.addEventListener("resize", checkViewport)

    const lastClosed = localStorage.getItem("promoLastClosed")
    const now = new Date().getTime()
    const TEN_MINUTES = 600000

    if (!lastClosed || now - Number(lastClosed) > TEN_MINUTES) {
      const timer = setTimeout(() => {
        setOpen(true)
      }, window.innerWidth < 640 ? 3000 : 1400)

      return () => {
        clearTimeout(timer)
        window.removeEventListener("resize", checkViewport)
      }
    }

    return () => window.removeEventListener("resize", checkViewport)
  }, [])

  const handleClose = () => {
    setOpen(false)
    localStorage.setItem("promoLastClosed", new Date().getTime())
  }

  const mensaje =
    "Hola, deseo cotizar un traslado ejecutivo. Quisiera más información."
  const urlWhatsApp = `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensaje)}`

  const beneficios = [
    {
      icon: ShieldCheck,
      title: "Servicio seguro",
      desc: "Atención profesional",
    },
    {
      icon: Clock3,
      title: "Puntualidad",
      desc: "Siempre a tiempo",
    },
    {
      icon: BriefcaseBusiness,
      title: "Corporativo",
      desc: "Imagen ejecutiva",
    },
  ]

  const modalAnimation = isMobile
    ? {
        initial: { opacity: 0, y: 80 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 80 },
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
      }
    : {
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.98, y: 12 },
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
          />

          <div
            className={`fixed inset-0 z-[110] flex ${
              isMobile
                ? "items-end justify-center px-0 py-0"
                : "items-center justify-center px-3 py-4"
            }`}
          >
            <motion.div
              {...modalAnimation}
              className={`relative w-full ${
                isMobile
                  ? "max-w-none rounded-t-[28px] rounded-b-none"
                  : "max-w-xl rounded-3xl"
              } border border-white/30 bg-white/90 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl ${
                isMobile ? "max-h-[88vh] overflow-y-auto" : "max-h-[90vh] overflow-y-auto"
              }`}
            >
              {isMobile && (
                <div className="sticky top-0 z-20 flex justify-center bg-white/90 pt-3 backdrop-blur-xl">
                  <div className="h-1.5 w-14 rounded-full bg-slate-300" />
                </div>
              )}

              <button
                onClick={handleClose}
                className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/75"
                aria-label="Cerrar modal"
              >
                <X size={18} />
              </button>

              <div
                className={`relative overflow-hidden ${
                  isMobile ? "h-[180px] rounded-t-[28px]" : "h-[240px] rounded-t-3xl"
                }`}
              >
                <img
                  src={promoImg}
                  alt="Servicio ejecutivo"
                  className="h-full w-full object-cover object-[50%_25%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/35 to-transparent" />

                <div className="absolute left-4 top-4">
                  <p className="inline-flex rounded-full border border-blue-300/20 bg-blue-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-blue-100 backdrop-blur-md">
                    Atención premium
                  </p>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3
                    className={`font-black leading-tight text-white ${
                      isMobile ? "text-xl" : "text-3xl"
                    }`}
                  >
                    Traslado ejecutivo seguro y puntual
                  </h3>
                </div>
              </div>

              <div className={`${isMobile ? "px-4 py-5" : "px-6 py-6"}`}>
                <div className={`grid gap-2 ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
                  {beneficios.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {item.title}
                          </p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-4 rounded-[20px] border border-blue-100 bg-blue-50/70 px-4 py-3 text-center">
                  <p className="text-sm font-semibold text-slate-700">
                    Atención inmediata · WhatsApp directo · Coordinación rápida
                  </p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Reserva tu traslado con atención profesional para aeropuerto,
                  reuniones corporativas y viajes programados.
                </p>

                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href={urlWhatsApp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
                  >
                    Cotizar por WhatsApp
                    <ArrowUpRight size={16} />
                  </a>

                  <button
                    onClick={handleClose}
                    className="w-full rounded-full border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default PromoModal