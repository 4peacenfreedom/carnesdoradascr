import { Clock, CheckCircle2 } from 'lucide-react'

const scheduleData = [
  { day: 'Lunes a Viernes', hours: '7:00AM - 5:00PM', isOpen: true },
  { day: 'Sábado', hours: 'Cerrado', isOpen: false },
  { day: 'Domingo', hours: 'Cerrado', isOpen: false },
]

export default function BusinessHours() {
  return (
    <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 mb-2">
            <Clock className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-heading font-bold uppercase">
            Horario de Atención
          </h4>
          <p className="text-white/90">
            Estamos disponibles de lunes a viernes para atender sus pedidos y
            consultas.
          </p>
        </div>

        {/* Schedule Table */}
        <div className="space-y-3 pt-4">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <div className="flex items-center gap-3">
                {item.isOpen ? (
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-white/50 flex-shrink-0" />
                )}
                <span className="font-semibold">{item.day}</span>
              </div>

              {/* Dotted line */}
              <div className="flex-1 mx-4 border-b-2 border-dotted border-white/30" />

              {/* Hours */}
              <span
                className={`font-semibold ${
                  item.isOpen ? 'text-white' : 'text-white/70'
                }`}
              >
                {item.hours}
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="pt-4 border-t border-white/20">
          <p className="text-sm text-white/80">
            Para emergencias o pedidos urgentes, contáctenos por WhatsApp.
          </p>
        </div>
      </div>
    </div>
  )
}
