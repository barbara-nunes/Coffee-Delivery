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
} from './styles'

export function Checkout() {
  const { state } = useLocation()
  console.log(state)

  const [goToFinished, setGoToFinished] = useState(false)
  function confirmOrder() {
    setGoToFinished(true)
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

        <CheckSelect>
          <h3>Cafés selecionados</h3>
          {/* <img src={} alt="" /> */}
          {/* <p>Expresso tradicional {coffee.name} </p> */}
          {/* <p>{priceFormatter.format(9.9)}</p> */}
          {/* <AmountCoffee>
            <button onClick={() => removeCoffee(coffee.name)}> - </button>
            <div>{coffee.quantity}</div>
            <button onClick={() => addCoffee(coffee.name)}> + </button>
          </AmountCoffee> */}

          <Remove>
            <TrashIcon>
              <TrashSimple size={18} />
            </TrashIcon>{' '}
            <p>Remover</p>
          </Remove>

          <TotalOrder>
            <p>Total de itens</p>
            <p>Entrega</p>
            <h3>Total</h3>
          </TotalOrder>

          <button type="submit" onClick={() => confirmOrder()}>
            {goToFinished && <Navigate to="/Finished" replace={true} />}
            Confirmar Pedido
          </button>
        </CheckSelect>
      </Page>
    </PageCheckout>
  )
}
