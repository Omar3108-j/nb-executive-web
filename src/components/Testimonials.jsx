import { useEffect, useRef } from "react"
import { empresa } from "../data/empresa"
import Reveal from "./Reveal"
import { Quote } from "lucide-react"
import testimonialsBg from "../assets/testimonials-bg.png"

function Testimonials() {
  const trackRef = useRef(null)

  // duplicamos para loop infinito REAL
  const data = [...empresa.testimonios, ...empresa.testimonios]

  useEffect(() => {
    let animationFrame
    let position = 0

    const speed = 0.3 // 🔥 controla velocidad (0.2 = más lento, 0.5 = más rápido)

    const animate = () => {
      position -= speed

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${position}px)`
      }

      // reset invisible
      if (Math.abs(position) >= trackRef.current.scrollWidth / 2) {
        position = 0
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section className="relative overflow-hidden py-28">
      {/* 🔥 BACKGROUND MEJORADO */}
      <div className="absolute inset-0">
        <img
          src={testimonialsBg}
          alt=""
          className="h-full w-full object-cover opacity-70"
        />

        {/* overlay MÁS SUAVE */}
        <div className="absolute inset-0 bg-slate-900/50" />

        {/* glow dinámico */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(14,165,233,0.18),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="ui-badge">Testimonios</p>

            <h2 className="ui-title shine-line">
              Experiencias reales que hablan por nosotros
            </h2>

            <p className="ui-subtitle">
              Servicio ejecutivo premium con estándares de alta calidad.
            </p>
          </div>
        </Reveal>

        {/* 🔥 ULTRA SMOOTH CAROUSEL */}
        <div className="mt-16 overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 w-max"
          >
            {data.map((item, idx) => (
              <div key={idx} className="w-[320px] md:w-[420px] flex-shrink-0">
                <article className="ui-card group">
                  <div className="ui-glow" />

                  <div className="flex h-full flex-col p-7">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="star-glow text-yellow-400">
                        ★★★★★
                      </div>

                      <div className="icon-premium flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100/80 text-blue-600">
                        <Quote size={18} />
                      </div>
                    </div>

                    <p className="flex-1 text-slate-700 leading-relaxed">
                      “{item.comentario}”
                    </p>

                    <div className="mt-6 border-t border-slate-300/40 pt-4">
                      <p className="font-bold text-slate-900">
                        {item.nombre}
                      </p>
                      <p className="text-sm text-slate-600">
                        {item.cargo}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials