import {
  HeaderContainer,
  HeaderIcons,
  HomeBuy,
  HomeImg,
  HomeLocation,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HomeImg>
        <img src={logoImg} alt="" />
      </HomeImg>

      <HeaderIcons>
        <HomeLocation>
          <MapPin size={28} weight="fill" />
          São Paulo, SP
        </HomeLocation>

        <HomeBuy>
          <ShoppingCart size={28} weight="fill" />
        </HomeBuy>
      </HeaderIcons>
    </HeaderContainer>
  )
}
