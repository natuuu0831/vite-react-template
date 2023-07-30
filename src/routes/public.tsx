import { Outlet, RouteObject } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [],
  },
]
