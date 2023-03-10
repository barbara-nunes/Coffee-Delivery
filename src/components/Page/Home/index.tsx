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
  ImgMenu,
  CoffeePrice,
  CoffeeBuy,
  CoffeeValueBuy,
  AmountCoffee,
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
  const [expressoTradicional, setExpressoTradicional] = useState({
    name: 'Expresso Tradicional',
    quantity: 0,
  })

  const [expressoAmericano, setExpressoAmericano] = useState({
    name: 'Expresso Americano',
    quantity: 0,
  })

  const [expressoCremoso, setExpressoCremoso] = useState({
    name: 'Expresso Cremoso',
    quantity: 0,
  })

  const [expressoGelado, setExpressoGelado] = useState({
    name: 'Expresso Gelado',
    quantity: 0,
  })

  const [cafeComLeite, setCafeComLeite] = useState({
    name: 'Cafe com Leite',
    quantity: 0,
  })

  const [latte, setLatte] = useState({
    name: 'Latte',
    quantity: 0,
  })

  const [capuccino, setCapuccino] = useState({
    name: 'Capuccino',
    quantity: 0,
  })

  const [macchiato, setMacchiato] = useState({
    name: 'Macchiato',
    quantity: 0,
  })

  const [mocaccino, setMocaccino] = useState({
    name: 'Mocaccino',
    quantity: 0,
  })

  const [chocolateQuente, setChocolateQuente] = useState({
    name: 'Chocolate Quente',
    quantity: 0,
  })

  const [cubano, setCubano] = useState({
    name: 'Cubano',
    quantity: 0,
  })

  const [havaiano, setHavaiano] = useState({
    name: 'Havaiano',
    quantity: 0,
  })

  const [arabe, setArabe] = useState({
    name: '??rabe',
    quantity: 0,
  })

  const [irlandes, setIrlandes] = useState({
    name: 'Irland??s',
    quantity: 0,
  })
  return (
    <>
      <Header />

      <HomeContainer>
        <HomeInfos>
          <HomeText>
            <h1>Encontre o caf?? perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery voc?? recebe seu caf?? onde estiver, a
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
              <p>Embalagem mant??m o caf?? intacto</p>
            </Icon>
            <Icon>
              <img src={Icon3} alt="" />
              <p>Entrega r??pida e rastreada</p>
            </Icon>
            <Icon>
              <img src={Icon4} alt="" />
              <p>O caf?? chega fresquinho at?? voc??</p>
            </Icon>
          </HomeIcons>
        </HomeInfos>
        <ImageCoffee>
          <img src={image} alt="" />
        </ImageCoffee>
      </HomeContainer>

      <MenuContainer>
        <Menu> Nossos caf??s </Menu>

        <MenuContainerCoffee>
          <div>
            <ImgMenu>
              <img src={Coffee} alt="" />
            </ImgMenu>
            <CoffeeType> Tradicional </CoffeeType>
            <CoffeeName>{expressoTradicional.name}</CoffeeName>
            <CoffeeDescription>
              {' '}
              O tradicional caf?? feito com ??gua quente e gr??os mo??dos{' '}
            </CoffeeDescription>

            <CoffeeValueBuy>
              <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
              <AmountCoffee>
                <button
                  onClick={() =>
                    setExpressoTradicional({
                      ...expressoTradicional,
                      quantity:
                        expressoTradicional.quantity === 0
                          ? expressoTradicional.quantity
                          : expressoTradicional.quantity - 1,
                    })
                  }
                  id="decrement"
                >
                  {' '}
                  -{' '}
                </button>
                <div>{expressoTradicional.quantity}</div>
                <button
                  onClick={() =>
                    setExpressoTradicional({
                      ...expressoTradicional,
                      quantity: expressoTradicional.quantity + 1,
                    })
                  }
                  id="increment"
                >
                  {' '}
                  +{' '}
                </button>
              </AmountCoffee>
              <CoffeeBuy>
                <ShoppingCartSimple size={20} onClick={() => buyCoffee()}>
                  {goToCheckout && <Navigate to="/Checkout" replace={true} />}
                </ShoppingCartSimple>
              </CoffeeBuy>
            </CoffeeValueBuy>
          </div>

          <div>
            <ImgMenu>
              <img src={CoffeeAmericano} alt="" />
            </ImgMenu>
            <CoffeeType> Tradicional </CoffeeType>
            <CoffeeName>{expressoAmericano.name}</CoffeeName>
            <CoffeeDescription>
              {' '}
              Expresso dilu??do, menos intenso que o tradicional{' '}
            </CoffeeDescription>

            <CoffeeValueBuy>
              <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
              <AmountCoffee>
                <button
                  onClick={() =>
                    setExpressoAmericano({
                      ...expressoAmericano,
                      quantity:
                        expressoAmericano.quantity === 0
                          ? expressoAmericano.quantity
                          : expressoAmericano.quantity - 1,
                    })
                  }
                  id="decrement"
                >
                  {' '}
                  -{' '}
                </button>
                <div>{expressoAmericano.quantity}</div>
                <button
                  onClick={() =>
                    setExpressoAmericano({
                      ...expressoAmericano,
                      quantity: expressoAmericano.quantity + 1,
                    })
                  }
                  id="increment"
                >
                  {' '}
                  +{' '}
                </button>
              </AmountCoffee>
              <CoffeeBuy>
                <ShoppingCartSimple size={20} onClick={() => buyCoffee()}>
                  {goToCheckout && <Navigate to="/Checkout" replace={true} />}
                </ShoppingCartSimple>
              </CoffeeBuy>
            </CoffeeValueBuy>
          </div>

          <div>
            <ImgMenu>
              <img src={CoffeeCremoso} alt="" />
            </ImgMenu>
            <CoffeeType> Tradicional </CoffeeType>
            <CoffeeName>{expressoCremoso.name}</CoffeeName>
            <CoffeeDescription>
              {' '}
              Caf?? expresso tradicional com espuma cremosa{' '}
            </CoffeeDescription>

            <CoffeeValueBuy>
              <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
              <AmountCoffee>
                <button
                  onClick={() =>
                    setExpressoCremoso({
                      ...expressoCremoso,
                      quantity:
                        expressoCremoso.quantity === 0
                          ? expressoCremoso.quantity
                          : expressoCremoso.quantity - 1,
                    })
                  }
                  id="decrement"
                >
                  {' '}
                  -{' '}
                </button>
                <div>{expressoCremoso.quantity}</div>
                <button
                  onClick={() =>
                    setExpressoCremoso({
                      ...expressoCremoso,
                      quantity: expressoCremoso.quantity + 1,
                    })
                  }
                  id="increment"
                >
                  {' '}
                  +{' '}
                </button>
              </AmountCoffee>
              <CoffeeBuy>
                <ShoppingCartSimple size={20} onClick={() => buyCoffee()}>
                  {goToCheckout && <Navigate to="/Checkout" replace={true} />}
                </ShoppingCartSimple>
              </CoffeeBuy>
            </CoffeeValueBuy>
          </div>

          <div>
            <ImgMenu>
              <img src={CoffeeGelado} alt="" />
            </ImgMenu>
            <CoffeeType> Tradicional Gelado</CoffeeType>
            <CoffeeName>{expressoGelado.name}</CoffeeName>
            <CoffeeDescription>
              {' '}
              Bebida preparada com caf?? expresso e cubos de gelo{' '}
            </CoffeeDescription>

            <CoffeeValueBuy>
              <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
              <AmountCoffee>
                <button
                  onClick={() =>
                    setExpressoGelado({
                      ...expressoGelado,
                      quantity:
                        expressoGelado.quantity === 0
                          ? expressoGelado.quantity
                          : expressoGelado.quantity - 1,
                    })
                  }
                  id="decrement"
                >
                  {' '}
                  -{' '}
                </button>
                <div>{expressoGelado.quantity}</div>
                <button
                  onClick={() =>
                    setExpressoGelado({
                      ...expressoGelado,
                      quantity: expressoGelado.quantity + 1,
                    })
                  }
                  id="increment"
                >
                  {' '}
                  +{' '}
                </button>
              </AmountCoffee>
              <CoffeeBuy>
                <ShoppingCartSimple size={20} onClick={() => buyCoffee()}>
                  {goToCheckout && <Navigate to="/Checkout" replace={true} />}
                </ShoppingCartSimple>
              </CoffeeBuy>
            </CoffeeValueBuy>
          </div>

          <div>
            <ImgMenu>
              <img src={CoffeeLeite} alt="" />
            </ImgMenu>
            <CoffeeType> Tradicional Com leite </CoffeeType>
            <CoffeeName>{cafeComLeite.name}</CoffeeName>
            <CoffeeDescription>
              {' '}
              Meio a meio de expresso tradicional com leite vaporizado{' '}
            </CoffeeDescription>

            <CoffeeValueBuy>
              <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
              <AmountCoffee>
                <button
                  onClick={() =>
                    setCafeComLeite({
                      ...cafeComLeite,
                      quantity:
                        cafeComLeite.quantity === 0
                          ? cafeComLeite.quantity
                          : cafeComLeite.quantity - 1,
                    })
                  }
                  id="decrement"
                >
                  {' '}
                  -{' '}
                </button>
                <div>{cafeComLeite.quantity}</div>
                <button
                  onClick={() =>
                    setCafeComLeite({
                      ...cafeComLeite,
                      quantity: cafeComLeite.quantity + 1,
                    })
                  }
                  id="increment"
                >
                  {' '}
                  +{' '}
                </button>
              </AmountCoffee>
              <CoffeeBuy>
                <ShoppingCartSimple size={20} onClick={() => buyCoffee()}>
                  {goToCheckout && <Navigate to="/Checkout" replace={true} />}
                </ShoppingCartSimple>
              </CoffeeBuy>
            </CoffeeValueBuy>
          </div>

          <div>
            <ImgMenu>
              <img src={CoffeeLatte} alt="" />
            </ImgMenu>
            <CoffeeType> Tradicional Com leite </CoffeeType>
            <CoffeeName>{latte.name}</CoffeeName>
            <CoffeeDescription>
              {' '}
              Uma dose de caf?? expresso com o dobro de leite e espuma cremosa{' '}
            </CoffeeDescription>

            <CoffeeValueBuy>
              <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
              <AmountCoffee>
                <button
                  onClick={() =>
                    setLatte({
                      ...latte,
                      quantity:
                        latte.quantity === 0
                          ? latte.quantity
                          : latte.quantity - 1,
                    })
                  }
                  id="decrement"
                >
                  {' '}
                  -{' '}
                </button>
                <div>{latte.quantity}</div>
                <button
                  onClick={() =>
                    setLatte({
                      ...latte,
                      quantity: latte.quantity + 1,
                    })
                  }
                  id="increment"
                >
                  {' '}
                  +{' '}
                </button>
              </AmountCoffee>
              <CoffeeBuy>
                <ShoppingCartSimple size={20} onClick={() => buyCoffee()}>
                  {goToCheckout && <Navigate to="/Checkout" replace={true} />}
                </ShoppingCartSimple>
              </CoffeeBuy>
            </CoffeeValueBuy>
          </div>

          <div>
            <ImgMenu>
              <img src={CoffeeCapuccino} alt="" />
            </ImgMenu>
            <CoffeeType> Tradicional Com leite </CoffeeType>
            <CoffeeName>{capuccino.name}</CoffeeName>
            <CoffeeDescription>
              {' '}
              Bebida com canela feita de doses iguais de caf??, leite e espuma{' '}
            </CoffeeDescription>

            <CoffeeValueBuy>
              <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
              <AmountCoffee>
                <button
                  onClick={() =>
                    setCapuccino({
                      ...capuccino,
                      quantity:
                        capuccino.quantity === 0
                          ? capuccino.quantity
                          : capuccino.quantity - 1,
                    })
                  }
                  id="decrement"
                >
                  {' '}
                  -{' '}
                </button>
                <div>{capuccino.quantity}</div>
                <button
                  onClick={() =>
                    setCapuccino({
                      ...capuccino,
                      quantity: capuccino.quantity + 1,
                    })
                  }
                  id="increment"
                >
                  {' '}
                  +{' '}
                </button>
              </AmountCoffee>
              <CoffeeBuy>
                <ShoppingCartSimple size={20} onClick={() => buyCoffee()}>
                  {goToCheckout && <Navigate to="/Checkout" replace={true} />}
                </ShoppingCartSimple>
              </CoffeeBuy>
            </CoffeeValueBuy>
          </div>

          <div>
            <ImgMenu>
              <img src={CoffeeMacchiato} alt="" />
            </ImgMenu>
            <CoffeeType> Tradicional Com leite </CoffeeType>
            <CoffeeName>{macchiato.name}</CoffeeName>
            <CoffeeDescription>
              {' '}
              Caf?? expresso misturado com um pouco de leite quente e espuma{' '}
            </CoffeeDescription>

            <CoffeeValueBuy>
              <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
              <AmountCoffee>
                <button
                  onClick={() =>
                    setMacchiato({
                      ...macchiato,
                      quantity:
                        macchiato.quantity === 0
                          ? macchiato.quantity
                          : macchiato.quantity - 1,
                    })
                  }
                  id="decrement"
                >
                  {' '}
                  -{' '}
                </button>
                <div>{macchiato.quantity}</div>
                <button
                  onClick={() =>
                    setMacchiato({
                      ...macchiato,
                      quantity: macchiato.quantity + 1,
                    })
                  }
                  id="increment"
                >
                  {' '}
                  +{' '}
                </button>
              </AmountCoffee>
              <CoffeeBuy>
                <ShoppingCartSimple size={20} onClick={() => buyCoffee()}>
                  {goToCheckout && <Navigate to="/Checkout" replace={true} />}
                </ShoppingCartSimple>
              </CoffeeBuy>
            </CoffeeValueBuy>
          </div>

          <div>
            <ImgMenu>
              <img src={CoffeeMocaccino} alt="" />
            </ImgMenu>
            <CoffeeType> Tradicional Com leite </CoffeeType>
            <CoffeeName>{mocaccino.name}</CoffeeName>
            <CoffeeDescription>
              {' '}
              Caf?? expresso com calda de chocolate, pouco leite e espuma{' '}
            </CoffeeDescription>

            <CoffeeValueBuy>
              <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
              <AmountCoffee>
                <button
                  onClick={() =>
                    setMocaccino({
                      ...mocaccino,
                      quantity:
                        mocaccino.quantity === 0
                          ? mocaccino.quantity
                          : mocaccino.quantity - 1,
                    })
                  }
                  id="decrement"
                >
                  {' '}
                  -{' '}
                </button>
                <div>{mocaccino.quantity}</div>
                <button
                  onClick={() =>
                    setMocaccino({
                      ...mocaccino,
                      quantity: mocaccino.quantity + 1,
                    })
                  }
                  id="increment"
                >
                  {' '}
                  +{' '}
                </button>
              </AmountCoffee>
              <CoffeeBuy>
                <ShoppingCartSimple size={20} onClick={() => buyCoffee()}>
                  {goToCheckout && <Navigate to="/Checkout" replace={true} />}
                </ShoppingCartSimple>
              </CoffeeBuy>
            </CoffeeValueBuy>
          </div>

          <div>
            <ImgMenu>
              <img src={ChocolateQuente} alt="" />
            </ImgMenu>
            <CoffeeType> Especial Com leite </CoffeeType>
            <CoffeeName>{chocolateQuente.name}</CoffeeName>
            <CoffeeDescription>
              {' '}
              Bebida feita com chocolate dissolvido no leite quente e caf??{' '}
            </CoffeeDescription>

            <CoffeeValueBuy>
              <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
              <AmountCoffee>
                <button
                  onClick={() =>
                    setChocolateQuente({
                      ...chocolateQuente,
                      quantity:
                        chocolateQuente.quantity === 0
                          ? chocolateQuente.quantity
                          : chocolateQuente.quantity - 1,
                    })
                  }
                  id="decrement"
                >
                  {' '}
                  -{' '}
                </button>
                <div>{chocolateQuente.quantity}</div>
                <button
                  onClick={() =>
                    setChocolateQuente({
                      ...chocolateQuente,
                      quantity: chocolateQuente.quantity + 1,
                    })
                  }
                  id="increment"
                >
                  {' '}
                  +{' '}
                </button>
              </AmountCoffee>
              <CoffeeBuy>
                <ShoppingCartSimple size={20} onClick={() => buyCoffee()}>
                  {goToCheckout && <Navigate to="/Checkout" replace={true} />}
                </ShoppingCartSimple>
              </CoffeeBuy>
            </CoffeeValueBuy>
          </div>

          <div>
            <ImgMenu>
              <img src={CoffeeCubano} alt="" />
            </ImgMenu>
            <CoffeeType> Especial Alco??lico Gelado </CoffeeType>
            <CoffeeName>{cubano.name}</CoffeeName>
            <CoffeeDescription>
              {' '}
              Drink gelado de caf?? expresso com rum, creme de leite e hortel??{' '}
            </CoffeeDescription>

            <CoffeeValueBuy>
              <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
              <AmountCoffee>
                <button
                  onClick={() =>
                    setCubano({
                      ...cubano,
                      quantity:
                        cubano.quantity === 0
                          ? cubano.quantity
                          : cubano.quantity - 1,
                    })
                  }
                  id="decrement"
                >
                  {' '}
                  -{' '}
                </button>
                <div>{cubano.quantity}</div>
                <button
                  onClick={() =>
                    setCubano({
                      ...cubano,
                      quantity: cubano.quantity + 1,
                    })
                  }
                  id="increment"
                >
                  {' '}
                  +{' '}
                </button>
              </AmountCoffee>
              <CoffeeBuy>
                <ShoppingCartSimple size={20} onClick={() => buyCoffee()}>
                  {goToCheckout && <Navigate to="/Checkout" replace={true} />}
                </ShoppingCartSimple>
              </CoffeeBuy>
            </CoffeeValueBuy>
          </div>

          <div>
            <ImgMenu>
              <img src={CoffeeHavaiano} alt="" />
            </ImgMenu>
            <CoffeeType> Especial </CoffeeType>
            <CoffeeName>{havaiano.name}</CoffeeName>
            <CoffeeDescription>
              {' '}
              Bebida adocicada preparada com caf?? e leite de coco{' '}
            </CoffeeDescription>

            <CoffeeValueBuy>
              <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
              <AmountCoffee>
                <button
                  onClick={() =>
                    setHavaiano({
                      ...havaiano,
                      quantity:
                        havaiano.quantity === 0
                          ? havaiano.quantity
                          : havaiano.quantity - 1,
                    })
                  }
                  id="decrement"
                >
                  {' '}
                  -{' '}
                </button>
                <div>{havaiano.quantity}</div>
                <button
                  onClick={() =>
                    setHavaiano({
                      ...havaiano,
                      quantity: havaiano.quantity + 1,
                    })
                  }
                  id="increment"
                >
                  {' '}
                  +{' '}
                </button>
              </AmountCoffee>
              <CoffeeBuy>
                <ShoppingCartSimple size={20} onClick={() => buyCoffee()}>
                  {goToCheckout && <Navigate to="/Checkout" replace={true} />}
                </ShoppingCartSimple>
              </CoffeeBuy>
            </CoffeeValueBuy>
          </div>

          <div>
            <ImgMenu>
              <img src={CoffeeArabe} alt="" />
            </ImgMenu>
            <CoffeeType> Especial </CoffeeType>
            <CoffeeName>{arabe.name}</CoffeeName>
            <CoffeeDescription>
              {' '}
              Bebida preparada com gr??os de caf?? ??rabe e especiarias{' '}
            </CoffeeDescription>

            <CoffeeValueBuy>
              <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
              <AmountCoffee>
                <button
                  onClick={() =>
                    setArabe({
                      ...arabe,
                      quantity:
                        arabe.quantity === 0
                          ? arabe.quantity
                          : arabe.quantity - 1,
                    })
                  }
                  id="decrement"
                >
                  {' '}
                  -{' '}
                </button>
                <div>{arabe.quantity}</div>
                <button
                  onClick={() =>
                    setArabe({
                      ...arabe,
                      quantity: arabe.quantity + 1,
                    })
                  }
                  id="increment"
                >
                  {' '}
                  +{' '}
                </button>
              </AmountCoffee>
              <CoffeeBuy>
                <ShoppingCartSimple size={20} onClick={() => buyCoffee()}>
                  {goToCheckout && <Navigate to="/Checkout" replace={true} />}
                </ShoppingCartSimple>
              </CoffeeBuy>
            </CoffeeValueBuy>
          </div>

          <div>
            <ImgMenu>
              <img src={CoffeeIrlandes} alt="" />
            </ImgMenu>
            <CoffeeType> Especial Alco??lico </CoffeeType>
            <CoffeeName>{irlandes.name}</CoffeeName>
            <CoffeeDescription>
              {' '}
              Bebida a base de caf??, u??sque irland??s, a????car e chantilly{' '}
            </CoffeeDescription>

            <CoffeeValueBuy>
              <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
              <AmountCoffee>
                <button
                  onClick={() =>
                    setIrlandes({
                      ...irlandes,
                      quantity:
                        irlandes.quantity === 0
                          ? irlandes.quantity
                          : irlandes.quantity - 1,
                    })
                  }
                  id="decrement"
                >
                  {' '}
                  -{' '}
                </button>
                <div>{irlandes.quantity}</div>
                <button
                  onClick={() =>
                    setIrlandes({
                      ...irlandes,
                      quantity: irlandes.quantity + 1,
                    })
                  }
                  id="increment"
                >
                  {' '}
                  +{' '}
                </button>
              </AmountCoffee>
              <CoffeeBuy>
                <ShoppingCartSimple size={20} onClick={() => buyCoffee()}>
                  {goToCheckout && <Navigate to="/Checkout" replace={true} />}
                </ShoppingCartSimple>
              </CoffeeBuy>
            </CoffeeValueBuy>
          </div>
        </MenuContainerCoffee>
      </MenuContainer>
    </>
  )
}
