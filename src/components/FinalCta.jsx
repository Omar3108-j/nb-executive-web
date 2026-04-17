import { empresa } from "../data/empresa"
import Reveal from "./Reveal"
import { ArrowUpRight, MessageCircleMore } from "lucide-react"

function FinalCta() {
  const urlWhatsApp = `https://wa.me/${empresa.whatsapp}`

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 md:py-28">
      {/* Background premium */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.06),transparent_28%)]" />
      <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute right-[-80px] bottom-0 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div
            className="
              relative overflow-hidden rounded-[36px]
              border border-slate-200/80 bg-white/90 px-8 py-16 text-center
              shadow-[0_30px_80px_rgba(15,23,42,0.12)]
              backdrop-blur-2xl
            "
          >
            {/* glow interno */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.05),transparent_24%)]" />
            <div className="pointer-events-none absolute inset-0 rounded-[36px] ring-1 ring-inset ring-white/70" />

            {/* badge */}
            <p className="inline-flex items-center rounded-full border border-blue-100 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-blue-600 shadow-sm backdrop-blur-sm">
              Reserva ahora
            </p>

            {/* título */}
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.03em] text-slate-900 md:text-5xl">
              Agenda tu traslado con atención rápida y profesional
            </h2>

            {/* descripción */}
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Contáctanos por WhatsApp y recibe atención inmediata para coordinar tu
              servicio de manera segura, clara y sin complicaciones.
            </p>

            {/* botón */}
            <div className="mt-10">
              <a
                href={urlWhatsApp}
                target="_blank"
                rel="noreferrer"
                className="
                  group relative inline-flex items-center gap-2 overflow-hidden
                  rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white
                  shadow-[0_18px_45px_rgba(37,99,235,0.28)]
                  transition-all duration-300
                  hover:scale-[1.03] hover:bg-blue-700
                "
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
                
                <MessageCircleMore size={18} className="relative z-10" />

                <span className="relative z-10">
                  Solicitar información
                </span>

                <ArrowUpRight
                  size={18}
                  className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FinalCta