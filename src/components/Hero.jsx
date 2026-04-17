import { useEffect, useState } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { ArrowUpRight, ShieldCheck, Clock3, BriefcaseBusiness } from "lucide-react"
import heroBg from "../assets/hero-aeropuerto.png"

function Hero() {
  const [mounted, setMounted] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const bgX = useTransform(mouseX, [-0.5, 0.5], [-18, 18])
  const bgY = useTransform(mouseY, [-0.5, 0.5], [-12, 12])

  const glowX = useTransform(mouseX, [-0.5, 0.5], [-30, 30])
  const glowY = useTransform(mouseY, [-0.5, 0.5], [-20, 20])

  const contentX = useTransform(mouseX, [-0.5, 0.5], [-8, 8])
  const contentY = useTransform(mouseY, [-0.5, 0.5], [-6, 6])

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window
    const x = e.clientX / innerWidth - 0.5
    const y = e.clientY / innerHeight - 0.5

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="inicio"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden text-white"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 7, ease: "easeOut" }}
        style={mounted ? { x: bgX, y: bgY } : undefined}
      >
        <motion.img
          src={heroBg}
          alt="Servicio ejecutivo aeropuerto Jorge Chávez"
          className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
          animate={{
            scale: [1.02, 1.07, 1.03],
            x: [0, -8, 0],
            y: [0, -6, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-slate-950/48" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/72 to-slate-950/12" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-transparent to-slate-950/12" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(37,99,235,0.22),transparent_22%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.06),transparent_22%)]" />

      <motion.div
        className="absolute -left-16 top-24 h-72 w-72 rounded-full bg-blue-500/12 blur-3xl"
        animate={{
          opacity: [0.35, 0.55, 0.35],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={mounted ? { x: glowX, y: glowY } : undefined}
      />
      <motion.div
        className="absolute right-0 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          opacity: [0.28, 0.5, 0.28],
          scale: [1, 1.06, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={mounted ? { x: glowX, y: glowY } : undefined}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{
          opacity: [0.2, 0.35, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute inset-y-0 left-[-25%] w-[30%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl"
        animate={{ x: ["0%", "420%"] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute left-[10%] top-[18%] h-2 w-2 rounded-full bg-white/40 blur-[2px]"
        animate={{ y: [0, -18, 0], opacity: [0.15, 0.5, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-[22%] top-[30%] h-3 w-3 rounded-full bg-blue-300/30 blur-[3px]"
        animate={{ y: [0, -24, 0], opacity: [0.1, 0.35, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="pointer-events-none absolute right-[16%] top-[22%] h-2.5 w-2.5 rounded-full bg-cyan-200/25 blur-[3px]"
        animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      <motion.div
        className="pointer-events-none absolute right-[26%] bottom-[24%] h-2 w-2 rounded-full bg-white/20 blur-[2px]"
        animate={{ y: [0, -16, 0], opacity: [0.08, 0.24, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
      />

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6">
        <motion.div
          className="max-w-3xl pt-20 sm:pt-24 md:pt-24 lg:pt-16"
          style={mounted ? { x: contentX, y: contentY } : undefined}
        >
          <motion.span
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="inline-flex items-center rounded-full border border-blue-300/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-blue-200 backdrop-blur-md sm:text-xs"
          >
            Traslados ejecutivos al aeropuerto
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="title-glow mt-6 max-w-3xl text-4xl font-black leading-[0.97] tracking-[-0.04em] sm:text-5xl md:text-7xl"
          >
            Servicio Ejecutivo
            <span className="subtitle-glow mt-2 block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
              Premium
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg"
          >
            Transporte ejecutivo premium en Lima. Puntualidad, seguridad y
            atención personalizada para traslados al aeropuerto y servicios
            corporativos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.16, ease: "easeOut" }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="
                group relative inline-flex items-center justify-center gap-2 overflow-hidden
                rounded-full bg-blue-600 px-8 py-4 text-center text-base font-bold text-white
                shadow-[0_18px_45px_rgba(37,99,235,0.32)]
                transition-all duration-300 hover:bg-blue-700
                sm:text-lg
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
              <span className="relative z-10">Reservar por WhatsApp</span>
              <ArrowUpRight
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>

            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex items-center justify-center rounded-full
                border border-white/20 bg-white/10 px-8 py-4 text-center text-base
                font-semibold text-white backdrop-blur-md
                transition-all duration-300 hover:bg-white hover:text-slate-950
                hover:shadow-[0_10px_30px_rgba(255,255,255,0.16)]
                sm:text-lg
              "
            >
              Ver servicios
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.24 }}
            className="mt-4 text-sm font-medium text-slate-300"
          >
            Respuesta inmediata · Atención 24/7
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.08, delay: 0.28, ease: "easeOut" }}
            className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            <div className="group rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-white/12 hover:shadow-[0_20px_40px_rgba(0,0,0,0.24)]">
              <div className="flex items-center gap-3">
                <div className="icon-premium flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                  <Clock3 size={18} />
                </div>
                <div>
                  <p className="text-lg font-black text-white sm:text-xl">24/7</p>
                  <p className="mt-1 text-sm text-slate-200">Atención continua</p>
                </div>
              </div>
            </div>

            <div className="group rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-white/12 hover:shadow-[0_20px_40px_rgba(0,0,0,0.24)]">
              <div className="flex items-center gap-3">
                <div className="icon-premium flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <p className="text-lg font-black text-white sm:text-xl">VIP</p>
                  <p className="mt-1 text-sm text-slate-200">Atención personalizada</p>
                </div>
              </div>
            </div>

            <div className="group rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-white/12 hover:shadow-[0_20px_40px_rgba(0,0,0,0.24)]">
              <div className="flex items-center gap-3">
                <div className="icon-premium flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                  <BriefcaseBusiness size={18} />
                </div>
                <div>
                  <p className="text-lg font-black text-white sm:text-xl">A1</p>
                  <p className="mt-1 text-sm text-slate-200">Imagen profesional</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero