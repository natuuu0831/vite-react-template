import { FC, PropsWithChildren, ReactElement } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const ERROR_PAGE_MAP: Record<number, ReactElement> = {
  403: <>403</>,
  404: <>404</>,
  500: <>500</>,
}

const ErrorFallback: FC<FallbackProps> = ({ error }) => {
  const renderErrorPage = () => {
    if (!axios.isAxiosError(error) || !error.response) {
      return <>system error</>
    }

    return ERROR_PAGE_MAP[error.response.status] ?? <>system error</>
  }
  return <div>{renderErrorPage()}</div>
}

export const ErrorBoundaryProvider: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation()
  return (
    <ErrorBoundary
      resetKeys={[location.pathname]}
      FallbackComponent={ErrorFallback}
    >
      {children}
    </ErrorBoundary>
  )
}
