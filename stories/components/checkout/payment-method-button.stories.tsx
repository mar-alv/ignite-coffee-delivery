import { customRender } from '../../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { PaymentMethodButton } from '@components'
import { useArgs } from '@storybook/preview-api'

const meta = {
  title: 'Checkout/Payment Method Button',
  component: PaymentMethodButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: ({...args}) => {
    const [{ isSelected, paymentMethod }, updateArgs] = useArgs()

		return customRender(
			<PaymentMethodButton
				isSelected={isSelected}
				onSelect={() => {
					updateArgs({ isSelected: true })
				}}
				paymentMethod={args.paymentMethod}
			/>,
			{
				paymentMethod,
				choosePaymentMethod(selectedPaymentMethod) {
					updateArgs({ paymentMethod: selectedPaymentMethod })
				}
			}
		)
  }
} satisfies Meta<typeof PaymentMethodButton>

export default meta

export const CreditCard: StoryObj = {
  args: {
		isSelected: false,
		paymentMethod: {
			id: 0,
			description: "CARTÃO DE CRÉDITO",
			isSelected: false
		}
  }
}

export const DebitCard: StoryObj = {
  args: {
		isSelected: false,
		paymentMethod: {
			id: 1,
			description: 'CARTÃO DE DÉBITO',
			isSelected: false
		}
  }
}

export const Cash: StoryObj = {
  args: {
		isSelected: false,
		paymentMethod: {
      id: 2,
      description: 'DINHEIRO',
      isSelected: false
		}
  }
}
