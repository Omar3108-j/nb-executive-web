import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">

          {/* LOGO */}
          <motion.a
            href="#inicio"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="leading-tight cursor-pointer"
            >
              <p className="text-white text-2xl font-black tracking-tight logo-glow">
                N&B{" "}
                <span className="text-blue-500 transition duration-300">
                  Executive
                </span>
              </p>

              <p className="text-blue-400 text-xs uppercase tracking-[0.28em] opacity-80">
                Premium
              </p>
            </motion.div>
          </motion.a>

          {/* MENÚ DESKTOP */}
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

          {/* BOTÓN DESKTOP */}
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition hover:bg-blue-700"
          >
            Reservar ahora
          </motion.a>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MENÚ MÓVIL */}
        {open && (
          <div className="md:hidden flex flex-col gap-4 pb-4 text-white bg-slate-950/95 backdrop-blur-xl rounded-xl p-4 mt-2 animate-fadeIn">
            <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
            <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
            <a href="#flota" onClick={() => setOpen(false)}>Flota</a>
            <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>

            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="bg-blue-600 text-center py-3 rounded-full font-semibold mt-2"
            >
              Reservar ahora
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar