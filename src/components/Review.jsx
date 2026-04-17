import Reveal from "./Reveal"
import { empresa } from "../data/empresa"
import { MessageCircleMore, Star, ArrowUpRight } from "lucide-react"

function Review() {
  const mensaje = "Hola, quiero dejar una opinión sobre el servicio."
  const urlWhatsApp = `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensaje)}`

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.06),transparent_28%)]" />
      <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute right-[-80px] bottom-0 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="inline-flex items-center rounded-full border border-blue-100 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-blue-600 shadow-sm backdrop-blur-sm">
            Opiniones
          </p>

          <h2 className="shine-line mt-5 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            ¿Cómo fue tu experiencia con nosotros?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Tu opinión nos ayuda a mejorar y brindar un servicio cada vez más
            profesional.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="
              relative mt-12 overflow-hidden rounded-[32px]
              border border-slate-200/80 bg-white/92 p-10
              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              backdrop-blur-2xl
            "
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.05),transparent_24%)]" />
            <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/70" />

            <div className="relative">
              <div className="flex justify-center gap-2 text-yellow-400">
                <Star size={24} fill="currentColor" className="star-glow" />
                <Star size={24} fill="currentColor" className="star-glow" />
                <Star size={24} fill="currentColor" className="star-glow" />
                <Star size={24} fill="currentColor" className="star-glow" />
                <Star size={24} fill="currentColor" className="star-glow" />
              </div>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Si deseas compartir tu experiencia, puedes escribirnos
                directamente por WhatsApp.
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href={urlWhatsApp}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group relative inline-flex items-center gap-2 overflow-hidden
                    rounded-full bg-green-500 px-8 py-4 text-base font-bold text-white
                    shadow-[0_18px_40px_rgba(34,197,94,0.28)]
                    transition-all duration-300
                    hover:scale-[1.03] hover:bg-green-600
                  "
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
                  <MessageCircleMore size={18} className="relative z-10" />
                  <span className="relative z-10">Dejar opinión por WhatsApp</span>
                  <ArrowUpRight
                    size={18}
                    className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                Tu comentario nos ayuda a seguir mejorando cada servicio.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Review