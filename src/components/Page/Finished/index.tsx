import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Illustration from '../../../../src/assets/Illustration.png'
import { Header } from '../../Header'
import {
  ConfirmedOrder,
  DollarIcon,
  FinishedImg,
  FinishedInfos,
  FinishedText,
  MapPinIcon,
  PageFinished,
  TimerIcon,
} from './styles'

export function Finished() {
  return (
    <>
      <Header />

      <PageFinished>
        <FinishedText>
          <h3>Uhu! Pedido confirmado</h3>
          <p>Agora é só aguardar que logo o café chegará até você</p>

          <ConfirmedOrder>
            <FinishedInfos>
              {' '}
              <MapPinIcon>
                {' '}
                <MapPin size={20} />{' '}
              </MapPinIcon>{' '}
              <p>Entrega em</p>{' '}
            </FinishedInfos>
            <FinishedInfos>
              {' '}
              <TimerIcon>
                {' '}
                <Timer size={20} />{' '}
              </TimerIcon>{' '}
              <p>Previsão de entrega</p>{' '}
            </FinishedInfos>
            <FinishedInfos>
              {' '}
              <DollarIcon>
                {' '}
                <CurrencyDollar size={20} />{' '}
              </DollarIcon>{' '}
              <p>Pagamento na entrega</p>{' '}
            </FinishedInfos>
          </ConfirmedOrder>
        </FinishedText>

        <FinishedImg>
          <img src={Illustration} alt="" />
        </FinishedImg>
      </PageFinished>
    </>
  )
}
