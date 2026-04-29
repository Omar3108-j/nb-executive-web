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
      const timer = setTimeout(
        () => setOpen(true),
        window.innerWidth < 640 ? 1800 : 1200
      )

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
            className="fixed inset-0 z-[100] bg-slate-950/72 backdrop-blur-md"
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
              initial={{
                opacity: 0,
                y: isMobile ? 90 : 24,
                scale: isMobile ? 0.98 : 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: isMobile ? 90 : 24,
                scale: isMobile ? 0.98 : 0.96,
              }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full overflow-hidden border border-white/25 bg-white shadow-[0_35px_100px_rgba(2,6,23,0.55)] ${
                isMobile
                  ? "max-w-[92%] rounded-[32px]"
                  : "max-h-[90vh] max-w-xl rounded-[34px]"
              }`}
            >
              <div className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] ring-1 ring-inset ring-white/50" />

              <button
                onClick={handleClose}
                className="absolute right-3 top-3 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950/65 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:bg-slate-950/80"
                aria-label="Cerrar promoción"
              >
                <X size={18} />
              </button>

              <div className="relative h-[168px] overflow-hidden sm:h-[250px]">
                <motion.img
                  src={promoImg}
                  alt="Servicio ejecutivo"
                  className="h-full w-full object-cover object-[50%_35%]"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1.02 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.38),transparent_30%),radial-gradient(circle_at_86%_22%,rgba(6,182,212,0.18),transparent_28%)]" />

                <motion.div
                  className="pointer-events-none absolute -left-16 top-0 h-24 w-24 rounded-full bg-blue-500/30 blur-3xl"
                  animate={{
                    opacity: [0.28, 0.48, 0.28],
                    scale: [1, 1.12, 1],
                  }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* LOGO ULTRA LUJO */}
                <motion.div
                  initial={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.55, delay: 0.15 }}
                  className="absolute left-4 top-4 z-30 flex flex-col items-start"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(37,99,235,0)",
                        "0 0 22px rgba(37,99,235,0.45)",
                        "0 0 0 rgba(37,99,235,0)",
                      ],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mb-1 inline-flex items-center gap-1.5 rounded-full border border-blue-300/30 bg-blue-600/90 px-2.5 py-[3px] text-[7px] font-black uppercase tracking-[0.25em] text-white backdrop-blur-md"
                  >
                    <Sparkles size={10} />
                    Atención premium
                  </motion.div>

                  <div className="rounded-2xl border border-white/20 bg-black/42 px-3 py-2 shadow-[0_14px_35px_rgba(0,0,0,0.38)] backdrop-blur-xl">
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

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.25 }}
                  className="absolute bottom-4 left-4 right-14 z-20"
                >
                  <h3 className="text-[21px] font-black leading-tight tracking-[-0.04em] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)] sm:text-3xl">
                    Traslado ejecutivo seguro y puntual
                  </h3>
                </motion.div>
              </div>

              <div className="relative px-5 pb-5 pt-4">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

                <p className="text-center text-sm font-semibold leading-6 text-slate-600">
                  Servicio premium para aeropuerto, reuniones y reservas
                  corporativas.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2.5">
                  {beneficios.map((item, i) => {
                    const Icon = item.icon

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.32 + i * 0.06 }}
                        className="rounded-2xl border border-slate-100 bg-gradient-to-b from-slate-50 to-white px-2 py-3 text-center shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
                      >
                        <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                          <Icon size={16} />
                        </div>
                        <p className="mt-2 text-xs font-black text-slate-900">
                          {item.title}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="mt-4 rounded-[22px] border border-blue-100 bg-gradient-to-br from-blue-50 to-slate-50 px-4 py-3 text-center shadow-inner">
                  <p className="text-sm font-black leading-6 text-slate-700">
                    Atención inmediata · WhatsApp directo
                  </p>
                </div>

                <div className="mt-4 flex flex-col gap-2.5">
                  <a
                    href={urlWhatsApp}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex min-h-[54px] w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-[0_16px_38px_rgba(37,99,235,0.38)] transition hover:bg-blue-700"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
                    <span className="relative z-10">Cotizar por WhatsApp</span>
                    <ArrowUpRight size={17} className="relative z-10" />
                  </a>

                  <button
                    onClick={handleClose}
                    className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-[0_8px_22px_rgba(15,23,42,0.04)] transition hover:bg-slate-50"
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