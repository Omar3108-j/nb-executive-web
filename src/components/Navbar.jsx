import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, House, BriefcaseBusiness, CarFront, Phone } from "lucide-react"

function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <motion.a
            href="#inicio"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="leading-tight cursor-pointer"
            >
              <p className="text-white text-[1.9rem] sm:text-2xl font-black tracking-tight logo-glow leading-none">
                N&B <span className="text-blue-500">Executive</span>
              </p>
              <p className="mt-1 text-blue-400 text-[10px] sm:text-xs uppercase tracking-[0.28em] opacity-80">
                Premium
              </p>
            </motion.div>
          </motion.a>

          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-white/90">
            <a href="#inicio" className="transition hover:text-blue-400">
              Inicio
            </a>
            <a href="#servicios" className="transition hover:text-blue-400">
              Servicios
            </a>
            <a href="#flota" className="transition hover:text-blue-400">
              Flota
            </a>
            <a href="#contacto" className="transition hover:text-blue-400">
              Contacto
            </a>
          </nav>

          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition hover:bg-blue-700"
          >
            Reservar ahora
          </motion.a>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
            aria-label="Abrir menú"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.aside
              className="fixed right-0 top-0 z-[70] h-screen w-[84%] max-w-[340px] border-l border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-black p-6 text-white shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
            >
              <div className="flex items-start justify-between">
                <div className="leading-tight">
                  <p className="text-2xl font-black tracking-tight">
                    N&B <span className="text-blue-500">Executive</span>
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-blue-400 opacity-80">
                    Premium
                  </p>
                </div>

                <button
                  onClick={closeMenu}
                  className="rounded-full border border-white/10 p-2 text-white transition hover:bg-white/5"
                  aria-label="Cerrar menú"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="mt-8 h-px w-full bg-white/10" />

              <nav className="mt-8 flex flex-col gap-3">
                <a
                  href="#inicio"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-2xl px-4 py-4 text-lg font-medium text-white/95 transition hover:bg-white/5 hover:text-blue-400"
                >
                  <House size={18} />
                  Inicio
                </a>

                <a
                  href="#servicios"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-2xl px-4 py-4 text-lg font-medium text-white/95 transition hover:bg-white/5 hover:text-blue-400"
                >
                  <BriefcaseBusiness size={18} />
                  Servicios
                </a>

                <a
                  href="#flota"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-2xl px-4 py-4 text-lg font-medium text-white/95 transition hover:bg-white/5 hover:text-blue-400"
                >
                  <CarFront size={18} />
                  Flota
                </a>

                <a
                  href="#contacto"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-2xl px-4 py-4 text-lg font-medium text-white/95 transition hover:bg-white/5 hover:text-blue-400"
                >
                  <Phone size={18} />
                  Contacto
                </a>
              </nav>

              <div className="mt-8">
                <a
                  href="#contacto"
                  onClick={closeMenu}
                  className="block rounded-full bg-blue-600 px-6 py-4 text-center text-base font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition hover:bg-blue-700"
                >
                  Reservar ahora
                </a>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
                  Atención
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Respuesta rápida por WhatsApp
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Reserva traslados al aeropuerto, servicios corporativos y atención personalizada.
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar