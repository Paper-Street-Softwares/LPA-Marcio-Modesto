import React from 'react'
import { AlertTriangle, PhoneCall } from 'lucide-react'
import ButtonReflexo from '../interactives/ButtonReflexo'
import content from '../../content/content'

function EmergencyTemplate() {
  return (
    <div>
      <section className="relative py-8 bg-red-700/30 border-y border-red-900/30 overflow-hidden">
        {/* Background Pulse Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,58,38,0.1)_0%,transparent_70%)] animate-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div className="flex items-start gap-4 flex-1">
              <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500 border border-red-500/20 animate-pulse">
                <AlertTriangle className="h-6 w-6" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="h-5 w-5 text-red-900 sm:hidden" />
                  <span className="text-red-700 font-bold tracking-wider text-sm uppercase">
                    Plantão Criminal 24 Horas
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                  Atendimento Imediato em Casos Criminais
                </h3>
                <p className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed">
                  Se você ou um familiar foi preso ou está sendo investigado, o
                  atendimento deve ser imediato. Cada minuto é decisivo para
                  garantir direitos, evitar abusos e preparar a defesa adequada.
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto flex-shrink-0">
              <ButtonReflexo
                icon={<PhoneCall className="mr-2 h-5 w-5" />}
                label="Falar com Advogado Agora"
                link={content.texts.links.ctaWhatsapp}
                size="lg"
                className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold border-2 border-red-500/50 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all animate-bounce-subtle cursor-pointer"
              ></ButtonReflexo>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EmergencyTemplate
