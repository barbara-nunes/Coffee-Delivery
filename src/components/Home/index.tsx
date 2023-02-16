import Icon2 from '../../assets/IconBox.png'
import Icon1 from '../../assets/IconBuy.png'
import Icon4 from '../../assets/IconCoffee.png'
import Icon3 from '../../assets/IconTimer.png'

import logoImg from '../../assets/logo.svg'
import image from '../../assets/imageCoffee.svg'
import { HomeText, HomeImg, Image, MenuContainer, HomeIcons, HomeBuy, HeaderContainer, HomeContainer, Menu, HomeInfos } from './styles'
import { ShoppingCart } from 'phosphor-react'

export function Home(){
    return (
        <>
        <HeaderContainer>
        <HomeImg>
                <img src={logoImg} alt="" />
            </HomeImg >
            <HomeBuy>
                <ShoppingCart size={32} />
            </HomeBuy>
        </HeaderContainer>
           
        <HomeContainer>
            <HomeInfos>
            <HomeText>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
            </HomeText>

            <HomeIcons>
                <div><img src={Icon1} alt="" /> <p>Compra simples e segura</p></div>
                <><img src={Icon2} alt="" /> <p>Embalagem mantém o café intacto</p></>
                <><img src={Icon3} alt="" /> <p>Entrega rápida e rastreada</p></>
                <><img src={Icon4} alt="" /> <p>O café chega fresquinho até você</p></>
            </HomeIcons>
            </HomeInfos>
            <Image>
                <img src={image} alt="" />
            </Image>
        </HomeContainer>
            
        <MenuContainer>
            <Menu>
            <h3>Nossos cafés</h3>
             </Menu>
        </MenuContainer>
        
        </>

    )
}