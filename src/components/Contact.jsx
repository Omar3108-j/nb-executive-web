import { useState } from "react"
import { empresa } from "../data/empresa"
import Reveal from "./Reveal"
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Clock3,
  MessageCircleMore,
} from "lucide-react"

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    const nombre = formData.nombre.trim()
    const telefono = formData.telefono.trim()
    const correo = formData.correo.trim()

    if (!nombre) {
      newErrors.nombre = "Ingresa tu nombre completo."
    }

    if (!telefono) {
      newErrors.telefono = "Ingresa tu número de teléfono."
    } else if (!/^[0-9+\s()-]{7,20}$/.test(telefono)) {
      newErrors.telefono = "Ingresa un teléfono válido."
    }

    if (
      correo &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
    ) {
      newErrors.correo = "Ingresa un correo electrónico válido."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) return

    const nombre = formData.nombre.trim()
    const telefono = formData.telefono.trim()
    const correo = formData.correo.trim()
    const mensajeUsuario = formData.mensaje.trim()

    const mensaje = `Buen día, gracias por contactarnos.
En N&B Executive Premium ofrecemos traslados seguros, puntuales y de alto nivel.

Nombre: ${nombre}
Teléfono: ${telefono}
Correo: ${correo || "-"}
Servicio requerido: ${mensajeUsuario || "-"}

Indíquenos su ubicación de origen para brindarle una atención personalizada.`

    const numeroWhatsApp = String(empresa.whatsapp).replace(/\D/g, "")
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`

    window.open(urlWhatsApp, "_blank", "noopener,noreferrer")
  }

  const inputClass = (fieldName) => `
    w-full rounded-2xl border bg-white px-4 py-3.5 outline-none transition-all duration-300
    placeholder:text-slate-400
    focus:ring-4
    ${
      errors[fieldName]
        ? "border-red-400 focus:border-red-500 focus:ring-red-500/10 bg-red-50/40"
        : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
    }
  `

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-slate-50 py-24 md:py-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,64,175,0.24)_0%,rgba(59,130,246,0.10)_28%,rgba(255,255,255,0.88)_58%,rgba(255,255,255,0.96)_100%),radial-gradient(circle_at_top_left,rgba(37,99,235,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_30%)]" />
      <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute right-[-80px] bottom-0 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <Reveal>
          <div>
            <p className="inline-flex items-center rounded-full border border-blue-100 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-blue-600 shadow-sm backdrop-blur-sm">
              Contacto
            </p>

            <h2 className="shine-line mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.03em] text-slate-900 md:text-5xl">
              Conversemos sobre el servicio que necesitas
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Estamos listos para atender reservas, consultas y coordinaciones
              con una experiencia rápida, clara y profesional.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Atención confiable
                    </p>
                    <p className="text-sm text-slate-500">
                      Respuesta clara y profesional
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600">
                    <Clock3 size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Disponibilidad
                    </p>
                    <p className="text-sm text-slate-500">
                      Coordinación ágil por WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4 rounded-[28px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                    Ubicación
                  </p>
                  <p className="mt-1 text-base leading-7 text-slate-900">
                    {empresa.ubicacion}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[28px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                    Teléfono
                  </p>
                  <p className="mt-1 text-base leading-7 text-slate-900">
                    {empresa.telefono}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[28px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                    Correo
                  </p>
                  <p className="mt-1 text-base leading-7 text-slate-900">
                    {empresa.correo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="
              relative overflow-hidden rounded-[32px]
              border border-slate-200/80 bg-white/92 p-8 text-slate-900
              shadow-[0_30px_80px_rgba(15,23,42,0.12)]
              backdrop-blur-2xl
            "
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.05),transparent_24%)]" />
            <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/70" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                  <MessageCircleMore size={22} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Cotiza tu servicio
                  </h3>
                  <p className="mt-1 text-slate-600">
                    Completa tus datos y te atenderemos por WhatsApp.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                <div>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre completo"
                    className={inputClass("nombre")}
                  />
                  {errors.nombre && (
                    <p className="mt-2 text-sm font-medium text-red-500">
                      {errors.nombre}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    className={inputClass("telefono")}
                  />
                  {errors.telefono && (
                    <p className="mt-2 text-sm font-medium text-red-500">
                      {errors.telefono}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="Correo electrónico (opcional)"
                    className={inputClass("correo")}
                  />
                  {errors.correo && (
                    <p className="mt-2 text-sm font-medium text-red-500">
                      {errors.correo}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    rows="5"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos qué servicio necesitas"
                    className={inputClass("mensaje")}
                  ></textarea>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="
                    group relative mt-2 inline-flex w-full items-center justify-center gap-2
                    overflow-hidden rounded-2xl bg-blue-600 py-4 text-center
                    font-bold text-white
                    shadow-[0_16px_40px_rgba(37,99,235,0.28)]
                    transition-all duration-300
                    hover:scale-[1.01] hover:bg-blue-700
                    hover:shadow-[0_20px_45px_rgba(37,99,235,0.35)]
                  "
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
                  <span className="relative z-10">Cotizar por WhatsApp</span>
                  <ArrowUpRight
                    size={17}
                    className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>

                <p className="text-center text-sm text-slate-500">
                  Atención rápida · Coordinación segura · Respuesta profesional
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact