import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { usePageTitle } from '@/recoil/pageTitle/hooks'

export const Head: FC = () => {
  const pageTitle = usePageTitle()
  return (
    <Helmet
      title={pageTitle ? `${pageTitle} | MySeries 管理` : undefined}
      defaultTitle="MySeries 管理"
    />
  )
}
