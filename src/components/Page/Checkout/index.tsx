import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  TrashSimple,
} from 'phosphor-react'
import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { Header } from '../../Header'
import { priceFormatter } from '../../utils/index'
import { AmountCoffee, CoffeeName } from '../Home/styles'

import {
  BankIcon,
  CashOptionsButton,
  CheckoutAddress,
  CheckoutInput,
  CheckoutOrder,
  CheckoutPayment,
  CheckoutPaymentOptions,
  CheckSelect,
  CompletedText,
  CreditCardIcon,
  CurrencyDollarIcon,
  InputAddress,
  InputCep,
  InputRua,
  InputUF,
  LocationAddressIcon,
  MoneyIcon,
  Page,
  PageCheckout,
  TrashIcon,
  Remove,
  TotalOrder,
  CoffeePrice,
  CheckTotal,
  Check,
} from './styles'

export function Checkout() {
  const { state } = useLocation()

  const [coffees, setCoffees] = useState(state)
  console.log(state)

  const [goToFinished, setGoToFinished] = useState(false)
  function confirmOrder() {
    setGoToFinished(true)
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
    <PageCheckout>
      <Header />

      <Page>
        <CheckoutOrder>
          <CompletedText>
            <h3>Complete seu pedido</h3>
          </CompletedText>

          <CheckoutAddress>
            <LocationAddressIcon>
              <MapPinLine size={20} />
            </LocationAddressIcon>

            <div>
              <p>Endereço de Entregas</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CheckoutAddress>

          <CheckoutInput>
            <InputCep>
              <input type="number" placeholder="CEP" required />
            </InputCep>
            <InputRua>
              <input type="text" placeholder="Rua" required />
            </InputRua>

            <InputAddress className="column">
              <input type="number" placeholder="Número" required />
              <input type="text" placeholder="Complemento" />
            </InputAddress>

            <InputUF className="column">
              <input type="text" placeholder="Bairro" required />
              <input type="text" placeholder="Cidade" required />
              <input type="text" placeholder="UF" required />
            </InputUF>
          </CheckoutInput>

          <CheckoutPayment>
            <CurrencyDollarIcon>
              <CurrencyDollar size={20} />
            </CurrencyDollarIcon>

            <div>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </CheckoutPayment>

          <CheckoutPaymentOptions>
            <CashOptionsButton value="checked">
              {' '}
              <CreditCardIcon>
                <CreditCard size={18} />
              </CreditCardIcon>{' '}
              <p>Cartão de crédito</p>{' '}
            </CashOptionsButton>

            <CashOptionsButton value="checked">
              {' '}
              <BankIcon>
                <Bank size={18} />
              </BankIcon>{' '}
              <p>Cartão de débito</p>{' '}
            </CashOptionsButton>

            <CashOptionsButton value="checked">
              {' '}
              <MoneyIcon>
                <Money size={18} />
              </MoneyIcon>{' '}
              <p>Dinheiro</p>{' '}
            </CashOptionsButton>
          </CheckoutPaymentOptions>
        </CheckoutOrder>

        <Check>
          <h3>Cafés selecionados</h3>

          <CheckSelect>
            {coffees.map((coffee) => {
              return (
                <div key={coffee.name}>
                  <div>
                    <img src={coffee.image} alt="" />
                    <CoffeeName>{coffee.name}</CoffeeName>
                    <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
                    <AmountCoffee>
                      <button onClick={() => removeCoffee(coffee.name)}>
                        {' '}
                        -{' '}
                      </button>
                      <div>{coffee.quantity}</div>
                      <button onClick={() => addCoffee(coffee.name)}>
                        {' '}
                        +{' '}
                      </button>
                    </AmountCoffee>

                    <Remove>
                      <button type="submit">
                        <TrashIcon>
                          <TrashSimple size={18} />
                        </TrashIcon>
                        Remover
                      </button>
                    </Remove>
                  </div>
                </div>
              )
            })}
          </CheckSelect>

          <CheckTotal>
            <TotalOrder>
              <p>Total de itens</p>{' '}
              <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
              <p>Entrega</p>{' '}
              <CoffeePrice>{priceFormatter.format(3.5)}</CoffeePrice>
              <h4>Total</h4>{' '}
              <CoffeePrice>{priceFormatter.format(9.9)}</CoffeePrice>
            </TotalOrder>

            <button type="submit" onClick={() => confirmOrder()}>
              {goToFinished && <Navigate to="/Finished" replace={true} />}
              Confirmar Pedido
            </button>
          </CheckTotal>
        </Check>
      </Page>
    </PageCheckout>
  )
}
