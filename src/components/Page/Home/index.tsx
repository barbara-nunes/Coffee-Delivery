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
import ChocolateQuente from '../../../assets/ChocolateQuente.png'
import CoffeeMocaccino from '../../../assets/CoffeeMocaccino.png'
import CoffeeCubano from '../../../assets/CoffeeCubano.png'
import CoffeeHavaiano from '../../../assets/CoffeeHavaiano.png'
import CoffeeArabe from '../../../assets/CoffeeArabe.png'
import CoffeeIrlandes from '../../../assets/CoffeeIrlandes.png'

import image from '../../../assets/imageCoffee.svg'
import {
  HomeText,
  ImageCoffee,
  MenuContainer,
  HomeIcons,
  HomeContainer,
  Menu,
  HomeInfos,
  Icon,
  MenuContainerCoffee,
  CoffeeName,
  CoffeeDescription,
  CoffeeType,
  CoffeePrice,
  CoffeeBuy,
  CoffeeValueBuy,
  AmountCoffee,
  ImgMenu,
} from './styles'
import { ShoppingCartSimple } from 'phosphor-react'
import { priceFormatter } from '../../utils/index'
import { Header } from '../../Header'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

export function Home() {
  const [goToCheckout, setGoToCheckout] = useState(false)
  function buyCoffee() {
    setGoToCheckout(true)
  }

  const coffeesData = [
    {
      name: 'Expresso Tradicional',
      image: Coffee,
      description: 'O tradicional café feito com água quente e grãos moídos',
      type: ['Tradicional'],
      quantity: 0,
    },
    {
      name: 'Expresso Americano',
      image: CoffeeAmericano,
      description: 'Expresso diluído, menos intenso que o tradicional',
      type: ['Tradicional'],
      quantity: 0,
    },
    {
      name: 'Expresso Cremoso',
      image: CoffeeCremoso,
      description: 'Café expresso tradicional com espuma cremosa',
      type: ['Tradicional'],
      quantity: 0,
    },
    {
      name: 'Expresso Gelado',
      image: CoffeeGelado,
      description: 'Bebida preparada com café expresso e cubos de gelo',
      type: ['Tradicional', 'Gelado'],
      quantity: 0,
    },
    {
      name: 'Cafe com Leite',
      image: CoffeeLeite,
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      type: ['Tradicional', 'Com leite'],
      quantity: 0,
    },
    {
      name: 'Latte',
      image: CoffeeLatte,
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      type: ['Tradicional', 'Com leite'],
      quantity: 0,
    },
    {
      name: 'Capuccino',
      image: CoffeeCapuccino,
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      type: ['Tradicional', 'Com leite'],
      quantity: 0,
    },
    {
      name: 'Macchiato',
      image: CoffeeMacchiato,
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      type: ['Tradicional', 'Com leite'],
      quantity: 0,
    },
    {
      name: 'Mocaccino',
      image: CoffeeMocaccino,
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      type: ['Tradicional', 'Com leite'],
      quantity: 0,
    },
    {
      name: 'Chocolate Quente',
      image: ChocolateQuente,
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      type: ['Especial', 'Com leite'],
      quantity: 0,
    },
    {
      name: 'Cubano',
      image: CoffeeCubano,
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      type: ['Especial', 'Alcoólico', 'Gelado'],
      quantity: 0,
    },
    {
      name: 'Havaiano',
      image: CoffeeHavaiano,
      description: 'Bebida adocicada preparada com café e leite de coco',
      type: ['Especial'],
      quantity: 0,
    },
    {
      name: 'Árabe',
      image: CoffeeArabe,
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      type: ['Especial'],
      quantity: 0,
    },
    {
      name: 'Irlandês',
      image: CoffeeIrlandes,
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      type: ['Especial', 'Alcoólico'],
      quantity: 0,
    },
  ]

  const [coffees, setCoffees] = useState(coffeesData)

  function getShoppingCart() {
    return (
      <CoffeeBuy>
        <ShoppingCartSimple size={20} onClick={() => buyCoffee()} weight="fill">
          {goToCheckout && (
            <Navigate
              to="/Checkout"
              replace={true}
              state={coffees.filter((coffee) => coffee.quantity > 0)}
            />
          )}
        </ShoppingCartSimple>
      </CoffeeBuy>
    )
  }

  function addCoffee(name: string) {
    const coffeeIndex = coffees.findIndex((coffee) => name === coffee.name)

    const selectedCoffee = coffees[coffeeIndex]
    selectedCoffee.quantity = selectedCoffee.quantity + 1

    setCoffees([...coffees])
  }

  function removeCoffee(name: string) {
    const coffeeIndex = coffees.findIndex((coffee) => name === coffee.name)

    const selectedCoffee = coffees[coffeeIndex]
    const quantityEqualsZero = selectedCoffee.quantity === 0

    selectedCoffee.quantity = quantityEqualsZero
      ? selectedCoffee.quantity
      : selectedCoffee.quantity - 1

    setCoffees([...coffees])
  }

  return (
    <>
      <Header />

      <HomeContainer>
        <HomeInfos>
          <HomeText>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </HomeText>

          <HomeIcons>
            <Icon>
              <img src={Icon1} alt="" />
              <p>Compra simples e segura</p>
            </Icon>
            <Icon>
              <img src={Icon2} alt="" />
              <p>Embalagem mantém o café intacto</p>
            </Icon>
            <Icon>
              <img src={Icon3} alt="" />
              <p>Entrega rápida e rastreada</p>
            </Icon>
            <Icon>
              <img src={Icon4} alt="" />
              <p>O café chega fresquinho até você</p>
            </Icon>
          </HomeIcons>
        </HomeInfos>
        <ImageCoffee>
          <img src={image} alt="" />
        </ImageCoffee>
      </HomeContainer>

      <MenuContainer>
        <Menu> Nossos cafés </Menu>

        <MenuContainerCoffee>
          {coffees.map((coffee) => {
            return (
              <div key={coffee.name}>
                <ImgMenu>
                  <img src={coffee.image} alt="" />
                </ImgMenu>
                <CoffeeType>{coffee.type}</CoffeeType>
                <CoffeeName>{coffee.name}</CoffeeName>
                <CoffeeDescription>{coffee.description}</CoffeeDescription>

                <CoffeeValueBuy>
                  <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
                  <AmountCoffee>
                    <button onClick={() => removeCoffee(coffee.name)}>
                      {' '}
                      -{' '}
                    </button>
                    <div>{coffee.quantity}</div>
                    <button onClick={() => addCoffee(coffee.name)}> + </button>
                  </AmountCoffee>
                  {getShoppingCart()}
                </CoffeeValueBuy>
              </div>
            )
          })}
        </MenuContainerCoffee>
      </MenuContainer>
    </>
  )
}
