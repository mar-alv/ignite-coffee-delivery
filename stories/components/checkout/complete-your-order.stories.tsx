import { CompleteYourOrder } from '@components'
import { customRender } from '../../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'

const meta = {
  title: 'Checkout/CompleteYourOrder',
  component: CompleteYourOrder,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => {
    const [{ deliveryAddress, paymentMethod }, updateArgs] = useArgs()

		return customRender(
			<CompleteYourOrder />,
			{
				deliveryAddress,
				paymentMethod,
				choosePaymentMethod(selectedPaymentMethod) {
					updateArgs({ paymentMethod: selectedPaymentMethod })
				},
				saveDeliveryAddress(updatedDeliveryAddress) {
					updateArgs({ deliveryAddress: updatedDeliveryAddress })
				}
			}
		)
  }
} satisfies Meta<typeof CompleteYourOrder>

export default meta

export const Unfilled: StoryObj = {
	args: {
		deliveryAddress: {
			cep: '',
			city: '',
			complement: '',
			neighborhood: '',
			number: '',
			state: '',
			street: ''
		},
		paymentMethod: null
	}
}
