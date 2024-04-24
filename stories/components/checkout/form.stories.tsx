import { customRender } from '../../stories-utils'
import { Form } from '@components'
import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'

const meta = {
  title: 'Checkout/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => {
    const [{ deliveryAddress }, updateArgs] = useArgs()

		return customRender(
			<Form />,
			{
				deliveryAddress,
				saveDeliveryAddress(updatedDeliveryAddress) {
					updateArgs({ deliveryAddress: updatedDeliveryAddress })
				}
			}
		)
  }
} satisfies Meta<typeof Form>

export default meta

export const Unfilled: StoryObj = {}

export const Filled: StoryObj = {
	args: {
		deliveryAddress: {
			cep: '12345678',
			city: 'Cidade',
			complement: 'Complemento',
			neighborhood: 'Bairro',
			number: '123',
			state: 'XX',
			street: 'Rua'
		}
	}
}
