import { useEffect, useState } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import {
  ArrowUpRight,
  ShieldCheck,
  Clock3,
  BriefcaseBusiness,
  Plane,
} from "lucide-react"
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
    mouseX.set(e.clientX / innerWidth - 0.5)
    mouseY.set(e.clientY / innerHeight - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const features = [
    {
      icon: Clock3,
      title: "24/7",
      text: "Atención continua",
    },
    {
      icon: ShieldCheck,
      title: "VIP",
      text: "Atención personalizada",
    },
    {
      icon: BriefcaseBusiness,
      title: "A1",
      text: "Imagen profesional",
    },
  ]

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
          className="
            absolute inset-0 h-full w-full object-cover
            object-[64%_center]
            sm:object-[68%_center]
          "
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

      <div className="absolute inset-0 bg-slate-950/52" />

      <div
        className="
          absolute inset-0
          bg-gradient-to-b from-slate-950/88 via-slate-950/50 to-slate-950/90
          sm:bg-gradient-to-r sm:from-slate-950 sm:via-slate-950/72 sm:to-slate-950/12
        "
      />

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_70%_22%,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.06),transparent_24%)]
        "
      />

      <motion.div
        className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-blue-500/14 blur-3xl"
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={mounted ? { x: glowX, y: glowY } : undefined}
      />

      <motion.div
        className="absolute right-0 top-28 h-72 w-72 rounded-full bg-cyan-400/12 blur-3xl"
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={mounted ? { x: glowX, y: glowY } : undefined}
      />

      <motion.div
        className="pointer-events-none absolute inset-y-0 left-[-35%] w-[35%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl"
        animate={{ x: ["0%", "420%"] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 sm:px-6">
        <motion.div
          className="
            w-full max-w-3xl
            pt-28 pb-16
            sm:pt-28 sm:pb-20
            lg:pt-16
          "
          style={mounted ? { x: contentX, y: contentY } : undefined}
        >
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="
              inline-flex max-w-[92%] items-center gap-3 rounded-full
              border border-white/15 bg-white/10 px-4 py-3
              text-[11px] font-black uppercase tracking-[0.24em]
              text-blue-100 shadow-[0_12px_40px_rgba(0,0,0,0.24)]
              backdrop-blur-xl
              sm:px-4 sm:py-1.5 sm:text-xs
            "
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 sm:hidden">
              <Plane size={17} />
            </span>
            <span>Traslados ejecutivos al aeropuerto</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="
              title-glow mt-8 max-w-3xl
              text-[3.05rem] font-black leading-[0.96] tracking-[-0.055em]
              sm:mt-6 sm:text-5xl
              md:text-7xl
            "
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
            className="
              mt-7 max-w-2xl
              text-[1.12rem] leading-[1.9] text-slate-100/95
              sm:mt-6 sm:text-lg sm:leading-8
            "
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
                group relative inline-flex min-h-[64px] w-full items-center justify-center
                gap-3 overflow-hidden rounded-full bg-blue-600 px-8 py-4
                text-center text-base font-black text-white
                shadow-[0_18px_45px_rgba(37,99,235,0.42)]
                transition-all duration-300 hover:bg-blue-700
                sm:w-auto sm:min-h-0 sm:text-lg
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
              <span className="relative z-10">Reservar por WhatsApp</span>
              <ArrowUpRight
                size={20}
                className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>

            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex min-h-[64px] w-full items-center justify-center
                rounded-full border border-white/18 bg-white/10 px-8 py-4
                text-center text-base font-bold text-white backdrop-blur-xl
                shadow-[0_14px_35px_rgba(0,0,0,0.18)]
                transition-all duration-300 hover:bg-white hover:text-slate-950
                sm:w-auto sm:min-h-0 sm:text-lg
              "
            >
              Ver servicios
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.24 }}
            className="mt-6 flex items-center gap-3 text-sm font-bold text-slate-200 sm:mt-4"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.95)]" />
            <span>Respuesta inmediata · Atención 24/7</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.08, delay: 0.28, ease: "easeOut" }}
            className="
              mt-9 grid max-w-3xl grid-cols-3 gap-3
              sm:mt-10 sm:grid-cols-3
            "
          >
            {features.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="
                    group rounded-[24px] border border-white/12 bg-white/[0.09]
                    p-4 backdrop-blur-xl
                    shadow-[0_14px_40px_rgba(0,0,0,0.22)]
                    transition duration-300 hover:-translate-y-1 hover:bg-white/12
                    sm:rounded-[22px] sm:p-4
                  "
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
                    <div
                      className="
                        icon-premium flex h-12 w-12 items-center justify-center
                        rounded-2xl bg-white/10 text-blue-300
                        sm:h-11 sm:w-11 sm:rounded-xl
                      "
                    >
                      <Icon size={20} />
                    </div>

                    <div>
                      <p className="text-2xl font-black leading-none text-white sm:text-xl">
                        {item.title}
                      </p>
                      <p className="mt-2 text-[13px] leading-5 text-slate-200 sm:text-sm">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.5 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mx-auto mt-8 h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent sm:hidden"
          />
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

export default Hero