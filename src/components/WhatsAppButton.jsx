import { motion } from "framer-motion"
import { empresa } from "../data/empresa"

function WhatsAppButton() {
  const mensaje = "Buen dia, gracias por contactarnos. En N&B Executive Premium le ofrecemos un servicio seguro, puntual y de alto nivel 🚘✨Le invitamos a indicarnos su ubicación de origen para brindarle un servicio personalizado  ."
  const urlWhatsApp = `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensaje)}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-3"
    >
      <div className="hidden md:block">
        <div className="rounded-full border border-white/10 bg-black/70 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-md animate-fadeIn">
          WhatsApp
        </div>
      </div>

      <motion.a
        href={urlWhatsApp}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex h-15 w-15 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_20px_40px_rgba(0,0,0,0.28)]"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping"></span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="relative h-8 w-8 fill-current"
        >
          <path d="M19.11 17.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.5.7.3 1.25.47 1.67.6.7.22 1.33.2 1.83.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
          <path d="M16.03 3.2C9.2 3.2 3.66 8.74 3.66 15.57c0 2.18.57 4.3 1.65 6.17L3.2 28.8l7.26-1.9a12.3 12.3 0 0 0 5.57 1.34h.01c6.83 0 12.37-5.55 12.37-12.38 0-3.31-1.29-6.42-3.63-8.75A12.28 12.28 0 0 0 16.03 3.2zm0 22.95h-.01c-1.85 0-3.67-.5-5.25-1.43l-.38-.23-4.3 1.13 1.15-4.2-.25-.4a10.26 10.26 0 0 1-1.58-5.45c0-5.67 4.62-10.29 10.3-10.29 2.75 0 5.33 1.07 7.28 3.02a10.23 10.23 0 0 1 3.01 7.28c0 5.68-4.62 10.3-10.29 10.3z" />
        </svg>
      </motion.a>
    </motion.div>
  )
}

export default WhatsAppButton