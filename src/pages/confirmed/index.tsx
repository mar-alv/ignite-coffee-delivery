import { CoffeeContext } from '@context'
import confirmedImage from '../../assets/confirmedImage.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { defaultTheme } from '@styles'
import { stringUtils } from '@utils'
import {
	StyledBorder,
	StyledDelivery,
	StyledDeliveryInfo,
	StyledInfo,
	StyledPage,
	StyledSubTitle,
	StyledTitle
} from './styles'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Confirmed() {
  const { deliveryAddress, hasConfirmedDelivery, paymentMethod } = useContext(CoffeeContext)

	const navigate = useNavigate()

	useEffect(() => {
		if (!hasConfirmedDelivery)
			navigate('/')
	}, [])

  return (
    <StyledPage>
			<StyledTitle className='title-l'>
				Uhu! Pedido confirmado
			</StyledTitle>
			<StyledSubTitle className='text-l-normal'>
				Agora é só aguardar que logo o café chegará até você
			</StyledSubTitle>

      <StyledDelivery className='text-m-normal'>
				<StyledBorder>
					<StyledDeliveryInfo>
						<StyledInfo>
							<MapPin
								color={defaultTheme['base-white']}
								size={32}
								style={{
									backgroundColor: defaultTheme.purple
								}}
								weight='fill'
							/>

							<span>
								Entrega em <b>{deliveryAddress.street}, {deliveryAddress.number}, {deliveryAddress.cep} </b>
							</span>
							<span>
								{deliveryAddress.neighborhood} - {deliveryAddress.city}, {deliveryAddress.state}
							</span>
							{!!deliveryAddress.complement && (
								<span>
									{deliveryAddress.complement}
								</span>
							)}
						</StyledInfo>

						<StyledInfo>
							<Timer
								color={defaultTheme['base-white']}
								size={32}
								style={{
									backgroundColor: defaultTheme.yellow
								}}
								weight='fill'
							/>

							<span>
								Previsão de entrega
							</span>
							<b>
								20 min - 30 min
							</b>
						</StyledInfo>

						<StyledInfo>
							<CurrencyDollar
								color={defaultTheme['base-white']}
								size={32}
								style={{
									backgroundColor: defaultTheme['yellow-dark']
								}}
								weight='fill'
							/>

							<span>
								Pagamento na entrega
							</span>
							<b>
								{stringUtils.toCapitalize(paymentMethod?.description)}
							</b>
						</StyledInfo>
					</StyledDeliveryInfo>
				</StyledBorder>

        <img
          src={confirmedImage}
          alt='Imagem média ilustrativa de um entregador indo levar a entrega até você'
        />
      </StyledDelivery>
    </StyledPage>
  )
}
