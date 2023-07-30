import { Default } from '@/features/default/routers/Default'
import { Outlet, RouteObject } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export const commonRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {index: true,
      element: <Default />}
    ],
  },
]
