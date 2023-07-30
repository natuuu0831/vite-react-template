import { Outlet, RouteObject } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [],
  },
]
