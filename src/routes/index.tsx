import { FC } from 'react'
import { useRoutes } from 'react-router-dom'
import { protectedRoutes } from './protected'
import { publicRoutes } from './public'
import { commonRoutes } from './common'

export const AppRoutes: FC = () => {
  const user = true

  const routes = user ? protectedRoutes : publicRoutes

  const element = useRoutes([...routes, ...commonRoutes])

  return <>{element}</>
}
