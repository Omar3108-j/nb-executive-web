import Reveal from "./Reveal"
import { empresa } from "../data/empresa"

function Review() {
  const mensaje = "Hola, quiero dejar una opinión sobre el servicio."
  const urlWhatsApp = `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensaje)}`

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Opiniones
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
            ¿Cómo fue tu experiencia con nosotros?
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Tu opinión nos ayuda a mejorar y brindar un servicio cada vez más profesional.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-3xl border border-slate-200 p-10 shadow-sm">
            
            {/* estrellas visuales */}
            <div className="flex justify-center gap-2 text-3xl text-yellow-400">
              ⭐ ⭐ ⭐ ⭐ ⭐
            </div>

            <p className="mt-6 text-slate-600">
              Si deseas compartir tu experiencia, puedes escribirnos directamente por WhatsApp.
            </p>

            <a
              href={urlWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
            >
              Dejar opinión por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Review