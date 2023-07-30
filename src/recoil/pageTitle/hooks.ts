import { useEffect } from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { pageTitleState } from './atom'

export const usePageTitle = () => {
  const value = useRecoilValue(pageTitleState)
  return value
}

export const useSetPageTitle = (title: string) => {
  const setPageTitle = useSetRecoilState(pageTitleState)

  useEffect(() => {
    setPageTitle(title)
  }, [title, setPageTitle])
}
