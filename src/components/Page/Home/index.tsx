import Icon2 from '../../../assets/IconBox.png'
import Icon1 from '../../../assets/IconBuy.png'
import Icon4 from '../../../assets/IconCoffee.png'
import Icon3 from '../../../assets/IconTimer.png'

import Coffee from '../../../assets/Coffee.png'
import CoffeeAmericano from '../../../assets/CoffeeAmericano.png'
import CoffeeCremoso from '../../../assets/CoffeeCremoso.png'
import CoffeeGelado from '../../../assets/CoffeeGelado.png'
import CoffeeLeite from '../../../assets/CoffeeLeite.png'
import CoffeeLatte from '../../../assets/CoffeeLatte.png'
import CoffeeCapuccino from '../../../assets/CoffeeCapuccino.png'
import CoffeeMacchiato from '../../../assets/CoffeeMacchiato.png'
import CoffeeMocaccino from '../../../assets/CoffeeMocaccino.png'
import ChocolateQuente from '../../../assets/ChocolateQuente.png'
import CoffeeCubano from '../../../assets/CoffeeCubano.png'
import CoffeeHavaiano from '../../../assets/CoffeeHavaiano.png'
import CoffeeArabe from '../../../assets/CoffeeArabe.png'
import CoffeeIrlandes from '../../../assets/CoffeeIrlandes.png'


import logoImg from '../../../assets/logo.svg'
import image from '../../../assets/imageCoffee.svg'
import { HomeText, HomeImg, Image, MenuContainer, HomeIcons, HomeBuy, HeaderContainer, HomeContainer, Menu, HomeInfos, Icon, MenuContainerCoffee, CoffeeName, CoffeeDescription, CoffeeType, ImgMenu, HomeLocation, HeaderIcons, CoffeePrice, CoffeeBuy, CoffeeValueBuy, AmountCoffee } from './styles'
import { MapPinLine, ShoppingCart, ShoppingCartSimple } from 'phosphor-react'
import { priceFormatter } from '../../utils/index'

