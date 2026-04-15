import { useState } from "react"
import { empresa } from "../data/empresa"
import Reveal from "./Reveal"

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleWhatsAppSubmit = () => {
    const texto = `Hola, quiero información sobre su servicio ejecutivo.

Nombre: ${formData.nombre || "-"}
Teléfono: ${formData.telefono || "-"}
Correo: ${formData.correo || "-"}
Consulta: ${formData.mensaje || "-"}`

    const urlWhatsApp = `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(texto)}`
    window.open(urlWhatsApp, "_blank")
  }

  return (
    <section id="contacto" className="bg-slate-950 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Contacto
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Conversemos sobre el servicio que necesitas
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Estamos listos para atender reservas, consultas y coordinaciones con una
              experiencia rápida, clara y profesional.
            </p>

            <div className="mt-10 space-y-4 text-slate-200">
              <p>
                <span className="font-semibold text-white">Ubicación:</span>{" "}
                {empresa.ubicacion}
              </p>
              <p>
                <span className="font-semibold text-white">Teléfono:</span>{" "}
                {empresa.telefono}
              </p>
              <p>
                <span className="font-semibold text-white">Correo:</span>{" "}
                {empresa.correo}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-black">Solicita información</h3>
            <p className="mt-2 text-slate-600">
              Déjanos tus datos y te atenderemos por WhatsApp.
            </p>

            <div className="mt-8 space-y-4">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre completo"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
              />

              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
              />

              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="Correo electrónico"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
              />

              <textarea
                rows="5"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Cuéntanos qué servicio necesitas"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
              ></textarea>

              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="block w-full rounded-2xl bg-blue-600 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Enviar consulta
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact