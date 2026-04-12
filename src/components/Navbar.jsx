import { motion } from "framer-motion"

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">

          {/* LOGO TEXTO PREMIUM */}
          <motion.a
            href="#inicio"
            initial={{ opacity: 0, y: -20 }}
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

          {/* MENÚ */}
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

          {/* BOTÓN */}
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition hover:bg-blue-700"
          >
            Reservar ahora
          </motion.a>
        </div>
      </div>
    </header>
  )
}

export default Navbar