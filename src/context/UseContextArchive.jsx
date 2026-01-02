import { createContext, useContext, useState } from 'react'

const ColorModeContext = createContext(null)

export function ColorModeProvider({ children }) {
  const [colorMode, setColorMode] = useState('dark') // default, light, dark
  const [whatsAppColor] = useState(false) // ativa cor do WhatsApp // editável no arquivo whatsAppThemes.js

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        setColorMode,
        whatsAppColor,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}

export function useColorMode() {
  const context = useContext(ColorModeContext)
  if (!context) {
    throw new Error('useColorMode must be used within ColorModeProvider')
  }
  return context
}
