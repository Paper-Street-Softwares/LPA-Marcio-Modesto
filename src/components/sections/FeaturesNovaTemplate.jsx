import React from 'react'
import { motion } from 'framer-motion'
import content from '../../content/content'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'

const features = Object.values(content.texts.features.cards)

function FeaturesNovaTemplate({ colorMode }) {
  // Definindo classes dinamicamente conforme o colorMode
  let backgroundMode,
    text,
    textOpacity,
    cardBg,
    iconBg,
    hoverCardBg,
    image,
    bgObservation,
    textDestaque,
    textObservation,
    hoverTextCard

  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      textDestaque = 'text-primaryDark'
      cardBg = 'bg-quartenary'
      iconBg = 'bg-white text-primaryDark'
      image = ' border-[8px] border-white'
      hoverCardBg = 'hover:bg-primaryDark hover:text-white'
      hoverTextCard = ' group-hover:text-white'
      bgObservation = 'bg-primaryDark'
      textObservation = 'text-white'
      break
    case 'dark':
      backgroundMode = 'bg-darkOpacity'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryLight'
      cardBg = 'bg-dark'
      iconBg = 'bg-darkOpacity text-primaryLight'
      image = ' border-[8px] border-borderImage'
      hoverCardBg = 'hover:bg-primaryLight hover:text-black'
      hoverTextCard = ' group-hover:text-black'
      bgObservation = 'bg-primaryLight'
      textObservation = 'text-black'

      break
    default:
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryDark'
      cardBg = 'bg-quartenary'
      iconBg = 'bg-white text-primaryDark'
      image = ' border-[8px] border-white'
      hoverCardBg = 'hover:bg-primaryDark hover:text-white'
      hoverTextCard = ' group-hover:text-white'
      bgObservation = 'bg-primaryDark'
      textObservation = 'text-white'
  }

  return (
    <SectionArea id="feature" className={`${backgroundMode}`}>
      <SectionWrapper>
        <section className="relative font-mainFont">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Imagem com destaque */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative order-2 lg:order-1"
              >
                <div
                  className={`relative overflow-hidden rounded-3xl shadow-2xl aspect-[3/3] ${image}`}
                >
                  <img
                    src={content.texts.features.imgFeatures}
                    alt={content.texts.features.alt}
                    className="w-full h-full object-cover scale-105 hover:scale-100 rounded-2xl transition-transform duration-700"
                    width={798}
                    height={798}
                  />
                </div>
                <div
                  className={`absolute -bottom-6 -left-6 ${bgObservation} ${textObservation} p-8 rounded-tr-3xl rounded-bl-3xl shadow-xl max-w-xs`}
                >
                  <p className="font-mainFont text-2xl font-bold mb-2">
                    {content.texts.features.titleMessageFeature}
                  </p>
                  <p className="text-sm font-secondFont font-light">
                    {content.texts.features.subtitleMessageFeature}
                  </p>
                </div>
              </motion.div>

              {/* Conteúdo das features */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="order-1 lg:order-2 space-y-8"
              >
                <div>
                  <span
                    className={`${textDestaque} font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block`}
                  >
                    {content.texts.features.miniTag}
                  </span>
                  <h2
                    className={`text-3xl md:text-4xl font-mainFont font-medium mb-4 flex flex-wrap gap-2 ${text}`}
                  >
                    {content.texts.features.FirstPartTitle}
                    <span className={`${textDestaque}`}>
                      {content.texts.features.DestaquePartTitle}
                    </span>
                    {content.texts.features.SecondPartTitle}
                  </h2>
                  <p className={`font-secondFont font-light ${textOpacity}`}>
                    {content.texts.features.subtitle}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className={`group p-6 rounded-xl ${cardBg} ${hoverCardBg} transition-all duration-700`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full ${iconBg} mb-4 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}
                      >
                        {feature.icon}
                      </div>
                      <h3
                        className={`font-mainFont font-bold text-lg mb-2 ${text} ${hoverTextCard} transition-all`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`text-sm font-secondFont font-light ${textOpacity} ${hoverTextCard} opacity-80 transition-all`}
                      >
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default FeaturesNovaTemplate
