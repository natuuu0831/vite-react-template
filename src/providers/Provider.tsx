import { FC, ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'

import { ErrorBoundaryProvider } from './ErrorBoundaryProvider'

import { StyledProvider } from './StyledProvider'

type Props = {
  children: ReactNode
}

export const Provider: FC<Props> = ({ children }) => {
  return (
    <HelmetProvider>
      <RecoilRoot>
        <StyledProvider>
          <Router>
            <ErrorBoundaryProvider>{children}</ErrorBoundaryProvider>
          </Router>
        </StyledProvider>
      </RecoilRoot>
    </HelmetProvider>
  )
}
