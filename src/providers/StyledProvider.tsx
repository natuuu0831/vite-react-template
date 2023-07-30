import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/lib/globalStyle'
import { styledTheme } from '@/lib/theme'

type Props = {
  children: ReactNode
}

export const StyledProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
