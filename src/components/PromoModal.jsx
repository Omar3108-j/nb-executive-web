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
    { icon: ShieldCheck, title: "Seguro", desc: "Atención profesional" },
    { icon: Clock3, title: "Puntual", desc: "Coordinación rápida" },
    { icon: BriefcaseBusiness, title: "VIP", desc: "Servicio ejecutivo" },
  ]

  const modalAnimation = isMobile
    ? {
        initial: { opacity: 0, y: 90 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 90 },
        transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
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
            className="fixed inset-0 z-[100] bg-slate-950/78 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
          />

          <div
  className={`fixed inset-0 z-[110] flex ${isMobile? "items-end justify-center px-4 pb-5": "items-center justify-center px-4 py-5"}`}>
            <motion.div
              {...modalAnimation}
              className={`relative w-full overflow-hidden border border-white/25 bg-white shadow-[0_30px_90px_rgba(2,6,23,0.48)] ${
                isMobile
                ? "mb-2 max-h-[72vh] max-w-[92%] rounded-[30px]"
                : "max-h-[90vh] max-w-xl rounded-[32px]"
              }`}
            >
              {isMobile && (
                <div className="absolute left-1/2 top-3 z-30 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/55" />
              )}

              <button
                onClick={handleClose}
                className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md transition hover:bg-black/65"
                aria-label="Cerrar promoción"
              >
                <X size={18} />
              </button>

              <div className={`${isMobile ? "max-h-[92vh]" : "max-h-[90vh]"} overflow-y-auto`}>
                <div className={`relative overflow-hidden ${isMobile ? "h-[170px] rounded-t-[30px]" : "h-[260px] rounded-t-[32px]"}`}>
                  <img
                    src={promoImg}
                    alt="Servicio ejecutivo"
                    className="h-full w-full object-cover object-[50%_28%]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/10" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.28),transparent_34%)]" />

                  <div className="absolute left-5 top-8 z-10">
                    <p className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-500/18 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-blue-100 backdrop-blur-md">
                      <Sparkles size={13} />
                      Atención premium
                    </p>

                    <div className="mt-3 rounded-2xl border border-white/10 bg-white/8 px-3 py-2 backdrop-blur-sm">
                      <div className="text-[18px] font-black tracking-[-0.03em] text-white">
                        N&amp;B{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                          Executive
                        </span>
                      </div>
                      <div className="mt-1 text-[8px] font-semibold uppercase tracking-[0.32em] text-sky-200">
                        Premium Transport
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 z-10">
                    <h3 className="max-w-sm text-xl font-black leading-tight tracking-[-0.03em] text-white">
                      Traslado ejecutivo seguro y puntual
                    </h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-slate-200">
                      Servicio premium para aeropuerto, reuniones y reservas corporativas.
                    </p>
                  </div>
                </div>

                <div className="relative bg-white px-5 pb-6 pt-5 sm:px-6 sm:pb-6">
                  <div className="grid grid-cols-3 gap-2.5">
                    {beneficios.map((item, i) => {
                      const Icon = item.icon
                      return (
                        <div
                          key={i}
                          className="rounded-[20px] border border-slate-100 bg-slate-50 px-3 py-3 text-center shadow-sm"
                        >
                          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                            <Icon size={17} />
                          </div>
                          <p className="mt-2 text-sm font-black text-slate-950">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[11px] leading-4 text-slate-500">
                            {item.desc}
                          </p>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-5 rounded-[24px] border border-blue-100 bg-blue-50/80 p-4">
                    <p className="text-center text-sm font-bold leading-6 text-slate-700">
                      Atención inmediata · WhatsApp directo · Coordinación rápida
                    </p>
                  </div>

                  <div className="mt-5 flex flex-col gap-3">
                    <a
                      href={urlWhatsApp}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3.5 text-sm font-black text-white shadow-[0_16px_35px_rgba(37,99,235,0.34)] transition hover:bg-blue-700"
                    >
                      Cotizar por WhatsApp
                      <ArrowUpRight size={17} />
                    </a>

                    <button
                      onClick={handleClose}
                      className="w-full rounded-full border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                    >
                      Ahora no
                    </button>
                  </div>
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