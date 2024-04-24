import { customRender } from '../../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { Payment } from '@components'
import { useArgs } from '@storybook/preview-api'

const meta = {
  title: 'Checkout/Payment',
  component: Payment,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => {
    const [{ paymentMethod }, updateArgs] = useArgs()

		return customRender(
			<Payment />,
			{
				paymentMethod,
				choosePaymentMethod(selectedPaymentMethod) {
					updateArgs({ paymentMethod: selectedPaymentMethod })
				}
			}
		)
  }
} satisfies Meta<typeof Payment>

export default meta

export const Unselected: StoryObj = {
  args: {
		paymentMethod: null
  }
}

export const Selected: StoryObj = {
  args: {
		paymentMethod: {
			id: 0,
			description: 'CARTÃO DE CRÉDITO',
			isSelected: true
		}
  }
}
