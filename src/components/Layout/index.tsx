import { ReactChildrenProps } from '@/utils/globalTypes'

import { Header } from './Header'
import { SideBar } from './SideBar'

import * as S from './styles'

export const Layout = ({ children }: ReactChildrenProps) => {
  return (
    <S.Container>
      <Header />
      <SideBar />

      <S.Content>{children}</S.Content>
    </S.Container>
  )
}
