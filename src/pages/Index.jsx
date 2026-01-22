import { lazy, Suspense } from 'react'

// CRÍTICO — carregamento imediato (LCP)
import NavbarNovaTemplate from '../components/sections/NavbarNovaTemplate'
import HeroTemplateNovo from '../components/sections/HeroTemplateNovo'
import StepsNovoTemplate from '../components/sections/StepsNovoTemplate'
import FaqNovoTemplate from '../components/sections/FaqNovoTemplate'

// Lazy — abaixo da dobra
const FeaturesNovaTemplate = lazy(
  () => import('../components/sections/FeaturesNovaTemplate'),
)
const FeaturesSemImage = lazy(
  () => import('../components/sections/FeaturesSemImage'),
)
const CtaNovoTemplate = lazy(
  () => import('../components/sections/CtaNovoTemplate'),
)
const AboutNovoTemplate = lazy(
  () => import('../components/sections/AboutNovoTemplate'),
)
const FooterNovoTemplate = lazy(
  () => import('../components/sections/FooterNovoTemplate'),
)
const WhatsappAnimated = lazy(
  () => import('../components/interactives/WhatsAppAnimated'),
)
import { useContext } from 'react'
import { ColorModeProvider } from '../context/UseContextArchive'
import { useColorMode } from '../context/UseContextArchive'
import EmergencyTemplate from '../components/sections/EmergencyTemplate'
import { AuthorityTemplate } from '../components/sections/AuthorityTemplate'

export default function Index() {
  const { colorMode, setColorMode } = useColorMode()

  return (
    <>
      <ColorModeProvider>
        {/* Render imediato */}
        <NavbarNovaTemplate colorMode={colorMode} />

        <main>
          {/* LCP — NÃO usar lazy */}
          <HeroTemplateNovo colorMode={colorMode} />
          {/* Lazy sections */}
          <Suspense fallback={null}>
            <EmergencyTemplate colorMode="light" />
            {/* <FeaturesNovaTemplate colorMode={colorMode} /> */}
            <FeaturesSemImage colorMode={colorMode} />
            <AuthorityTemplate colorMode={colorMode} />
            <AboutNovoTemplate colorMode={colorMode} />
            <CtaNovoTemplate colorMode={colorMode} />
            <StepsNovoTemplate colorMode={colorMode} />
            <FaqNovoTemplate colorMode={colorMode} />
            <FooterNovoTemplate colorMode={colorMode} mapa={false} />
            <WhatsappAnimated colorMode={colorMode} />
          </Suspense>
        </main>
      </ColorModeProvider>
    </>
  )
}
