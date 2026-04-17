import { empresa } from "../data/empresa"

function Footer() {
  return (
    <footer className="relative bg-[#020817] text-white">
      
      {/* línea glow superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        
        {/* marca */}
        <div>
          <p className="text-lg font-black tracking-tight">
            {empresa.nombre}
          </p>
          <p className="mt-1 text-sm text-slate-400 max-w-md">
            Imagen profesional, atención confiable y presencia digital moderna.
          </p>
        </div>

        {/* lado derecho */}
        <div className="flex flex-col items-start gap-2 md:items-end">
          <p className="text-sm text-slate-500">
            © 2026 {empresa.nombre}. Todos los derechos reservados.
          </p>

          <p className="text-xs text-slate-600">
            Diseño premium · Atención confiable · Experiencia profesional
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer