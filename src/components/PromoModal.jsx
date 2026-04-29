import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  ArrowUpRight,
  ShieldCheck,
  Clock3,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react"
import { empresa } from "../data/empresa"
import promoImg from "../assets/promo-executive.png"

function PromoModal() {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 640)

    checkViewport()
    window.addEventListener("resize", checkViewport)

    const lastClosed = localStorage.getItem("promoLastClosed")
    const now = new Date().getTime()
    const TEN_MINUTES = 600000

    if (!lastClosed || now - Number(lastClosed) > TEN_MINUTES) {
      const timer = setTimeout(() => setOpen(true), window.innerWidth < 640 ? 1800 : 1200)

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
    "Hola, deseo cotizar un traslado ejecutivo con N&B Executive Premium. Quisiera más información."

  const urlWhatsApp = `https://wa.me/${String(empresa.whatsapp).replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(mensaje)}`

  const beneficios = [
    { icon: ShieldCheck, title: "Seguro" },
    { icon: Clock3, title: "Puntual" },
    { icon: BriefcaseBusiness, title: "VIP" },
  ]

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <div
            className={`fixed inset-0 z-[110] flex ${
              isMobile
                ? "items-end justify-center px-4 pb-5"
                : "items-center justify-center px-4 py-5"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 80 : 20, scale: isMobile ? 1 : 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: isMobile ? 80 : 20, scale: isMobile ? 1 : 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full overflow-hidden border border-white/25 bg-white shadow-[0_30px_90px_rgba(2,6,23,0.48)] ${
                isMobile
                  ? "max-w-[92%] rounded-[30px]"
                  : "max-h-[90vh] max-w-xl rounded-[32px]"
              }`}
            >
              <button
                onClick={handleClose}
                className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/70 text-white backdrop-blur-md"
                aria-label="Cerrar promoción"
              >
                <X size={18} />
              </button>

              <div className="relative h-[160px] overflow-hidden sm:h-[240px]">
                <img
                  src={promoImg}
                  alt="Servicio ejecutivo"
                  className="h-full w-full object-cover object-[50%_35%]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                {/* LOGO + BADGE PREMIUM */}
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.45, delay: 0.15 }}
  className="absolute left-4 top-4 z-20 flex flex-col items-start"
>

  {/* LOGO DEBAJO */}
  <div className="mt-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md">
    <div className="leading-none">
      <p className="text-[13px] font-black tracking-[-0.03em] text-white">
        N&amp;B{" "}
        <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
          Executive
        </span>
      </p>

      <p className="mt-1 text-[6px] font-semibold uppercase tracking-[0.3em] text-blue-200">
        Premium Transport
      </p>
    </div>
  </div>
</motion.div>

                <div className="absolute bottom-4 left-4 right-14">

                  <h3 className="text-[20px] font-black leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                    Traslado ejecutivo seguro y puntual
                  </h3>
                </div>
              </div>

              <div className="px-5 pb-5 pt-4">
                <p className="text-center text-sm font-semibold leading-6 text-slate-600">
                  Servicio premium para aeropuerto, reuniones y reservas corporativas.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {beneficios.map((item, i) => {
                    const Icon = item.icon

                    return (
                      <div
                        key={i}
                        className="rounded-2xl border border-slate-100 bg-slate-50 px-2 py-3 text-center"
                      >
                        <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                          <Icon size={16} />
                        </div>
                        <p className="mt-2 text-xs font-black text-slate-900">
                          {item.title}
                        </p>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-4 rounded-[20px] border border-blue-100 bg-blue-50 px-4 py-3 text-center">
                  <p className="text-sm font-bold leading-6 text-slate-700">
                    Atención inmediata · WhatsApp directo
                  </p>
                </div>

                <div className="mt-4 flex flex-col gap-2.5">
                  <a
                    href={urlWhatsApp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-[0_16px_35px_rgba(37,99,235,0.34)]"
                  >
                    Cotizar por WhatsApp
                    <ArrowUpRight size={17} />
                  </a>

                  <button
                    onClick={handleClose}
                    className="w-full rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700"
                  >
                    Ahora no
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