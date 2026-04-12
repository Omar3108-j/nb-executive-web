import { empresa } from "../data/empresa"
import Reveal from "./Reveal"

function FinalCta() {
  const urlWhatsApp = `https://wa.me/${empresa.whatsapp}`

  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
            Reserva ahora
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Agenda tu traslado con atención rápida y profesional
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50">
            Contáctanos por WhatsApp y recibe atención inmediata para coordinar tu
            servicio de manera segura, clara y sin complicaciones.
          </p>

          <div className="mt-10">
            <a
              href={urlWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              Solicitar información
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FinalCta