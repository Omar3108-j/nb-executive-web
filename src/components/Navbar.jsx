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
      {/* Fondo dinámico */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-slate-950/78 backdrop-blur-2xl shadow-[0_16px_40px_rgba(2,6,23,0.32)]"
            : "border-b border-white/5 bg-[linear-gradient(180deg,rgba(2,6,23,0.78),rgba(2,6,23,0.42))] backdrop-blur-xl"
        }`}
      />

      {/* Línea elegante */}
      <div
        className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-70"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "py-3" : "py-4.5"
          }`}
        >
          {/* LOGO */}
          <motion.a
            href="#inicio"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="group flex items-center"
          >
            <div className="leading-tight">
              <p
                className={`logo-glow font-black leading-none tracking-[-0.03em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] transition-all duration-300 ${
                  scrolled
                    ? "text-[1.7rem] sm:text-[1.9rem]"
                    : "text-[1.9rem] sm:text-2xl"
                }`}
              >
                N&amp;B{" "}
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                  Executive
                </span>
              </p>

              <p
                className={`mt-1 uppercase tracking-[0.32em] text-blue-300/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)] transition-all duration-300 ${
                  scrolled
                    ? "text-[9px] sm:text-[10px]"
                    : "text-[10px] sm:text-xs"
                }`}
              >
                Premium Transport
              </p>
            </div>
          </motion.a>

          {/* NAV DESKTOP */}
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
                  {item.label}

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

          {/* BOTÓN CTA */}
          <div className="hidden md:block">
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
              <ArrowUpRight size={16} />
            </motion.a>
          </div>

          {/* BOTÓN MOBILE */}
          <motion.button
            onClick={() => setOpen(true)}
            whileTap={{ scale: 0.95 }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 md:hidden"
          >
            <Menu size={22} />
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              className="fixed right-0 top-0 z-[70] h-full w-[85%] max-w-sm bg-slate-950 text-white p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <button onClick={closeMenu}>
                <X />
              </button>

              <div className="mt-10 flex flex-col gap-4">
                {navLinks.map((item) => (
                  <a key={item.href} href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar