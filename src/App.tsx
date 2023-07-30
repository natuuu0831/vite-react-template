import { Provider } from './providers/Provider'
import { Head } from './components/elements/Head'
import { AppRoutes } from './routes'
import { Suspense } from 'react'

function App() {
  return (
    <Provider>
      <Head />
      <Suspense>
        <AppRoutes />
      </Suspense>
    </Provider>
  )
}

export default App
