import { customRender } from '../../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { PaymentMethods } from '@components'
import { useArgs } from '@storybook/preview-api'

const meta = {
  title: 'Checkout/Payment Methods',
  component: PaymentMethods,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => {
    const [{ paymentMethod }, updateArgs] = useArgs()

		return customRender(
			<PaymentMethods />,
			{
				paymentMethod,
				choosePaymentMethod(selectedPaymentMethod) {
					updateArgs({ paymentMethod: selectedPaymentMethod })
				}
			}
		)
  }
} satisfies Meta<typeof PaymentMethods>

export default meta

export const Unselected: StoryObj = {}

export const Selected: StoryObj = {
  args: {
		paymentMethod: {
        id: 0,
        description: "CARTÃO DE CRÉDITO",
        isSelected: true
    }
  }
}
