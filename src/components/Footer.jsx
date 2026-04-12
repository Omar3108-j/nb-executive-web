import { empresa } from "../data/empresa"

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black text-slate-900">{empresa.nombre}</p>
          <p className="text-sm text-slate-500">
            Imagen profesional, atención confiable y presencia digital moderna.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 {empresa.nombre}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer