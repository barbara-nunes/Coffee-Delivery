import {
  HeaderContainer,
  HeaderIcons,
  HomeBuy,
  HomeImg,
  HomeLocation,
} from './styles'
import { MapPinLine, ShoppingCart } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HomeImg>
        <img src={logoImg} alt="" />
      </HomeImg>

      <HeaderIcons>
        <HomeLocation>
          <MapPinLine size={32} /> <p>São Paulo, SP</p>
        </HomeLocation>

        <HomeBuy>
          <ShoppingCart size={32} />
        </HomeBuy>
      </HeaderIcons>
    </HeaderContainer>
  )
}
