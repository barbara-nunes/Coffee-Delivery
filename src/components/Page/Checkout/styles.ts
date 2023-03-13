import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const PageCheckout = styled.div``
export const Page = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const CheckoutOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-left: 150px;

  width: 60%;
`

export const CompletedText = styled.div`
  display: flex;
  align-items: center;
`

export const LocationAddressIcon = styled.div`
  color: #c47f17;
  width: 22px;
  height: 22px;
  flex: none;
`

export const CheckoutAddress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 560px;
  height: 44px;
`

export const CheckoutInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 16px;

  width: 560px;
  height: 216px;
  margin-bottom: 40px;

  input {
    border-radius: 6px;
    border: 0;
    background: #e6e5e5;
    color: #8d8686;
    padding: 1rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`

export const InputCep = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 200px;
  height: 42px;
`

export const InputRua = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 560px;
  height: 42px;
`

export const InputAddress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 560px;
  height: 42px;
`

export const InputUF = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 560px;
  height: 42px;
`

export const CheckoutPayment = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 560px;
  height: 44px;
`

export const CurrencyDollarIcon = styled.div`
  color: #4b2995;
  width: 22px;
  height: 22px;
  flex: none;
`

export const CheckoutPaymentOptions = styled(RadioGroup.Root)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 0.5rem;

  width: 560px;
  height: 51px;
`

export const CashOptionsButton = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 12px;

  width: 150px;
  height: 20px;

  background: #e6e5e5;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
`

export const CreditCardIcon = styled.div`
  color: #4b2995;
  width: 22px;
  height: 22px;
  flex: none;
`

export const BankIcon = styled.div`
  color: #4b2995;
  width: 22px;
  height: 22px;
  flex: none;
`

export const MoneyIcon = styled.div`
  color: #4b2995;
  width: 22px;
  height: 22px;
  flex: none;
`

export const CheckSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;

  width: 40%;
  height: 498px;
  left: 832px;
  top: 182px;

  button[type='submit'] {
    height: 46px;
    border: 0;
    background: #dbac2c;
    color: #fff;
    border-radius: 6px;

    width: 368px;
    height: 46px;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: #c47f17;
      transition: background-color 0.2s;
    }
  }
`
