import { useColorMode } from '../../context/UseContextArchive'
import { whatsAppThemes } from '../../ultis/whatsAppThemes'

export default function ButtonReflexo({
  link,
  icon,
  label,
  reflexAnimation = true,
  padding,
  className,
  bgClass,
}) {
  const { colorMode, whatsAppColor } = useColorMode()

  const themes = {
    light: 'bg-primaryDark text-corTitulosBranca border border-primaryDark/20',
    dark: 'bg-primaryDark text-corTitulosPreto',
    default: 'bg-secondary text-corTitulosPreto border border-primaryDark/20',
  }

  const shineThemes = {
    light: 'bg-white/40',
    dark: 'bg-white/40',
    default: 'bg-black/40',
  }

  const colors = whatsAppColor
    ? whatsAppThemes[colorMode]
    : bgClass ?? themes[colorMode]

  const shineColor = shineThemes[colorMode]
  const spacing = padding || 'px-6 py-3'

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className={`${className}
       relative
          overflow-hidden
          inline-flex
          items-center
          justify-center
          ${colors} 
          ${spacing}
          font-normal font-secondFont rounded-full text-lg 
          transition-all hover:scale-105 shadow-lg shadow-primary/20 gap-3 text-paragraph4
          min-w-[10px] 
          text-center
      `}
    >
      {reflexAnimation && (
        <span
          className={`absolute inset-0 ${shineColor} animate-shine-loop mix-blend-overlay`}
        />
      )}

      <span className="relative z-10 flex items-center gap-3">
        {icon}
        {label}
      </span>
    </a>
  )
}
