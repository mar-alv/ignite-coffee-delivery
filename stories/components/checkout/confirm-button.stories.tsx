import { ConfirmButton } from '@components'
import { customRender } from '../../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'

const meta = {
  title: 'Checkout/Confirm Button',
  component: ConfirmButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => {
    const [{ coffees, deliveryAddress, paymentMethod }] = useArgs()

		return customRender(
			<ConfirmButton />,
			{
				coffees,
				deliveryAddress,
				paymentMethod
			}
		)
  }
} satisfies Meta<typeof ConfirmButton>

export default meta

export const Unconfirmed: StoryObj = {
	args: {
		deliveryAddress: {
			cep: '',
			city: '',
			neighborhood: '',
			number: '',
			state: '',
			street: ''
		},
	}
}

export const Confirmed: StoryObj = {
  args: {
		coffees: [
			{
				id: 0,
				name: 'Expresso Tradicional',
				description: 'O tradicional café feito com água quente e grãos moídos',
				price: 9.9,
				image: './src/assets/espressoImage.png',
				tags: [
					{
						id: 0,
						description: 'TRADICIONAL'
					}
				]
			}
		],
		deliveryAddress: {
			cep: 'a',
			city: 'a',
			neighborhood: 'a',
			number: 'a',
			state: 'a',
			street: 'a'
		},
		paymentMethod: {
        id: 0,
        description: "CARTÃO DE CRÉDITO",
        isSelected: true
    }
  }
}