export function Home(){
    return (
        <>
        <HeaderContainer>
            <HomeImg>
                <img src={logoImg} alt="" />
            </HomeImg >

            <HeaderIcons>
            <HomeLocation>
                <MapPinLine size={32} /> <p>São Paulo, SP</p>
            </HomeLocation>

            <HomeBuy>
                <ShoppingCart size={32} />
            </HomeBuy>
            </HeaderIcons>
            
        </HeaderContainer>
           
        <HomeContainer>
            <HomeInfos>
            <HomeText>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </HomeText>

            <HomeIcons>
                <Icon><img src={Icon1} alt=""/><p>Compra simples e segura</p></Icon> 
                <Icon><img src={Icon2} alt="" /><p>Embalagem mantém o café intacto</p></Icon>
                <Icon><img src={Icon3} alt="" /><p>Entrega rápida e rastreada</p></Icon>
                <Icon><img src={Icon4} alt="" /><p>O café chega fresquinho até você</p></Icon>
            </HomeIcons>

            </HomeInfos>
            <Image>
                <img src={image} alt="" />
            </Image>
        </HomeContainer>

        <MenuContainer>

            <Menu> Nossos cafés </Menu>

             <MenuContainerCoffee>
            <div>
                <ImgMenu><img src={Coffee} alt="" /></ImgMenu>
                <CoffeeType> Tradicional </CoffeeType>
                <CoffeeName> Expresso Tradicional </CoffeeName>
                <CoffeeDescription> O tradicional café feito com água quente e grãos moídos </CoffeeDescription>
                
                    <CoffeeValueBuy>
                <CoffeePrice>
                    {priceFormatter.format(9.90)}
                </CoffeePrice>
                <AmountCoffee>
                    <div>- 1 +</div>
                </AmountCoffee>
                <CoffeeBuy>
                     <ShoppingCartSimple size={20} />
                </CoffeeBuy>
                    </CoffeeValueBuy>        
            </div>

            <div>
                <ImgMenu><img src={CoffeeAmericano} alt="" /></ImgMenu>
                <CoffeeType> Tradicional </CoffeeType>
                <CoffeeName> Expresso Americano </CoffeeName>
                <CoffeeDescription> Expresso diluído, menos intenso que o tradicional </CoffeeDescription>
                
                    <CoffeeValueBuy>
                <CoffeePrice>
                    {priceFormatter.format(9.90)}
                </CoffeePrice>
                <AmountCoffee>
                    <div>- 1 +</div>
                </AmountCoffee>
                <CoffeeBuy>
                     <ShoppingCartSimple size={20} />
                </CoffeeBuy>
                    </CoffeeValueBuy>
            </div>

            <div>
                <ImgMenu><img src={CoffeeCremoso} alt="" /></ImgMenu>
                <CoffeeType> Tradicional </CoffeeType>
                <CoffeeName> Expresso Cremoso </CoffeeName>
                <CoffeeDescription> Café expresso tradicional com espuma cremosa </CoffeeDescription>
        
                    <CoffeeValueBuy>
                <CoffeePrice>
                    {priceFormatter.format(9.90)}
                </CoffeePrice>
                <AmountCoffee>
                    <div>- 1 +</div>
                </AmountCoffee>
                <CoffeeBuy>
                     <ShoppingCartSimple size={20} />
                </CoffeeBuy>
                    </CoffeeValueBuy>
            </div>

            <div>
                <ImgMenu><img src={CoffeeGelado} alt="" /></ImgMenu>
                <CoffeeType> Tradicional Gelado</CoffeeType>
                <CoffeeName> Expresso Gelado </CoffeeName>
                <CoffeeDescription> Bebida preparada com café expresso e cubos de gelo </CoffeeDescription>
                
                    <CoffeeValueBuy>
                <CoffeePrice>
                    {priceFormatter.format(9.90)}
                </CoffeePrice>
                <AmountCoffee>
                    <div>- 1 +</div>
                </AmountCoffee>
                <CoffeeBuy>
                     <ShoppingCartSimple size={20} />
                </CoffeeBuy>
                    </CoffeeValueBuy>               
            </div>

            <div>
                <ImgMenu><img src={CoffeeLeite} alt="" /></ImgMenu>
                <CoffeeType> Tradicional Com leite </CoffeeType>
                <CoffeeName> Café com Leite </CoffeeName>
                <CoffeeDescription> Meio a meio de expresso tradicional com leite vaporizado </CoffeeDescription>
            
                    <CoffeeValueBuy>
                <CoffeePrice>
                    {priceFormatter.format(9.90)}
                </CoffeePrice>
                <AmountCoffee>
                    <div>- 1 +</div>
                </AmountCoffee>
                <CoffeeBuy>
                     <ShoppingCartSimple size={20} />
                </CoffeeBuy>
                    </CoffeeValueBuy>                
            </div>

            <div>
                <ImgMenu><img src={CoffeeLatte} alt="" /></ImgMenu>
                <CoffeeType> Tradicional Com leite </CoffeeType>
                <CoffeeName> Latte </CoffeeName>
                <CoffeeDescription> Uma dose de café expresso com o dobro de leite e espuma cremosa </CoffeeDescription>
            
                    <CoffeeValueBuy>
                <CoffeePrice>
                    {priceFormatter.format(9.90)}
                </CoffeePrice>
                <AmountCoffee>
                    <div>- 1 +</div>
                </AmountCoffee>
                <CoffeeBuy>
                     <ShoppingCartSimple size={20} />
                </CoffeeBuy>
                    </CoffeeValueBuy>
            </div>

            <div>
                <ImgMenu><img src={CoffeeCapuccino} alt="" /></ImgMenu>
                <CoffeeType> Tradicional Com leite </CoffeeType>
                <CoffeeName> Capuccino </CoffeeName>
                <CoffeeDescription> Bebida com canela feita de doses iguais de café, leite e espuma </CoffeeDescription>
            
                    <CoffeeValueBuy>
                <CoffeePrice>
                    {priceFormatter.format(9.90)}
                </CoffeePrice>
                <AmountCoffee>
                    <div>- 1 +</div>
                </AmountCoffee>
                <CoffeeBuy>
                     <ShoppingCartSimple size={20} />
                </CoffeeBuy>
                    </CoffeeValueBuy>                
            </div>

            <div>
                <ImgMenu><img src={CoffeeMacchiato} alt="" /></ImgMenu>
                <CoffeeType> Tradicional Com leite </CoffeeType>
                <CoffeeName> Macchiato </CoffeeName>
                <CoffeeDescription> Café expresso misturado com um pouco de leite quente e espuma </CoffeeDescription>
            
                    <CoffeeValueBuy>
                <CoffeePrice>
                    {priceFormatter.format(9.90)}
                </CoffeePrice>
                <AmountCoffee>
                    <div>- 1 +</div>
                </AmountCoffee>
                <CoffeeBuy>
                     <ShoppingCartSimple size={20} />
                </CoffeeBuy>
                    </CoffeeValueBuy>
            </div>

            <div>
                <ImgMenu><img src={CoffeeMocaccino} alt="" /></ImgMenu>
                <CoffeeType> Tradicional Com leite </CoffeeType>
                <CoffeeName> Mocaccino </CoffeeName>
                <CoffeeDescription> Café expresso com calda de chocolate, pouco leite e espuma </CoffeeDescription>
            
                    <CoffeeValueBuy>
                <CoffeePrice>
                    {priceFormatter.format(9.90)}
                </CoffeePrice>
                <AmountCoffee>
                    <div>- 1 +</div>
                </AmountCoffee>
                <CoffeeBuy>
                     <ShoppingCartSimple size={20} />
                </CoffeeBuy>
                    </CoffeeValueBuy>
            </div>

            <div>
                <ImgMenu><img src={ChocolateQuente} alt="" /></ImgMenu>
                <CoffeeType> Especial Com leite </CoffeeType>
                <CoffeeName> Chocolate Quente </CoffeeName>
                <CoffeeDescription> Bebida feita com chocolate dissolvido no leite quente e café </CoffeeDescription>
            
                    <CoffeeValueBuy>
                <CoffeePrice>
                    {priceFormatter.format(9.90)}
                </CoffeePrice>
                <AmountCoffee>
                    <div>- 1 +</div>
                </AmountCoffee>
                <CoffeeBuy>
                     <ShoppingCartSimple size={20} />
                </CoffeeBuy>
                    </CoffeeValueBuy>
            </div>

            <div>
                <ImgMenu><img src={CoffeeCubano} alt="" /></ImgMenu>
                <CoffeeType> Especial Alcoólico Gelado </CoffeeType>
                <CoffeeName> Cubano </CoffeeName>
                <CoffeeDescription> Drink gelado de café expresso com rum, creme de leite e hortelã </CoffeeDescription>
            
                    <CoffeeValueBuy>
                <CoffeePrice>
                    {priceFormatter.format(9.90)}
                </CoffeePrice>
                <AmountCoffee>
                    <div>- 1 +</div>
                </AmountCoffee>
                <CoffeeBuy>
                     <ShoppingCartSimple size={20} />
                </CoffeeBuy>
                    </CoffeeValueBuy>
            </div>

            <div>
                <ImgMenu><img src={CoffeeHavaiano} alt="" /></ImgMenu>
                <CoffeeType> Especial </CoffeeType>
                <CoffeeName> Havaiano </CoffeeName>
                <CoffeeDescription> Bebida adocicada preparada com café e leite de coco </CoffeeDescription>
            
                    <CoffeeValueBuy>
                <CoffeePrice>
                    {priceFormatter.format(9.90)}
                </CoffeePrice>
                <AmountCoffee>
                    <div>- 1 +</div>
                </AmountCoffee>
                <CoffeeBuy>
                     <ShoppingCartSimple size={20} />
                </CoffeeBuy>
                    </CoffeeValueBuy>
            </div>

            <div>
                <ImgMenu><img src={CoffeeArabe} alt="" /></ImgMenu>
                <CoffeeType> Especial </CoffeeType>
                <CoffeeName> Árabe </CoffeeName>
                <CoffeeDescription> Bebida preparada com grãos de café árabe e especiarias </CoffeeDescription>
            
                    <CoffeeValueBuy>
                <CoffeePrice>
                    {priceFormatter.format(9.90)}
                </CoffeePrice>
                <AmountCoffee>
                    <div>- 1 +</div>
                </AmountCoffee>
                <CoffeeBuy>
                     <ShoppingCartSimple size={20} />
                </CoffeeBuy>
                    </CoffeeValueBuy>
            </div>

            <div>
                <ImgMenu><img src={CoffeeIrlandes} alt="" /></ImgMenu>
                <CoffeeType> Especial Alcoólico </CoffeeType>
                <CoffeeName> Irlandês </CoffeeName>
                <CoffeeDescription> Bebida a base de café, uísque irlandês, açúcar e chantilly </CoffeeDescription>
            
                    <CoffeeValueBuy>
                <CoffeePrice>
                    {priceFormatter.format(9.90)}
                </CoffeePrice>
                <AmountCoffee>
                    <div>- 1 +</div>
                </AmountCoffee>
                <CoffeeBuy>
                     <ShoppingCartSimple size={20} />
                </CoffeeBuy>
                    </CoffeeValueBuy>
            </div>
            </MenuContainerCoffee>

        </MenuContainer>
        
        </>

    )
}