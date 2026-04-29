import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  House,
  BriefcaseBusiness,
  CarFront,
  Phone,
  ArrowUpRight,
} from "lucide-react"
import { FaInstagram, FaTiktok } from "react-icons/fa"

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#inicio")

  const closeMenu = () => setOpen(false)

  const navLinks = [
    { href: "#inicio", label: "Inicio", icon: House },
    { href: "#servicios", label: "Servicios", icon: BriefcaseBusiness },
    { href: "#flota", label: "Flota", icon: CarFront },
    { href: "#contacto", label: "Contacto", icon: Phone },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18)

      const sections = navLinks
        .map((item) => document.querySelector(item.href))
        .filter(Boolean)

      const scrollPosition = window.scrollY + 140

      for (const section of sections) {
        const top = section.offsetTop
        const height = section.offsetHeight
        const id = `#${section.id}`

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-slate-950/82 backdrop-blur-2xl shadow-[0_16px_40px_rgba(2,6,23,0.35)]"
            : "border-b border-white/5 bg-[linear-gradient(180deg,rgba(2,6,23,0.86),rgba(2,6,23,0.42))] backdrop-blur-xl"
        }`}
      />

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-300/25 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "py-3" : "py-4"
          }`}
        >
          <motion.a
            href="#inicio"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="group flex items-center"
          >
            <div className="leading-tight">
              <p
                className={`logo-glow font-black leading-none tracking-[-0.04em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] transition-all duration-300 ${
                  scrolled
                    ? "text-[1.55rem] sm:text-[1.9rem]"
                    : "text-[1.7rem] sm:text-2xl"
                }`}
              >
                N&amp;B{" "}
                <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  Executive
                </span>
              </p>

              <p
                className={`mt-1 uppercase tracking-[0.28em] text-blue-300/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)] transition-all duration-300 ${
                  scrolled
                    ? "text-[7px] sm:text-[10px]"
                    : "text-[8px] sm:text-xs"
                }`}
              >
                Premium Transport
              </p>
            </div>
          </motion.a>

          <nav
            className={`hidden items-center md:flex transition-all duration-300 ${
              scrolled ? "gap-2.5" : "gap-3"
            }`}
          >
            {navLinks.map((item, index) => {
              const isActive = activeSection === item.href

              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.05 * index }}
                  className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white/12 text-white"
                      : "text-white/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] hover:bg-white/8"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>

                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full border border-white/10 bg-white/5"
                    />
                  )}
                </motion.a>
              )
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <div className="mr-2 flex items-center gap-3">
              <motion.a
                href="https://instagram.com/nb_executivepremium"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.12 }}
                className="group relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition"
              >
                <div className="absolute inset-0 rounded-full bg-pink-500/0 blur-md transition group-hover:bg-pink-500/30" />
                <FaInstagram size={16} className="relative z-10 text-white" />
              </motion.a>

              <motion.a
                href="https://tiktok.com/@nbexecutivepremium"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.12 }}
                className="group relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition"
              >
                <div className="absolute inset-0 rounded-full bg-cyan-400/0 blur-md transition group-hover:bg-cyan-400/25" />
                <FaTiktok size={15} className="relative z-10 text-white" />
              </motion.a>
            </div>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-blue-600 text-sm font-bold text-white shadow-[0_14px_35px_rgba(37,99,235,0.32)] transition-all duration-300 hover:bg-blue-700 ${
                scrolled ? "px-5 py-2.5" : "px-6 py-3"
              }`}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
              <span className="relative z-10">Reservar ahora</span>
              <ArrowUpRight size={16} className="relative z-10" />
            </motion.a>
          </div>

          <motion.button
            onClick={() => setOpen(true)}
            whileTap={{ scale: 0.94 }}
            className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/10 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:bg-white/15 md:hidden"
            aria-label="Abrir menú"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent" />
            <Menu size={22} className="relative z-10" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-slate-950/75 backdrop-blur-md md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.aside
              className="fixed right-0 top-0 z-[70] flex h-full w-[88%] max-w-sm flex-col overflow-hidden rounded-l-[34px] border-l border-white/10 bg-slate-950 text-white shadow-[0_0_80px_rgba(0,0,0,0.55)] md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.28),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.14),transparent_30%)]" />

              <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-5">
                <div>
                  <p className="text-2xl font-black tracking-[-0.04em]">
                    N&amp;B{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                      Executive
                    </span>
                  </p>
                  <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.32em] text-blue-300">
                    Premium Transport
                  </p>
                </div>

                <button
                  onClick={closeMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white"
                  aria-label="Cerrar menú"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative flex-1 px-5 py-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-200/80">
                  Menú principal
                </p>

                <div className="flex flex-col gap-3">
                  {navLinks.map((item, index) => {
                    const Icon = item.icon
                    const isActive = activeSection === item.href

                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                        className={`group flex items-center justify-between rounded-2xl border px-4 py-4 transition ${
                          isActive
                            ? "border-blue-300/30 bg-blue-500/18"
                            : "border-white/10 bg-white/[0.06] hover:bg-white/[0.09]"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                            <Icon size={18} />
                          </span>
                          <span className="font-semibold">{item.label}</span>
                        </span>

                        <ArrowUpRight
                          size={17}
                          className="text-white/55 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </motion.a>
                    )
                  })}
                </div>

                <div className="mt-7 rounded-[26px] border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-sm font-semibold text-white">
                    Atención ejecutiva inmediata
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Cotiza tu traslado al aeropuerto o servicio corporativo.
                  </p>

                  <a
                    href="#contacto"
                    onClick={closeMenu}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-[0_14px_35px_rgba(37,99,235,0.32)]"
                  >
                    Reservar ahora
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <div className="relative border-t border-white/10 px-5 py-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                    Redes sociales
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href="https://instagram.com/nb_executivepremium"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
                    >
                      <FaInstagram size={17} />
                    </a>

                    <a
                      href="https://tiktok.com/@nbexecutivepremium"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
                    >
                      <FaTiktok size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar