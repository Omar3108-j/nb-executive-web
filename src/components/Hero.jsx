import { motion } from "framer-motion"
import heroBg from "../assets/hero-aeropuerto.png"

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden text-white">
      <img
        src={heroBg}
        alt="Servicio ejecutivo aeropuerto Jorge Chávez"
        className="absolute inset-0 h-full w-full object-cover scale-[1.02]"
      />

      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(37,99,235,0.22),_transparent_28%)]"></div>
      <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 min-h-screen flex items-center">
        <div className="max-w-3xl pt-10 sm:pt-16 md:pt-0">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-300 backdrop-blur-sm"
          >
            Traslados ejecutivos al aeropuerto
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="title-glow mt-5 max-w-3xl text-4xl sm:text-5xl md:text-7xl font-black leading-[1.02] tracking-tight"
          >
            Servicio Ejecutivo
            <span className="subtitle-glow block text-blue-500">
              Premium
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 max-w-xl text-base sm:text-lg leading-8 text-slate-200"
          >
            Transporte ejecutivo premium en Lima. Puntualidad, seguridad y atención personalizada para traslados al aeropuerto y servicios corporativos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="glow-blue rounded-full bg-blue-600 px-8 py-4 text-center text-lg font-semibold text-white transition hover:bg-blue-700"
>
              Reservar por WhatsApp
            </motion.a>

            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full border border-white/30 bg-black/20 px-8 py-4 text-center text-lg font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            >
              Ver servicios
            </motion.a>
          </motion.div>

          <p className="mt-3 text-sm text-slate-300">
            Respuesta inmediata · Atención 24/7
          </p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-3xl"
          >
            <div className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <p className="text-lg sm:text-xl font-bold">24/7</p>
              <p className="mt-1 text-sm text-slate-200">Atención continua</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <p className="text-lg sm:text-xl font-bold">VIP</p>
              <p className="mt-1 text-sm text-slate-200">Atención personalizada</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <p className="text-lg sm:text-xl font-bold">A1</p>
              <p className="mt-1 text-sm text-slate-200">Imagen profesional</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero